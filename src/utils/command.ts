import { Module, ModuleName } from '../models/index.js';
import { Command } from './types.js';

export const createCommand = <MN extends ModuleName>(params: {
  module: Module<MN>;
  command: Command;
  prefix?: string;
}) => {
  const { module, command } = params;
  const { prefix = module.commandPrefix } = params;

  return {
    ...command,
    command: prefix ? `${prefix}:${command.command}` : command.command,
  };
};
