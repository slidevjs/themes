// @ts-nocheck

import { $, cd } from 'zx'
import { getPackageInfo } from './packages.mjs'

for (const pkg of await getPackageInfo()) {
  cd(pkg.path)
  await $`pnpx conventional-changelog -p angular -i CHANGELOG.md -s --commit-path . --lerna-package ${pkg.name}`
}

await $`pnpm publish -r --access public --no-git-checks`
