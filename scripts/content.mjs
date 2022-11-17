import { getFilename } from './getFilename.mjs'
import { getToday } from './getToday.mjs'
import { existsSync, writeFileSync } from 'fs'
import { frontmatter } from './frontmatter.mjs'
import { gitNewBranch } from './gitNewBranch.mjs'
import { openInVSCode } from './openInVSCode.mjs'

const newContent = async () => {
  const { fileName, type, contentFolder } = getFilename()

  console.log(`Trying to create new ${type}, content: ${fileName}.md`)

  const [month, day, year] = getToday()

  const folderAndFilename = `${contentFolder}/${fileName}.md`

  if (existsSync(folderAndFilename)) {
    throw new Error(
      "There's already a file with that name in this month's folder"
    )
  }

  writeFileSync(folderAndFilename, frontmatter[type])

  await gitNewBranch(type, fileName)

  openInVSCode(folderAndFilename)
}

newContent()
