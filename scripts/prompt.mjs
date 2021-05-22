// @ts-nocheck

import { execSync } from 'child_process'
import { cd, $ } from 'zx'
import { promptForPackage } from './packages.mjs'

const pkg = await promptForPackage()

const msg = `chore: release ${pkg.name} v`
const tag = `${pkg.name}@v`
execSync('pnpx bumpp', { stdio: 'inherit', cwd: pkg.path })
cd(pkg.path)
await $`pnpx conventional-changelog -p angular -i CHANGELOG.md -s --commit-path . --lerna-package ${pkg.name}`
await $`git add .`
await $`git commit -m ${msg}`
await $`git tag ${tag}`
await $`git push --follow-tags`
