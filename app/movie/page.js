import Link from 'next/link';
import '../css/movie.css'

export default async function page() {
  const BASE_URL = 'https://image.tmdb.org/t/p/w500'
  
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYmVjZWQwYmNlYWQ2YTUxZGRjN2FlNDBmZTAwZWI3MyIsInN1YiI6IjYyMGY1Zjc3YTg0ZmY3MDAyMGQwNTRmNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CVtvBsNW9ggrvjhPtS1Y_WBXcQFU48BSAD2HLh3BUK4'
    }
  };
  const url = 'https://api.themoviedb.org/3/movie/now_playing?language=ko&page=1'
  const res = await fetch(url, options)
  const movies = await res.json()

  return (
    <ul className='movie-container'>
      {movies.results.map(movie => 
        <li key={movie.id} className='movie-item'>
          <Link href={{
            pathname:`/movie/${movie.id}`,
            query: movie
          }}>
            <div className="movie-thumbnail">
              <img src={BASE_URL + movie.poster_path} alt="" />
            </div>
            <div className="movie-info">
              <h3>{movie.title}</h3>
              <p>평점 : {movie.vote_average}</p>
            </div>
          </Link>
        </li>
      )}
    </ul>
  )
}
