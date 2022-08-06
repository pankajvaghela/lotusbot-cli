import { createModule, ModuleName } from '../../models/index.js';

export const HandlebarsModule = createModule(
  ModuleName.Handlebars,
  ModuleName.Handlebars.toLowerCase(),
  'hb',
);

export const Config = {
  module: HandlebarsModule,
};
