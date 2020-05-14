import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export default class AlterProviderFieldToProviderId1587222244881
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // remove coluna provider de appointment
    await queryRunner.dropColumn('appointments', 'provider');

    // cria coluna provider_id no lugar da provider
    await queryRunner.addColumn(
      'appointments',
      new TableColumn({
        name: 'provider_id',
        type: 'uuid',
        isNullable: true,
      }),
    );

    // define a provider_id como FK
    await queryRunner.createForeignKey(
      'appointments', // tabela que terá fk
      new TableForeignKey({
        name: 'AppointmentProvider', // nome da fk
        columnNames: ['provider_id'], // nome da coluna que será fk
        referencedColumnNames: ['id'], // pk da fk
        referencedTableName: 'users', // origem da pk da fk
        onUpdate: 'CASCADE', // caso o id mude será, todos registros mudam
        // onDelete: 'RESTRICTED' // não permide que o id de users seja deletado
        // onDelete: 'CASCADE' // deleta todos os registros relacionados caso o ide seja deletado
        onDelete: 'SET NULL', // deixa como null caso o id de users seja deletado
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // remove fk
    await queryRunner.dropForeignKey('appointments', 'AppointmentProvider');

    // remove coluna nova
    await queryRunner.dropColumn('appointments', 'provider_id');

    // add coluna antiga
    await queryRunner.addColumn(
      'appointments',
      new TableColumn({
        name: 'provider',
        type: 'string',
      }),
    );
  }
}
