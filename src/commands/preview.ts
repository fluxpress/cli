import { createCommand } from 'commander'
import express from 'express'
import { logger, OUTPUT_PATH } from '@fluxpress/core'

export const previewCommand = createCommand('preview').action(async () => {
  const app = express()
  const port = 9895
  app.use(express.static(OUTPUT_PATH))
  app.listen(port, () => {
    logger.info(`预览服务已启动，点击 http://localhost:${port}`)
  })
})
