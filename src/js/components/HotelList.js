import React from 'react';

const HotelList = (props) => {

  return (
    <ul className="col-md-4 list-group">
      {props.hotels.length}
    </ul>
  );
};

export default HotelList;
