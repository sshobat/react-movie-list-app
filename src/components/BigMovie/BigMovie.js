//import modules
import { Component } from "react";
//import style
import "./BigMovie.scss";
import star from "../../images/star.png";

class BigMovie extends Component {
  render() {
    const {
      actors,
      director,
      plot,
      genre,
      poster,
      released,
      runtime,
      title,
      rating,
    } = this.props;

    return (
      <main>
        <div className="movie wrapper">
          <div className="pics">
            <img src={poster} alt="poster" />
          </div>

          <div className="info">
            <h3>{title}</h3>
            <p>
              <strong>Released date:</strong> {released}
            </p>
            <p>
              <strong>Runtime:</strong> {runtime}
            </p>
            <p>
              <strong>Genre:</strong> {genre}
            </p>
            <p>
              <strong>Director:</strong> {director}
            </p>
            <p>
              <strong>Actors:</strong> {actors}
            </p>
            <p>
              <strong>Plot:</strong> {plot}
            </p>

            <p className="rating">
              <img src={star} alt="star-icon" /> {rating}
            </p>
          </div>
        </div>
      </main>
    );
  }
}

export { BigMovie };
