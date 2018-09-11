import React from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react-dom';
import '../css/style.scss';
import Bootstrap from 'bootstrap';

import SearchForm from './components/SearchForm';
import Home from './Home';


class App extends React.Component {
  render () {
    return (
      <div>
        <Home />
      </div>
    )
  }
}

// render(<App/>, document.getElementById('app'));

//一番上のdiv .containerを取得して表示する。これから作っていく
// componentの親である.containerを指定して取得する。
ReactDOM.render(<App />, document.querySelector('.container'));
