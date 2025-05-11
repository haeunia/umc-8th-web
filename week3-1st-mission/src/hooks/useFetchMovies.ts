import useFetch from "./useFetch"

interface Movie {
  id: number
  title: string
  poster_path: string | null
}

const endpointMap: Record<string, string> = {
  popular: "movie/popular",
  upcoming: "movie/upcoming",
  now_playing: "movie/now_playing",
  top_rated: "movie/top_rated",
}

export default function useFetchMovies(category: string) {
  const endpoint = endpointMap[category]

  const { data, loading, error } = useFetch<{ results: Movie[] }>(
    `https://api.themoviedb.org/3/${endpoint}`
  )

  return {
    movies: data?.results ?? [],
    loading,
    error,
  }
}
