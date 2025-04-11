import { Movie } from "../types/movie";

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps): JSX.Element {
  return (
    <div className="relative group rounded-xl overflow-hidden shadow-md bg-white">
      {/* 포스터 이미지 */}
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-[300px] object-cover transition duration-300 ease-in-out group-hover:blur-sm"
      />

      {/* hover 시 나타날 텍스트 오버레이 */}
      <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out bg-black bg-opacity-50 text-white p-4 text-center">
        <h3 className="text-lg font-bold mb-2">{movie.title}</h3>
        <p className="text-sm line-clamp-3">{movie.overview || "No overview available."}</p>
      </div>
    </div>
  );
}
