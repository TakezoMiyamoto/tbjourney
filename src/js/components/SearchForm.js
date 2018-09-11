import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';


class SearchForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      destination: '',
      checkin: moment(),
      checkout: moment()
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleStartDateChange = this.handleStartDateChange.bind(this);
    this.handleEndDateChange = this.handleEndDateChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState( { [evt.target.name]: evt.target.value});
    console.log( { [evt.target.name]: evt.target.value});
  }

// checkin
  handleStartDateChange(date) {
    this.setState({
      checkin: date,
    });
    console.log(date.date);

  }
//checkout
  handleEndDateChange(date2) {
    this.setState({ checkout: date2});
    console.log(date2.date);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.destination);
    console.log(this.state.checkin);
    console.log(this.state.checkout);
  }

  render() {
    return (
      <div className="search-form">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input type="text"
              className="form-control"
              name="destination"
              onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <DatePicker selected={this.state.checkin}
              className="form-control"
              name="checkin"
              onChange={this.handleStartDateChange} />
          </div>
          <div className="form-group">
            <DatePicker selected={this.state.checkout}
              className="form-control"
              name="checkout"
              onChange={this.handleEndDateChange} />
          </div>
          <div className="btn-wrapper">
            <button type='submit' className="btn btn-default position-center">検索する</button>
          </div>

        </form>
      </div>
    );
  }
}


export default SearchForm;
