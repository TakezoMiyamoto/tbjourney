import React from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react-dom';
import '../css/style.scss';
import Bootstrap from 'bootstrap';
import SearchForm from './components/SearchForm';
import HotelList from './components/HotelList';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hotels: [1,2,3]
    };

  }
  
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
          <div>
            <HotelList hotels={this.state.hotels} />
          </div>
        </div>
      </div>

    )

  }
}

export default Home;
