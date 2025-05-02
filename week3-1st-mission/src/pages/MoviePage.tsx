import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

interface MovieDetail {
  title: string
  overview: string
  poster_path: string
  vote_average: number
  release_date: string
  runtime: number
}

interface Cast {
  id: number
  name: string
  profile_path: string | null
  character: string
}

export default function MoviePage() {
  const { movieId } = useParams()
  const [movie, setMovie] = useState<MovieDetail | null>(null)
  const [credits, setCredits] = useState<Cast[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const [movieRes, creditsRes] = await Promise.all([
          axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
            },
          }),
          axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits`, {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
            },
          }),
        ])

        setMovie(movieRes.data)
        setCredits(creditsRes.data.cast)
      } catch (e) {
        setError("영화 정보를 불러오는 데 실패했습니다.")
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [movieId])

  if (loading) return <p className="text-white text-center">로딩 중...</p>
  if (error || !movie) return <p className="text-red-500 text-center">{error}</p>

  return (
    <div className="text-white px-6 py-10 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row gap-8">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="rounded-lg w-full md:w-1/3"
        />
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-2">{movie.title}</h1>
          <p className="text-gray-300 mb-2">
            ⭐ {movie.vote_average} / {movie.release_date.slice(0, 4)} / {movie.runtime}분
          </p>
          <p className="italic text-yellow-400 mb-4">울여름은 우리가 썸어 먹는다!</p>
          <p className="leading-relaxed text-gray-200">{movie.overview}</p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-12 mb-6">감독/출연</h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6">
        {credits.filter(c => c.profile_path).slice(0, 18).map((cast) => (
          <div key={cast.id} className="text-center">
            <img
              src={`https://image.tmdb.org/t/p/w185${cast.profile_path}`}
              alt={cast.name}
              className="w-24 h-24 object-cover rounded-full mx-auto mb-2"
            />
            <p className="text-sm font-medium">{cast.name}</p>
            <p className="text-xs text-gray-400">{cast.character}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
