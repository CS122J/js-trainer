import express from "express"
const router = express.Router()
import path from "path"
import archiver from "archiver"
import evalInSandbox from "./eval-in-sandbox.js"
import { promises as fs } from "fs"
import { stringifyAnswer, stringifyLog } from "./stringify.js"

// Path to the shared folder - Differs for PROD DEPLOYED VERSION
const sharedFolder = path.resolve("./src")

// Handlebars routes
router.get("/", (_, res) => {
  res.render("home", { title: "Home Page" })
})

router.post("/api/evaluate-script", async (req, res) => {
  const { lessonId, ansFilename } = req.body
  const lessonFolder = `lesson_${lessonId}`
  const filePath = path.join(
    sharedFolder,
    "exercises",
    lessonFolder,
    ansFilename
  )
  try {
    const absolutePath = path.resolve(filePath.toString())
    const fileContent = await fs.readFile(absolutePath, "utf-8")
    const data = await evalInSandbox(fileContent)
    const answer = stringifyAnswer(data.answer)
    // Combine all log messages into a single string
    const log = stringifyLog(
      data.logs.map((logEntry) => logEntry.message).join("\n")
    )

    res.json({ answer, log })
  } catch (error) {
    console.error("Error executing file:", error)
    res.status(204).json({ error: "Error executing file" })
  }
})

// Serve the shared folder
router.get("/fetch-exercises", (_, res) => {
  const zipFileName = "exercises.zip"
  res.setHeader("Content-Disposition", `attachment; filename=${zipFileName}`)
  res.setHeader("Content-Type", "application/zip")

  const archive = archiver("zip", {
    zlib: { level: 9 },
  })

  archive.on("error", (err) => {
    console.error("Error creating archive:", err)
    res.status(500).send("Error creating archive")
  })

  // Pipe archive data to the response
  archive.pipe(res)

  // Append the entire exercises folder and subfolders to the archive
  archive.directory(sharedFolder, false)

  // Finalize the archive
  archive.finalize()
})

export default router
