// @ts-nocheck

import path from 'path'
import { $, cd } from 'zx'
import fs from 'fs-extra'
import * as parser from '@slidev/parser/fs'
import { range } from '@antfu/utils'
import { getPackagePaths } from './packages.mjs'

function toScreenshotName(i) {
  return `${i.toString().padStart(2, '0')}.png`
}

for (const pkg of await getPackagePaths()) {
  const dir = path.resolve('./screenshots/', path.basename(pkg))
  if (!fs.existsSync(path.join(pkg, 'example.md')))
    continue
  await fs.ensureDir(dir)

  const data = await parser.load(path.join(pkg, 'example.md'))
  const existing = await fs.readdir(dir)

  const pages = range(1, data.slides.length + 1)
    .filter(i => !existing.includes(toScreenshotName(i)))

  if (pages.length) {
    cd(pkg)
    await $`pnpx slidev export example.md --format png --output '${dir}' --range ${pages.join(',')}`
    cd(dir)
    await $([`pngquant 256 ${pages.map(toScreenshotName).join(' ')} --ext .png -f --quality 95`])
  }
}
