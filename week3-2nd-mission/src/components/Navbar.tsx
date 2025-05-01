import { NavLink } from "react-router-dom"

const navItems = [
  { to: "/", label: "홈" },
  { to: "/movies/popular", label: " 인기 영화" },
  { to: "/movies/now_playing", label: " 상영 중" },
  { to: "/movies/top-rated", label: " 평점 높은" },
  { to: "/movies/upcoming", label: " 개봉 예정" },
]

export default function Navbar() {
  return (
    <nav className="flex justify-center gap-6 p-6 text-sm font-medium">
      {navItems.map(({ to, label }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            isActive
              ? "text-green-500 border-b-2 border-green-500 pb-1"
              : "text-gray-400 hover:text-white transition"
          }
        >
          {label}
        </NavLink>
      ))}
    </nav>
  )
}
