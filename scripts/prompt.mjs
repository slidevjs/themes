// @ts-nocheck

import { $, cd } from 'zx'
import { promptForPackage } from './packages.mjs'

const pkg = await promptForPackage()

cd(pkg.path)
const msg = `chore: release ${pkg.name} v`
const tag = `${pkg.name}@v`
await $`bumpp --push --commit ${msg} --tag ${tag}`
