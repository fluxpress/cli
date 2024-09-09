import { createCommand } from 'commander'
import { logger, readThemePath } from '@fluxpress/core'
import EventEmitter from 'events'
import fs from 'fs-extra'
import path from 'node:path'

export const generateCommand = createCommand('generate').action(async () => {
  const themePath = await readThemePath()
  if (!themePath) {
    logger.error(
      '未找到主题目录，请安装主题，并在 fluxpress.config.js 中配置 theme 字段，以启用主题',
    )
    return
  }

  const eventsScriptsPath = path.join(themePath, 'scripts', 'events')
  const files = await fs.readdir(eventsScriptsPath)

  const fluxpress = new EventEmitter()

  for (const file of files) {
    if (file.endsWith('.js')) {
      ;(await import(path.join(eventsScriptsPath, file))).default(fluxpress)
    }
  }

  fluxpress.emit('generate')
})
