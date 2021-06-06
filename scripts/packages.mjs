import { join, dirname } from 'path'
import { promises as fs } from 'fs'
import fg from 'fast-glob'
import prompts from 'prompts'

export async function getPackagePaths() {
  return (await fg('./packages/*/package.json', { absolute: true })).map(i => dirname(i))
}

export async function getPackageJSON(dir) {
  return JSON.parse(await fs.readFile(join(dir, 'package.json'), 'utf-8'))
}

export async function getPackageInfo() {
  const paths = await getPackagePaths()
  return await Promise.all(
    paths.map(async(path) => {
      const json = await getPackageJSON(path)
      return {
        path,
        name: json.name,
        version: json.version,
        json,
      }
    }),
  )
}

export async function promptForPackage() {
  const packages = await getPackageInfo()

  const { pkg } = await prompts({
    name: 'pkg',
    type: 'select',
    message: 'Choose a package',
    choices: packages.map(p => ({ value: p, title: p.name })),
  })

  if (!pkg)
    process.exit(1)

  return pkg
}
