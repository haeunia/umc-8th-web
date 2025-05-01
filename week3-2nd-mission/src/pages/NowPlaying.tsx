import { useEffect, useState } from "react"
import axios from "axios"

interface Movie {
  id: number
  title: string
  overview: string
  poster_path: string | null
}

export default function NowPlaying() {
  const [movies, setMovies] = useState<Movie[]>([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  const fetchMovies = async () => {
    setLoading(true)
    setError("")
    try {
      const response = await axios.get("https://api.themoviedb.org/3/movie/now_playing", {
        params: { page },
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
          accept: "application/json",
        },
      })
      setMovies(response.data.results)
    } catch (err) {
      setError("영화 정보를 불러오지 못했어요.")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchMovies()
  }, [page])

  return (
    <div className="min-h-screen px-4">
      <h1 className="text-3xl font-bold text-center my-6 text-white">상영 중 영화</h1>

      {/* 페이지네이션 */}
      <div className="flex justify-center items-center gap-4 mb-6">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className={`px-4 py-2 rounded-lg ${
            page === 1
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-purple-300 hover:bg-purple-400"
          }`}
        >
          &lt;
        </button>
        <span className="text-lg font-medium text-white">{page} 페이지</span>
        <button
          onClick={() => setPage((prev) => prev + 1)}
          className="px-4 py-2 rounded-lg bg-purple-300 hover:bg-purple-400"
        >
          &gt;
        </button>
      </div>

      {/* 로딩/에러 */}
      {loading && <p className="text-center text-gray-400">로딩 중...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* 영화 카드 그리드 */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {movies
          .filter((movie) => movie.poster_path) 
          .map((movie) => (
            <div
              key={movie.id}
              className="rounded-xl shadow-md overflow-hidden bg-white hover:scale-105 transition duration-300"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-[270px] object-cover"
              />
            </div>
          ))}
      </div>
    </div>
  )
}
