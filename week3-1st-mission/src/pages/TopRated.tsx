import { useNavigate } from "react-router-dom"
import useFetch from "../hooks/useFetch"

interface Movie {
  id: number
  title: string
  poster_path: string | null
}

export default function TopRated() {
  const navigate = useNavigate()
  const { data, loading, error } = useFetch<{ results: Movie[] }>(
    "https://api.themoviedb.org/3/movie/top_rated"
  )

  return (
    <div className="text-white p-6">
      <h1 className="text-2xl font-bold mb-4">높은 평점 영화</h1>
      {loading && <p>로딩 중...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {data?.results
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <div
              key={movie.id}
              onClick={() => navigate(`/movies/${movie.id}`)}
              className="cursor-pointer bg-white rounded overflow-hidden hover:scale-105 transition"
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
