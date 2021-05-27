// @ts-nocheck

import { execSync } from 'child_process'
import { join } from 'path'
import fs from 'fs-extra'
import { cd, $ } from 'zx'
import { promptForPackage } from './packages.mjs'

const pkg = await promptForPackage()

execSync('pnpx bumpp', { stdio: 'inherit', cwd: pkg.path })
cd(pkg.path)

const { version } = await fs.readJSON(join(pkg.path, 'package.json'))

const msg = `chore: release ${pkg.name} v${version}`
const tag = `${pkg.name}@v${version}`
await $`pnpx conventional-changelog -p angular -i CHANGELOG.md -s --commit-path . --lerna-package ${pkg.name}`
await $`git add .`
await $`git commit -m ${msg}`
await $`git tag ${tag}`
await $`git push`
await $`git push --tags`
