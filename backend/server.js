import express from "express"
import { engine } from "express-handlebars"
import cors from "cors"
import router from "./lib/route-handlers.js"
import fetchExercises from "./lib/utils/fetch-exercises.js"

const app = express()
const port = 3000

app.use(
  cors({
    origin: ["https://js-exercises.up.railway.app", "http://localhost:5173"],
    methods: ["GET", "POST"],
  })
)

app.use(express.json())

// Set up Handlebars
app.engine(
  "hbs",
  engine({
    extname: "hbs",
    defaultLayout: "main",
    layoutsDir: new URL("./views/layouts", import.meta.url).pathname,
  })
)
app.set("view engine", "hbs")
app.set("views", new URL("./views", import.meta.url).pathname)

// Use the router
app.use(router)

// Start the server
app.listen(port, async () => {
  console.log(`BACKEND server is running on http://localhost:${port}`)
  try {
    const result = await fetchExercises()
    if (!result.success) {
      throw new Error(result.msg)
    }
    console.log(result.msg)
  } catch (error) {
    console.error(error)
  }
})
