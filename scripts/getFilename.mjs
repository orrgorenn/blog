import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

export const getFilename = () => {
  const [, , type = 'posts', fileName = 'filename'] = process.argv

  if (!['posts', 'projects'].includes(type)) {
    throw new Error("Invalid type: should be 'posts' or 'projects'")
  }

  if (!fileName) {
    throw new Error('Invalid filename: please provide a filename.')
  }

  const __dirname = dirname(fileURLToPath(import.meta.url))
  const contentFolder = join(__dirname, '../', 'src', 'pages', type)

  return { fileName, type, contentFolder }
}
