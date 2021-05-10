// @ts-nocheck

import { $, cd } from 'zx'
import prompts from 'prompts'
import { getPackageInfo } from './packages.mjs'

const packages = await getPackageInfo()

const { pkg } = await prompts({
  name: 'pkg',
  type: 'select',
  message: 'Choose a package',
  choices: packages.map(p => ({ value: p, title: p.name })),
})

if (!pkg)
  process.exit(1)

cd(pkg.path)
await $`bumpp --push --commit "chore: release ${pkg.name} v"`
