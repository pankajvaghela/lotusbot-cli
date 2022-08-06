import chalk from 'chalk';
import boxen from 'boxen';
import { createCommand } from '../../../utils/command.js';
import { Config } from '../config.js';

const log = console.log;

export const PlayCommand = createCommand({
  module: Config.module,
  command: {
    command: 'play',
    fullDescription: 'Play with handlebar templates',
    builder: (...args: any) => {
      // console.log(args);
    },
    resolver: (argv: any) => {
      log(' ');
      console.log(
        boxen(
          chalk.blue(
            `Welcome to LotusBot CLI ${Config.module.name} Playground!`,
          ),
          {
            padding: 1,
            margin: 1,
            borderStyle: 'double',
          },
        ),
      );
    },
    showHelp: true,
  },
});
