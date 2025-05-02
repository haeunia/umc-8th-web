import { Routes, Route } from "react-router-dom"
import Layout from "./pages/components/Layout"
import Home from "./pages/Home"
import Popular from "./pages/Popular"
import Upcoming from "./pages/Upcoming"
import TopRated from "./pages/TopRated"
import NowPlaying from "./pages/NowPlaying"

export default function App() {
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
