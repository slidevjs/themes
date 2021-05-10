// @ts-nocheck

import { execSync } from 'child_process'
import { promptForPackage } from './packages.mjs'

const pkg = await promptForPackage()

const msg = `chore: release ${pkg.name} v`
const tag = `${pkg.name}@v`
execSync(`pnpx bumpp --push --commit "${msg}" --tag "${tag}"`, { stdio: 'inherit', cwd: pkg.path })
