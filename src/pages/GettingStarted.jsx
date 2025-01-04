import { NavLink } from "react-router-dom"

const GettingStarted = () => {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">
        Getting Started with JavaScript Trainer
      </h1>

      <h2 className="text-2xl font-bold my-2">Prerequisites</h2>
      <p>
        Since you're reading this we can assume you've already installed and run
        this NodeJS-Express-React project. Now confirm the following:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>You are running NodeJS version 20 or higher.</li>
        <li>You have ESLint and PrettierJS extensions installed.</li>
        <li>
          You are using the Chrome browser for the best debugging experience.
        </li>
        <li>
          You used <code>npm start</code> to launch this app.{" "}
          <em>
            This ensures both the backend server and frontend are running.
          </em>
        </li>
      </ul>
      <h2 className="text-2xl font-bold my-2">Completing Exercises</h2>
      <ol className="list-decimal list-inside mb-4">
        <li>
          Create a split screen, positioning the browser in the right third of
          the screen.
        </li>
        <li>
          Click on the{" "}
          <NavLink to="/exercises" className="text-blue-500 underline">
            Exercises
          </NavLink>{" "}
          menu link.
        </li>
        <li>Select a Lesson number from the button menu.</li>
        <li>
          Follow the instructions to locate the JS files within the{" "}
          <code>/src/exercises</code> folder.
        </li>
        <li>
          Complete the first prompt as directed, saving the <code>.js</code>{" "}
          file and then returning to the browser to click the{" "}
          <strong>Run</strong> button and view your output, including any
          errors.
        </li>
        <li>Proceed to the next exercise, and so on.</li>
      </ol>
    </div>
  )
}

export default GettingStarted
