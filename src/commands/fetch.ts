import { createCommand } from 'commander'
import {
  DATA_PATH__ISSUES,
  fetchDataIssues,
  saveDataAsFile,
  logger,
} from '@fluxpress/core'

export const fetchCommand = createCommand('fetch').action(async () => {
  const dataIssues = await fetchDataIssues()
  await saveDataAsFile(DATA_PATH__ISSUES, dataIssues)
  logger.info(`数据已保存到 ${DATA_PATH__ISSUES}`)
})
