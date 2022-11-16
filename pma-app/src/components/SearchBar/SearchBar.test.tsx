import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBar from './SearchBar';

const searchHandlerMock = () => {};

const localStorageMock = (function () {
  interface IStore {
    [key: string]: string;
  }

  let store: IStore = {};
  return {
    getItem(key: string) {
      return store[key];
    },

    setItem(key: string, value: string) {
      store[key] = value;
    },

    clear() {
      store = {};
    },

    removeItem(key: string) {
      delete store[key];
    },

    getAll() {
      return store;
    },
  };
})();

Object.defineProperty(window, 'localStorage', { value: localStorageMock });

const setLocalStorage = (id: string, data: string) => {
  window.localStorage.setItem(id, data);
};

describe('SearchBar', () => {
  it('renders search input', () => {
    render(<SearchBar onSearch={searchHandlerMock} />);
    const searchInput = screen.getByRole('searchbox');
    expect(searchInput).toBeInTheDocument();
  });

  it('local storage : SET na GET', () => {
    const testKey = 'testKey';
    const testValue = 'testValue';

    setLocalStorage(testKey, testValue);
    expect(localStorage.getItem(testKey)).toEqual('testValue');
  });

  it('input value', () => {
    render(<SearchBar onSearch={searchHandlerMock} />);
    const testKey = 'testKey';
    const testValue = 'newMySearchQuery';
    const searchInput = screen.getByRole('searchbox');
    userEvent.type(searchInput, testValue);
    setLocalStorage(testKey, testValue);
    expect(localStorage.getItem(testKey)).toEqual(testValue);
  });
});
