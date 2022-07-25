import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { Commands } from '../commands/index.js';
export const PROJECT_NAME = 'LotBot';

export const initCli = () => {
  const yargsApp = yargs(hideBin(process.argv));

  Object.values(Commands).forEach((command) => {
    yargsApp.command(
      command.summary,
      command.fullDescription,
      command.fn1,
      command.commandResolver,
    );
  });

  yargsApp.demandCommand(1).parse();
};
