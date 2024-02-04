import Link from 'next/link'
import '../../css/movie.css'

export default function page(props) {
  const BASE_URL = 'https://image.tmdb.org/t/p/w500'
  const movie = props.searchParams

  return (
    <div className="movie">
      <div className="movie-poster">
        <img src={BASE_URL+movie.poster_path} alt="" />
      </div>
      <div className="movie-details">
        <h2>{movie.title}</h2>
        <p className='overview'>{movie.overview}</p>
        <p>개봉일 : {movie.release_date}</p>
        <p>평점 : {movie.vote_average} </p>
        <Link href='/movie'><button>뒤로</button></Link>
      </div>
    </div>
  )
}
