import chalk from 'chalk';
import boxen from 'boxen';
import { createCommand } from '../../../utils/command.js';
import { ModuleName } from '../config.js';

const log = console.log;
export const PROJECT_NAME = 'LotBot';

export const HelloCommand = createCommand(ModuleName, {
  command: 'hello <name>',
  fullDescription: ': Say hello to someone',
  builder: (...args: any) => {
    // console.log(args);
  },
  resolver: (argv: any) => {
    log(' ');
    console.log(
      boxen(chalk.blue(`Welcome to ${PROJECT_NAME} CLI!`), {
        padding: 1,
        margin: 1,
        borderStyle: 'double',
      }),
    );

    console.info('Hello', argv.name);
  },
});
