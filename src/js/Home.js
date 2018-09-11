import React from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react-dom';
import '../css/style.scss';
import Bootstrap from 'bootstrap';
import SearchForm from './components/SearchForm';

class Home extends React.Component {
  render() {
    return(
      <div className="row">
        <div className="mx-auto">
          <div className="title-panel">
            <h2 className="title">TB Journey</h2>
          </div>
          <div className="searchForm-panel">
            <h4 className="title-s">検索フォーム</h4>
            <SearchForm />
          </div>
        </div>
      </div>

    )

  }
}

export default Home;
