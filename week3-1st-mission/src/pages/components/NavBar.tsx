import { NavLink } from "react-router-dom"

export default function Navbar() {
  const baseClass = "px-4 py-2 font-semibold"
  const activeClass = "text-yellow-300"
  return (
    <nav className="bg-gray-800 p-4 flex gap-4">
      <NavLink to="/" className={({ isActive }) => baseClass + (isActive ? ` ${activeClass}` : " text-white")}>홈</NavLink>
      <NavLink to="/movies/popular" className={({ isActive }) => baseClass + (isActive ? ` ${activeClass}` : " text-white")}>인기 영화</NavLink>
      <NavLink to="/movies/upcoming" className={({ isActive }) => baseClass + (isActive ? ` ${activeClass}` : " text-white")}>개봉 예정</NavLink>
      <NavLink to="/movies/top-rated" className={({ isActive }) => baseClass + (isActive ? ` ${activeClass}` : " text-white")}>평점 높은</NavLink>
      <NavLink to="/movies/now_playing" className={({ isActive }) => baseClass + (isActive ? ` ${activeClass}` : " text-white")}>상영 중</NavLink>
    </nav>
  )
}
