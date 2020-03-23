import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import GithubCorner from 'react-github-corner';

import Logo from '../components/Logo';
import SearchBar from '../components/SearchBar';
// import queries ssfrom '../constants/media-queries.json';
import '../css/_Home.css';

const queries = {
  "xxs": 370,
  "xs": 630,
  "s": 768,
  "m": 992,
  "l": 1180
}
class HomePage extends Component {

  render() {
    return (
      <div>
        <Logo big={true} welcome={this.props.query === ''} />

        <MediaQuery minWidth={queries.xs}>
          <GithubCorner
            href="https://github.com/learn-anything/learn-anything"
            bannerColor="#fff"
            octoColor="#222324"
            size={80}
            direction="left"
          />
        </MediaQuery>

        <h1 className="title">I want to learn</h1>
        <SearchBar history={this.props.history} />

        <div className="help-text">
          <p>
          Start your search by typing a topic in the bar above.
          <br/>
          </p>
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    title: state.map.title,
    query: state.search.query
  }
}


export default connect(mapStateToProps)(HomePage);

