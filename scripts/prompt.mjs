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
const msg = `chore: release ${pkg.name} v`
const tag = `${pkg.name}@v`
await $`bumpp --push --commit ${msg} --tag ${tag}`
