import fs from 'fs';
import path from 'path';
import uploadConfig from '@config/upload';

import IStorageProvider from '../models/IStorageProvider';

class DiskStoraProvider implements IStorageProvider {
  public async saveFile(file: string): Promise<string> {
    await fs.promises.rename(
      path.resolve(uploadConfig.tmpFolder, file),
      path.resolve(uploadConfig.uploadFolder, file),
    );

    return file;
  }

  public async deleteFile(file: string): Promise<void> {
    const filePath = path.resolve(uploadConfig.uploadFolder, file);

    // testa se o arquivo existe
    try {
      await fs.promises.stat(filePath);
    } catch {
      // não precisa deletar o arquivo se ele não existe ¯\_(ツ)_/¯
      return;
    }

    await fs.promises.unlink(filePath);
  }
}

export default DiskStoraProvider;
