import { Outlet } from "react-router-dom"

function App() {
  return (
    <>
      <div className="max-w-2xl container mx-auto p-4">
        <Outlet />
      </div>
    </>
  )
}

export default App
