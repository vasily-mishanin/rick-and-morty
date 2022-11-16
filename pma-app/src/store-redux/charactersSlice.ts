import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import type { RootState } from './store';
import { RickAndMortyCharacters } from 'model/types';
import { dataTasks } from 'model/dataTasksTypeB';
import * as api_RickAndMorty from '../api/api_rickAndMorty';
import { ISearchBarState } from 'components/SearchBar/SearchBar';

export interface IRickAndMortyState {
  isError: boolean;
  isLoading: boolean;
  characters: RickAndMortyCharacters;
}

const initialState: IRickAndMortyState = {
  isError: false,
  isLoading: false,
  characters: {
    results: [],
    info: { count: '', next: '', pages: 0, prev: null },
  },
};

export const thunkFetchCharacters = createAsyncThunk(
  'characters/fetchCharacters',
  async (searchQuery: ISearchBarState) => {
    const data = await api_RickAndMorty.getCharactersByQuery(searchQuery);
    console.log('createAsyncThunk', data);
    return data;
  }
);

export const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setCharacters: (state, action: PayloadAction<IRickAndMortyState>) => ({
      ...state,
      characters: action.payload.characters,
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(thunkFetchCharacters.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(thunkFetchCharacters.fulfilled, (state, action) => {
      state.isLoading = false;
      state.characters = action.payload;
    });
    builder.addCase(thunkFetchCharacters.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export const charactersSliceActions = charactersSlice.actions;

export default charactersSlice.reducer;
