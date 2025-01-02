import { Outlet } from "react-router-dom"

const App = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-blue-800 mb-8">
        Welcome to My App
      </h1>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default App
