import classes from './SearchBar.module.css';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { Component, FormEvent } from 'react';

interface ISearchBarProps {
  onSearch: (searchData: ISearchBarState) => void;
  placeholder?: string;
  filters?: boolean;
}

export interface ISearchBarState {
  name: string;
  type: string;
  status: string;
  gender: string;
  page: string;
}

const getItemFromLocalStorage = (itemName: string) => localStorage.getItem(itemName) || '';

class SearchBar extends Component<ISearchBarProps, ISearchBarState> {
  constructor(props: ISearchBarProps) {
    super(props);
    this.state = {
      name: getItemFromLocalStorage('name'),
      type: '',
      status: '',
      gender: '',
      page: '1',
    };
  }

  componentDidUpdate(
    prevProps: Readonly<ISearchBarProps>,
    prevState: Readonly<ISearchBarState>
  ): void {
    const { name, type, status, gender, page } = this.state;
    console.log('componentDidUpdate', this.state);
    if (
      prevState.name !== name ||
      prevState.gender !== gender ||
      prevState.status !== status ||
      prevState.type !== type ||
      prevState.page !== page
    ) {
      console.log(prevState, this.state);
      this.props.onSearch(this.state);
    }
  }

  handleSearchInput = (e: FormEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value);
    localStorage.setItem('name', e.currentTarget.value);
    this.setState({ name: e.currentTarget.value });
  };

  handleTypeInput = (e: FormEvent<HTMLSelectElement>) => {
    localStorage.setItem('type', e.currentTarget.value);
    this.setState({ type: e.currentTarget.value });
    console.log('handleTypeInput', this.state);
  };

  handleStatusInput = (e: FormEvent<HTMLSelectElement>) => {
    localStorage.setItem('status', e.currentTarget.value);
    this.setState({ status: e.currentTarget.value });
  };

  handleGenderInput = (e: FormEvent<HTMLSelectElement>) => {
    localStorage.setItem('gender', e.currentTarget.value);
    this.setState({ gender: e.currentTarget.value });
  };

  handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const searchData = this.state;
    console.log(searchData);
    this.props.onSearch(searchData);
  };

  render() {
    return (
      <div className={classes.search}>
        <form className={classes.search__form} onSubmit={this.handleSubmit}>
          <div className={classes.search__input_wrapper}>
            <MagnifyingGlassIcon className={classes.search__icon} />
            <input
              className={classes.search__input}
              value={this.state.name}
              type="search"
              name="searchQuery"
              onChange={this.handleSearchInput}
              placeholder={this.props.placeholder}
            />
          </div>

          {this.props.filters && (
            <div className={classes.filters}>
              <label htmlFor="type">
                <select
                  className={classes.type}
                  id="type"
                  name="type"
                  onInput={this.handleTypeInput}
                >
                  <option value="human">Human</option>
                  <option value="animal">Animal</option>
                  <option value="alien">Alien</option>
                  <option value="">--</option>
                </select>
              </label>

              <label htmlFor="status">
                <select
                  className={classes.status}
                  id="status"
                  name="status"
                  onInput={this.handleStatusInput}
                >
                  <option value="alive">Alive</option>
                  <option value="dead">Dead</option>
                  <option value="unknown">Unknown</option>
                  <option value="">--</option>
                </select>
              </label>

              <label htmlFor="gender">
                <select
                  className={classes.gender}
                  id="gender"
                  name="gender"
                  onInput={this.handleGenderInput}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="genderless">Genderless</option>
                  <option value="unknown">Unknown</option>
                  <option value="">--</option>
                </select>
              </label>
            </div>
          )}
          <button className={classes.search__btn} type="submit">
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
