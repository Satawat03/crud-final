import { BrowserRouter, Routes, Route } from "react-router-dom"
import Content from "./Components/Content"
import Add from "./Components/Add"
import Delete from "./Components/Delete"
import Edit from "./Components/Edit"

function App() {

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/add" element={<Add/>} />
            <Route path="/edit" element={<Edit/>} />
            <Route path="/delete" element={<Delete/>} />

            <Route path="/edit/:id" element={<Edit/>} />

          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
