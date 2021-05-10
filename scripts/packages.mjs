import { join } from 'path'
import { promises as fs } from 'fs'
import fg from 'fast-glob'

export async function getPackagePaths() {
  return await fg('./packages/*', { onlyDirectories: true, absolute: true })
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
