import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { CommandNamespace } from '../CommandNamespaces.js';
import { Command } from '../utils/types.js';

export const initCli = async () => {
  const yargsApp = yargs(hideBin(process.argv));

  const Commands = await getCommandsList(Object.values(CommandNamespace));

  Commands.forEach((command) => {
    yargsApp.command(
      command.command,
      command.fullDescription,
      command.builder,
      command.resolver,
    );
  });

  yargsApp.help().demandCommand(1).parse();
};

const getCommandsList = async (namespaces: string[]) =>
  (
    await Promise.all(
      namespaces.map(async (CommandNamespace) => {
        const commandsList = await import(
          `../modules/${CommandNamespace}/index.js`
        );
        return commandsList;
      }),
    )
  )
    .flat(1)
    .map((module) => Object.values(module.Commands))
    .flat(1) as Command[];
