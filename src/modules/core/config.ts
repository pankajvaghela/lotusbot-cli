import { createModule, ModuleName } from '../../models/index.js';

export const CoreModule = createModule(
  ModuleName.Core,
  ModuleName.Core.toLowerCase(),
  '',
);

export const Config = {
  module: CoreModule,
};
