import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.jsx"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home.jsx"
import GettingStarted from "./pages/GettingStarted.jsx"
import Exercises from "./pages/Exercises.jsx"
import MainMenu from "./components/ui/MainMenu.jsx"
import Lesson from "./pages/Lesson.jsx"

createRoot(document.getElementById("root")).render(
  <Router>
    <MainMenu />
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" index element={<Home />} />
        <Route path="/getting-started" element={<GettingStarted />} />
        <Route path="/exercises" element={<Exercises />}>
          <Route path=":lessonId" element={<Lesson />} />
        </Route>
      </Route>
    </Routes>
  </Router>
)
