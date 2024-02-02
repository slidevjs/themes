import { execSync } from 'node:child_process'
import { promptForPackage } from './packages.mjs'

const pkg = await promptForPackage()
execSync('pnpx slidev build example.md', { cwd: pkg.path, stdio: 'inherit' })
