import { Command } from 'commander'
import {
  fetchCommand,
  generateCommand,
  previewCommand,
} from './commands/index.js'

const program = new Command()

program
  .addCommand(fetchCommand)
  .addCommand(generateCommand)
  .addCommand(previewCommand)
  .parse()
