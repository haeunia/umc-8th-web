import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Popular from "./pages/Popular"
import Upcoming from "./pages/Upcoming"
import TopRated from "./pages/TopRated"
import NowPlaying from "./pages/NowPlaying"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/movies/popular" element={<Popular />} />
        <Route path="/movies/upcoming" element={<Upcoming />} />
        <Route path="/movies/top-rated" element={<TopRated />} />
        <Route path="/movies/now_playing" element={<NowPlaying />} />
      </Route>
    </Routes>
  )
}

export default App
