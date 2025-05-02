import Navbar from "./NavBar"
import { Outlet } from "react-router-dom"

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  )
}
