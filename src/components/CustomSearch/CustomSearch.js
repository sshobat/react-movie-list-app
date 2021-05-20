//import modules
import { Component } from "react";
import { connect } from "react-redux";
import uuid from "react-uuid";
//import style
import "./CustomSearch.scss";
//import ActionCreators
import * as actionCreators from "../../store/ActionCreators";



  shouldComponentUpdate(nextProps, nextState) {
    const { filteredData, toWatchMovies } = this.props;
    const { searchValue, dropList } = this.state;
    if (
      nextState.searchValue !== searchValue ||
      nextProps.filteredData.length !== filteredData.length ||
      nextProps.toWatchMovies.length !== toWatchMovies.length ||
      nextState.dropList !== dropList
    ) {
      return true;
    }
    return false;
  }

  componentDidUpdate() {
    const { searchValue } = this.state;
    this.props.onFilteredDataUpdate(searchValue);
  }

  addValue(event) {
    this.setState({
      searchValue: event.target.value,
    });
  }

  render() {
    const { searchValue, dropList } = this.state;
    const { filteredData, addToWatch } = this.props;

    return (
      <section className="search">
        <input
          type="text"
          autoComplete="off"
          value={searchValue}
          placeholder="I'm looking for..."
          name="Search"
          onChange={e => this.addValue(e)}
          onFocus={() => this.setState({ dropList: true })}
          onBlur={() => setTimeout(() => this.setState({ dropList: false }), 500)}
        />
        {filteredData.length !== 0 && dropList && (
          <div className="dropdown">
            {filteredData.map(element => (
              <div key={uuid()}>
                <p>
                  {element.Title.length > 40
                    ? element.Title.substring(0, 35) + "..."
                    : element.Title}
                </p>
                <span
                  onClick={() => {
                    addToWatch(element.imdbID);
                  }}
                >
                  +
                </span>
              </div>
            ))}
          </div>
        )}
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    filteredData: state.filteredData,
    toWatchMovies: state.toWatchMovies,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFilteredDataUpdate: filteredData =>
      dispatch(actionCreators.getFilteredData(filteredData)),
    addToWatch: imdbID => dispatch(actionCreators.addToWatch(imdbID)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomSearch);
