import { createModule, ModuleName } from '../../models/index.js';

export const BasicModule = createModule(
  ModuleName.Basic,
  ModuleName.Basic.toLowerCase(),
  ModuleName.Basic.toLowerCase(),
);

export const Config = {
  module: BasicModule,
};
