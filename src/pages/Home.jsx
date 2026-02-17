import { NavLink } from "react-router-dom"
const Home = () => {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">JavaScript Trainer for VSCode</h1>
      <p>
        Welcome to the JavaScript Trainer! This app is designed to provide you
        with beginning to intermediate-level JavaScript challenges for honing
        your coding skills. It is meant to be run on your local machine along
        with VSCode, which allows you to edit the JS starter code files located
        in the <code>/src/exercises</code> folder path. Upon saving code
        changes, you can view the exercise output in the browser.
      </p>
      <p>
        Follow the steps on our{" "}
        <NavLink to="/getting-started" className="text-blue-500 underline">
          Getting Started
        </NavLink>{" "}
        page to make sure you've got the proper setup. Then visit the{" "}
        <NavLink to="/exercises" className="text-blue-500 underline">
          Exercises
        </NavLink>{" "}
        page to start trying your skills!
      </p>
      <p>
        If you have any questions or feedback, just send an email to{" "}
        <a
          href="mailto:mmontoya@masters.edu"
          className="text-blue-500 underline"
        >
          mmontoya@masters.edu
        </a>
        .
      </p>
    </div>
  )
}

export default Home
