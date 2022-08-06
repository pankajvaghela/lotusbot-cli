import { Module, ModuleName } from '../models/index.js';
import { CoreModule } from '../modules/core/config.js';
import { BasicModule } from '../modules/basic/config.js';
import { ReactModule } from '../modules/react/config.js';

type ModuleList = {
  [M in ModuleName]: Module<M>;
};

export const ModuleList: ModuleList = {
  [ModuleName.Core]: CoreModule,
  [ModuleName.Basic]: BasicModule,
  [ModuleName.React]: ReactModule,
};
