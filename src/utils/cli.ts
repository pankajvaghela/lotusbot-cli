import fs from 'fs';
import { Command } from '../utils/types.js';

export const getCommandsList = async () => {
  const listOfModuleDir = fs.readdirSync('./dist/modules');

  return (
    await Promise.all(
      listOfModuleDir.map(async (moduleDir) => {
        const commandsList = await import(`../modules/${moduleDir}/index.js`);
        return commandsList;
      }),
    )
  )
    .flat(1)
    .map((module) => Object.values(module.Commands))
    .flat(1) as Command[];
};
