import { NavLink } from "react-router-dom"

const GettingStarted = () => {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Using JavaScript Trainer</h1>

      <h2 className="text-2xl font-bold my-2">Prerequisites</h2>
      <p>
        Since you're reading this we can assume you've already installed and run
        this NodeJS-Express-React project. Now, just confirm the following:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>
          You are running NodeJS version 20 or higher.{" "}
          <em>You can check from the Terminal by using</em> <code>node -v</code>
          .
        </li>
        <li>
          You have installed the ESLint and PrettierJS extensions for VSCode.
        </li>
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
          the screen. <em>See screenshot below.</em>
        </li>
        <li>
          Navigate to the{" "}
          <NavLink to="/exercises" className="text-blue-500 underline">
            Exercises
          </NavLink>{" "}
          page.
        </li>
        <li>Select a Lesson number from the button menu.</li>
        <li>
          Open the lesson folder that provides the source JS files.{" "}
          <em>These will be within the </em>
          <code>/src/exercises</code>
          <em> folder.</em>
        </li>
        <li>For each exercise:</li>
        <ul className="list-decimal list-inside indent-5">
          <li>Read the prompt carefully.</li>
          <li>Modify the code as directed.</li>
          <li>Save the file.</li>
          <li>
            Return to the browser and click the <strong>Run</strong> button to
            evaluate the output.
          </li>
          <li>Repeat as necessary.</li>
        </ul>
      </ol>
      <h3 className="text-xl font-semibold my-2">Example: Working Layout</h3>
      <p>Your split screen setup should resemble this layout.</p>
      <img src="sample-layout.png" className="w-full mt-2" />
    </div>
  )
}

export default GettingStarted
