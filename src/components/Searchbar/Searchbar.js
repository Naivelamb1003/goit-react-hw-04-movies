import React, { Component } from 'react';
import { BsSearch } from 'react-icons/bs';
import { toast } from 'react-toastify';
import style from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    search: '',
  };

  handleChangeSearch = e => {
    this.setState({
      search: e.currentTarget.value.toLowerCase(),
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.search.trim() === '') {
      toast.error('Enter the title of the movie.');
      return;
    }

    this.props.onSubmit(this.state.search);

    this.setState({ search: '' });
  };

  render() {
    return (
      <form className={style.SearchForm} onSubmit={this.handleSubmit}>
        <input
          className={style.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={this.handleChangeSearch}
        />
        <button type="submit" className={style.SearchFormButton}>
          <BsSearch style={{ color: 'white' }} />
        </button>
      </form>
    );
  }
}

export default Searchbar;