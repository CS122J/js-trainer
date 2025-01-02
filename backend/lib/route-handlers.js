import express from "express"
import fetchExercises from "./utils/fetch-exercises.js"
const router = express.Router()

// Define a route
router.get("/", (_, res) => {
  res.render("home", { title: "Home Page" })
})

router.get("/fetch-exercises", async (_, res) => {
  try {
    const result = await fetchExercises()
    if (!result.success) {
      throw new Error(result.msg)
    }
    console.log("Files unpacked and saved successfully")
    res.send(result.msg)
  } catch (error) {
    console.error("Error fetching and unpacking files:", error)
    res.status(500).send("Error fetching and unpacking files")
  }
})

export default router
