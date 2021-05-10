// @ts-nocheck

import { $, cd } from 'zx'
import { getPackagePaths } from './packages.mjs'

for (const pkg of await getPackagePaths()) {
  cd(pkg)
  await $`pnpx conventional-changelog -p angular -i CHANGELOG.md -s --commit-path .`
}

await $`pnpm publish -r --access public --no-git-checks`
