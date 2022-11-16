import classes from './APIPage.module.css';
import RickAndMortyImage from '../../images/rickAndMorty.png';
import { useEffect, useReducer, useState } from 'react';
import ListRickAndMorty from 'components/ListRickAndMorty/ListRickAndMorty';
import ErrorComponent from 'components/ErrorComponent/ErrorComponent';

import SearchBar from 'components/SearchBar/SearchBar';
import type { RickAndMortyCharacter } from '../../model/types';
import type { ISearchBarState } from '../../components/SearchBar/SearchBar';
import Pagination from 'components/Pagination/Pagination';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../store-redux/hooks';
import { thunkFetchCharacters } from '../../store-redux/charactersSlice';

type PageState = {
  searchQuery: ISearchBarState;
  isLoadingError: boolean;
  isLoading: boolean;
  currentCharacterDetails: RickAndMortyCharacter | Record<string, never>;
};

enum ActionType {
  UPDATE_SEARCH_QUERY = 'UPDATE_SEARCH_QUERY',
  SET_CURRENT_CHARACTER_DETAILS = 'SET_CURRENT_CHARACTER_DETAILS',
}

interface ApiAction {
  type: ActionType;
  payload: PageState;
}

function reducerRickAndMorty(state: PageState, action: ApiAction): PageState {
  switch (action.type) {
    case ActionType.UPDATE_SEARCH_QUERY: {
      return { ...state, searchQuery: action.payload.searchQuery };
    }
    case ActionType.SET_CURRENT_CHARACTER_DETAILS: {
      return { ...state, currentCharacterDetails: action.payload.currentCharacterDetails };
    }
  }
  throw Error(`Unknown action type: ${action.type}`);
}

const initialState: PageState = {
  searchQuery: { name: '', type: '', status: '', gender: '', page: '1' },
  isLoadingError: false,
  isLoading: false,
  currentCharacterDetails: {},
};

function APIPage() {
  const [pageState, dispatch] = useReducer(reducerRickAndMorty, initialState);
  const [currentPage, setCurrentPage] = useState(1);
  const appState = useAppSelector((state) => state.characters);

  const totalCharactersFound = Number(appState.characters.info?.count) || 0;
  const ITEMS_PER_PAGE = 20;

  const dispatchStoreActions = useAppDispatch();

  const params = useParams();
  const navigate = useNavigate();

  const handleSearch = (searchData: ISearchBarState) => {
    dispatch({
      type: ActionType.UPDATE_SEARCH_QUERY,
      payload: { ...pageState, searchQuery: { ...searchData, page: '1' } },
    });
    navigate('/rick-and-morty/1');
  };

  useEffect(() => {
    const getData = async () => {
      if (params.page) {
        setCurrentPage(Number(params.page));
        dispatchStoreActions(
          thunkFetchCharacters({
            ...pageState.searchQuery,
            page: params.page,
          })
        );
      } else {
        dispatchStoreActions(thunkFetchCharacters(pageState.searchQuery));
      }

      if (appState.isError) {
        throw new Error('Fetching Error');
      } else {
      }
    };

    getData().catch((err) => {
      console.log('useEffect->catch: ', err);
    });
  }, [pageState.searchQuery, currentPage, params]);

  return (
    <div className={classes['api-page']}>
      <div className={classes['api-heading']}>
        <img className={classes['api-image']} src={RickAndMortyImage} alt="Rick And Morty" />
      </div>
      <SearchBar onSearch={handleSearch} placeholder="Character's name" filters={true} />
      {totalCharactersFound > 0 && (
        <p className={classes['found']}>Found: {totalCharactersFound} items</p>
      )}

      {appState.characters.results?.length > 0 && !pageState.isLoadingError && (
        <ListRickAndMorty cards={appState.characters.results} />
      )}

      {totalCharactersFound > 0 && (
        <Pagination
          totalItems={totalCharactersFound}
          itemsPerPage={ITEMS_PER_PAGE}
          currentPage={currentPage}
        />
      )}
      {appState.characters.error && <ErrorComponent message={'No data on this search ^^'} />}
    </div>
  );
}

export default APIPage;
