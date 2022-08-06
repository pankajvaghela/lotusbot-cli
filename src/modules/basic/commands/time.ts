import chalk from 'chalk';
import { createCommand } from '../../../utils/command.js';
import { Config } from '../config.js';

export const TimeCommand = createCommand({
  module: Config.module,
  command: {
    command: 'time',
    fullDescription: 'Output current time',
    builder: (...args: any) => {
      // console.log(args);
    },
    resolver: (argv: any) => {
      const event = new Date();

      console.log(
        chalk.blue(`The time is : ${event.toLocaleString('en-US')}.`),
      );
    },
  },
});
