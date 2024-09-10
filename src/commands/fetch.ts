import { createCommand } from 'commander'
import {
  DATA_PATH__ISSUES,
  fetchDataIssues,
  saveDataAsFile,
  logger,
  DATA_PATH,
} from '@fluxpress/core'
import fs from 'fs-extra'

export const fetchCommand = createCommand('fetch').action(async () => {
  await fs.remove(DATA_PATH)

  const dataIssues = await fetchDataIssues()
  await saveDataAsFile(DATA_PATH__ISSUES, dataIssues)
  logger.info(`数据已保存到 ${DATA_PATH__ISSUES}`)
})
