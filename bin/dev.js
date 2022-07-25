#!/usr/bin/env node 

//--experimental-specifier-resolution=node
import { join } from 'path';


import lotbot from '../dist/lotbot.js'

// In dev mode -> use ts-node and dev plugins
process.env.NODE_ENV = 'development';


// In dev mode, always show stack traces

// Start the CLI
lotbot.init();
