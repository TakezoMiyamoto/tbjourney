import React, { Component } from 'react';


const List = (props) => {
  const records = props.data.map((value, index) => {
    return(
      <li key={index}>
        {value}
      </li>

    );
  });

  return(
    <ul>{records}</ul>
  );
}

class HotelList extends Component {

  render() {
    const ingredients = ['じゃがいも', 'にんじん', 'たまねぎ', '牛肉', 'カレールー'];
    return (
      <div>
        <h2>リスト</h2>
      <List data={ingredients} />
      </div>
    );
  }
}

export default HotelList;
