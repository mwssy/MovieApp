import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./page/Home"
import Header from "./components/Header"
import Movie from "./page/Movie"

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />}/>
        <Route path="movie" element={<Movie />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
