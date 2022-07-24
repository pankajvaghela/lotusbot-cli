import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

export const PROJECT_NAME = 'LotBot';

export const initCli = () => {
  yargs(hideBin(process.argv))
    .command(
      'hello <name>',
      ': Say hello to someone',
      () => {},
      (argv) => {
        console.log(`Welcome to ${PROJECT_NAME} CLI`);
        console.info('Hello', argv.name);
      },
    )
    .demandCommand(1)
    .parse();
};
