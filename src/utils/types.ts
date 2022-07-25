export type Command = {
  command: string;
  fullDescription: string;
  builder: (...args: any) => void;
  resolver: (argv: any) => void;
  showHelp?: boolean;
};
