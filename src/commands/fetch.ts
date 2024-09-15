import { createCommand } from 'commander'
import {
  fetch,
  saveDataAsFile,
  logger,
  DATA_PATH,
  readFluxPressThemeConfig,
} from '@fluxpress/core'
import fs from 'fs-extra'
import path from 'node:path'

export const fetchCommand = createCommand('fetch').action(async () => {
  await fs.remove(DATA_PATH)

  const themeConfig = await readFluxPressThemeConfig()
  for (const need_data of themeConfig.need_data) {
    const data = await fetch(need_data)
    const dataPath = path.join(DATA_PATH, `${need_data}.json`)
    await saveDataAsFile(need_data, data)
    logger.info(`${need_data} 数据已保存到 ${dataPath}`)
  }
})
