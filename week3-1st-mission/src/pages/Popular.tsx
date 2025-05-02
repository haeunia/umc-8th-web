import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

interface Movie {
  id: number
  title: string
  poster_path: string | null
}

export default function Popular() {
  const [movies, setMovies] = useState<Movie[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://api.themoviedb.org/3/movie/popular", {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
          },
        })
        setMovies(res.data.results)
      } catch {
        setError("영화 정보를 불러올 수 없습니다.")
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-4">인기 영화</h1>
      {loading ? (
        <p className="text-center text-gray-400">로딩 중...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {movies
  .filter((m) => m.poster_path)
  .map((movie) => {
    return (
      <div
        key={movie.id}
        onClick={() => {
          navigate(`/movies/${movie.id}`)
        }}
        className="cursor-pointer bg-white rounded overflow-hidden"
      >
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-[270px] object-cover"
        />
      </div>
    )
  })}
        </div>
      )}
    </div>
  )
}
