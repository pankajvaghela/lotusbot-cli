import { createModule, ModuleName } from '../../models/index.js';

export const ReactModule = createModule(
  ModuleName.React,
  ModuleName.React.toLowerCase(),
  ModuleName.React.toLowerCase(),
);

export const Config = {
  module: ReactModule,
};
