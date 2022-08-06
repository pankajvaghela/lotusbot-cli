import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { getCommandsList } from '../utils/cli.js';

export const initCli = async () => {
  const yargsApp = yargs(hideBin(process.argv));

  const Commands = await getCommandsList();

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
