import chalk from 'chalk';
import boxen from 'boxen';

const log = console.log;
export const PROJECT_NAME = 'LotBot';

export const HelloCommand = {
  summary: 'hello <name>',
  fullDescription: ': Say hello to someone',
  fn1: (...args: any) => {
    // console.log(args);
  },

  commandResolver: (argv: any) => {
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
};
