import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Description } from "./components/Description"
import { StickyNavbar } from "./components/StickyNavbar"
import { Evaluation } from "./components/Evaluation"
import { Results } from "./components/Results"

function App() {

  return (
    <>
      <BrowserRouter>
        <StickyNavbar />
        <Routes>
          <Route path="/" element={<Description />}></Route>
          <Route path="/evaluation" element={<Evaluation />}></Route>
          <Route path="/results" element={<Results />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
