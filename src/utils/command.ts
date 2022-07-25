import { CommandNamespace } from '../CommandNamespaces.js';
import { Command } from './types.js';

export const createCommand = (
  prefix: CommandNamespace | '',
  command: Command,
) => {
  return {
    ...command,
    command: prefix ? `${prefix}:${command.command}` : command.command,
  };
};
