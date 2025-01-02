import fetch from "node-fetch"
import path from "path"
import fs from "fs"
import unzipper from "unzipper"
import { fileURLToPath } from "url"
import { dirname } from "path"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const fetchExercises = async () => {
  try {
    const response = await fetch("http://localhost:3001/fetch-exercises")
    if (!response.ok) {
      throw new Error("Failed to fetch exercises")
    }

    const directory = path.join(__dirname, "./../../../src")
    const extractStream = unzipper.Parse()

    response.body.pipe(extractStream)

    extractStream.on("entry", async (entry) => {
      const filePath = path.join(directory, entry.path)
      const dirPath = path.dirname(filePath)

      // Ensure the directory exists
      fs.mkdirSync(dirPath, { recursive: true })

      if (entry.type === "File") {
        if (!fs.existsSync(filePath)) {
          entry.pipe(fs.createWriteStream(filePath))
        } else {
          entry.autodrain()
        }
      } else {
        entry.autodrain()
      }
    })

    await extractStream.promise()
    return { success: true, msg: "Files unpacked and saved successfully" }
  } catch (error) {
    return {
      success: false,
      msg: `Error fetching and unpacking files: ${error}`,
    }
  }
}

export default fetchExercises
