import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Search extends Component {
  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
  };

  state = {
    text: '',
  };
  // Notice: regular function will change "this" direction, while arrow function does not
  // onChange(e) {
  //TypeError:cannot read properties of undefined(reading: 'setState')
  //   this.setState({ [e.target.name]: e.target.value });
  // }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.searchUsers(this.state.text);
    this.setState({ text: '' });
  };

  render() {
    return (
      <form
        className='form'
        onSubmit={this.onSubmit}
      >
        <input
          type='text'
          name='text'
          value={this.state.text}
          placeholder='search user...'
          onChange={this.onChange}
        />
        <input
          type='submit'
          value='SEARCH'
          className='btn btn-dark btn-block'
        />
      </form>
    );
  }
}

export default Search;
