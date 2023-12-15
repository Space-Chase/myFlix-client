export const MovieView = ({ movie, onBackClick }) => {
  return (
    <div>
      <div>
        <img src={Movie.image} />
      </div>
      <div>
        <span>Title: </span>
        <span>{Movie.title}</span>
      </div>
      <div>
        <span>Director: </span>
        <span>{movie.director}</span>
      </div>
      <div>
        <span>Genre:</span>
        <span>{movie.genre}</span>
      </div>
      <button onClick={onBackClick}>Back</button>
    </div>
  );
};
