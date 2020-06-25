import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export default class AddUserIdToAppointments1593052379810
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // cria coluna provider_id no lugar da provider
    await queryRunner.addColumn(
      'appointments',
      new TableColumn({
        name: 'user_id',
        type: 'uuid',
        isNullable: true,
      }),
    );

    // define a provider_id como FK
    await queryRunner.createForeignKey(
      'appointments', // tabela que terá fk
      new TableForeignKey({
        name: 'AppointmentUser', // nome da fk
        columnNames: ['user_id'], // nome da coluna que será fk
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
    await queryRunner.dropForeignKey('appointments', 'AppointmentUser');

    // remove coluna nova
    await queryRunner.dropColumn('appointments', 'user_id');
  }
}
