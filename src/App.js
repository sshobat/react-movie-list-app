//import modules
import { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "./store/ActionCreators";
//import style
import "./App.scss";
//import components
import Movies from "./components/Movies/Movies";
import { BigMovie } from "./components/BigMovie/BigMovie";
import { Header } from "./components/Header/Header";
//import images
import resetIcon from "./images/reset.png";
import CustomSearch from "./components/CustomSearch/CustomSearch";
import leftArrow from "./images/up.png";

class App extends Component {
  componentDidMount() {
    this.props.onLoad();
  }

  componentDidUpdate() {
    if (window.location.pathname !== "/") {
      this.props.onMoreUpdate(
        window.location.pathname.substr(
          window.location.pathname.lastIndexOf("/") + 1
        )
      );
    }
  }

  render() {
    const {
      more,
      toWatchMovies,
      watchedMovies,
      genreFilteredMovies,
      genres,
      filterGenre,
      updateGenreFilteredData,
    } = this.props;
    const {
      Actors,
      Director,
      Plot,
      Genre,
      Poster,
      Released,
      Runtime,
      Title,
      imdbRating,
    } = more;

    return (
      <>
        <Switch>
          <Route exact path="/">
            <Header>
              <>
                <a className="logo" href="/">
                  <h1>MovieList</h1>
                </a>
                <CustomSearch />
              </>
            </Header>
            <main className="wrapper">
              {!toWatchMovies.length && (
                <p className="empty"> Search for your favourite movies</p>
              )}

              {toWatchMovies.length && (
                <>
                  <div className="filter-movies">
                    Filter by genre
                    <ul>
                      {genres.map(element => (
                        <li key={element} onClick={() => filterGenre(element)}>
                          {element}
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={() => updateGenreFilteredData(toWatchMovies)}
                      className="reset-filters"
                    >
                      <img src={resetIcon} alt="resetIcon" />
                      Reset Filters
                    </button>
                  </div>
                  <Movies watched={false} movies={genreFilteredMovies} />

                  <Movies watched movies={watchedMovies} />
                </>
              )}
            </main>
          </Route>

          <Route exact path={window.location.pathname}>
            <Header>
              <div>
                <Link to="/">
                  <button>
                    <img src={leftArrow} alt="leftArrow" />
                  </button>
                </Link>
                <p>
                  {window.location.pathname.indexOf("/watched/")
                    ? `To Watch / ${Title}`
                    : `Watched / ${Title}`}
                </p>
              </div>
            </Header>
            {more && (
              <BigMovie
                title={Title}
                released={Released}
                runtime={Runtime}
                genre={Genre}
                director={Director}
                actors={Actors}
                plot={Plot}
                rating={imdbRating}
                poster={Poster}
              />
            )}
          </Route>
        </Switch>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    more: state.more,
    toWatchMovies: state.toWatchMovies,
    watchedMovies: state.watchedMovies,
    genreFilteredMovies: state.genreFilteredMovies,
    genres: state.genres,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFilteredDataUpdate: filteredData =>
      dispatch(actionCreators.updateFilteredData(filteredData)),
    onLoad: () => dispatch(actionCreators.onLoad()),
    onMoreUpdate: uniqueId => dispatch(actionCreators.getMore(uniqueId)),
    filterGenre: myGenre => dispatch(actionCreators.filterGenre(myGenre)),
    updateGenreFilteredData: myData =>
      dispatch(actionCreators.updateGenreFilteredData(myData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
