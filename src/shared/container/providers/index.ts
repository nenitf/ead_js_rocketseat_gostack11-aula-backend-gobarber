import { container } from 'tsyringe';

import IStorageProvider from './StorageProvider/models/IStorageProvider';
import DiskStorageProvider from './StorageProvider/implementations/DiskStorageProvider';

// deve depender do ambiente
// dev é um, prod outro
container.registerSingleton<IStorageProvider>(
  'StorageProvider',
  DiskStorageProvider,
);
