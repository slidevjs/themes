import { execSync } from 'node:child_process'
import { promptForPackage } from './packages.mjs'

const pkg = await promptForPackage()
execSync('npx slidev example.md --open', { cwd: pkg.path, stdio: 'inherit' })
