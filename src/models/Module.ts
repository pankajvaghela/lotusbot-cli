import { ModuleName } from './ModuleName.js';

export interface Module<Name extends ModuleName> {
  name: Name;
  namespace: string;
  commandPrefix: string;
}

export const createModule = <Name extends ModuleName>(
  name: Name,
  namespace?: string,
  commandPrefix?: string,
): Module<Name> => ({
  name,
  namespace: namespace ?? name.toLowerCase(),
  commandPrefix: commandPrefix ?? name.toLowerCase(),
});
