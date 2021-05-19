//import modules
import { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
//import style
import "./Movie.scss";
//import images
import eye from "../../images/eye.png";
import star from "../../images/star.png";
import trash from "../../images/trash.png";
import up from "../../images/up.png";
import down from "../../images/down.png";
//import ActionCreators
import * as actionCreators from "../../store/ActionCreators";

class Movie extends Component {
  render() {
    const { title, genre, rating, uniqueId, element, order, watched, image } =
      this.props;
    const {
      onBigMovieUpdate,
      filterGenre,
      onDelete,
      deleteMovie,
      moveUp,
      moveDown,
      updateWatchedMovies,
    } = this.props;

    const preview = watched ? `/watched/${uniqueId}` : `/to-watch/${uniqueId}`;
    const genres = genre.split(", ");

    return (
      <div className="card">
        <div className="poster-holder">
          <Link to={preview}>
            <img
              onClick={() => onBigMovieUpdate(uniqueId)}
              src={image}
              alt="img"
              className="poster"
            />
          </Link>
          <div className="controls">
            {!watched && (
              <>
                <button onClick={() => updateWatchedMovies(element)}>
                  <img src={eye} alt="eye" />
                </button>
                <div className="arrows">
                  <button onClick={() => moveUp(order)}>
                    <img src={up} alt="arrowUp" />
                  </button>
                  <button onClick={() => moveDown(order)}>
                    <img src={down} alt="arrowDown" />
                  </button>
                </div>
              </>
            )}
            <button
              onClick={
                watched ? () => onDelete(uniqueId) : () => deleteMovie(uniqueId)
              }
            >
              <img src={trash} alt="trash" />
            </button>
          </div>
          <p className="rating">
            <img src={star} alt="star-icon" /> {rating}
          </p>
        </div>

        <div className="card-info">
          <Link to={preview}>
            <h3 onClick={() => onBigMovieUpdate(uniqueId)}> {title}</h3>
          </Link>

          <div className="genres">
            {genres.map(element => (
              <span
                key={element}
                onClick={!watched ? () => filterGenre(element) : null}
              >
                {element}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    onBigMovieUpdate: uniqueId => dispatch(actionCreators.getBigMovie(uniqueId)),
    deleteMovie: uniqueId => dispatch(actionCreators.deleteMovie(uniqueId)),
    onDelete: databaseID =>
      dispatch(actionCreators.deleteWatchedMovie(databaseID)),
    updateWatchedMovies: element =>
      dispatch(actionCreators.addToWatched(element)),
    filterGenre: genre => dispatch(actionCreators.filterGenre(genre)),
    moveUp: order => dispatch(actionCreators.moveUp(order)),
    moveDown: order => dispatch(actionCreators.moveDown(order)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
