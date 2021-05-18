//import modules
import { Component } from "react";
import { connect } from "react-redux";
//import style
import "./Movies.scss";
//import components
import Movie from "../Movie/Movie";
//import ActionCreators
import * as actionCreators from "../../store/ActionCreators";

class Movies extends Component {
  componentDidMount() {
    const { watched, onLoad } = this.props;
    watched && onLoad();
  }

  render() {
    const { movies, watched } = this.props;

    return (
      <div className="cards">
        <h2>{watched ? "Watched movies" : "Movies to watch"}</h2>
        {movies.map(element => (
          <Movie
            watched={watched}
            key={element.id}
            uniqueId={element.id}
            title={element.Title}
            rating={element.imdbRating}
            genre={element.Genre}
            element={element}
            imdbID={element.imdbID}
            order={element.order}
            image={element.Poster}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    onLoad: () => dispatch(actionCreators.onWatchedLoad()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
