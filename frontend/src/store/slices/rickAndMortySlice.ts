import { RickAndMortyService } from '@libs/services';
import { convertToCharacters } from '@libs/services/rick-and-morty/rick-and-morty.converter';
import { CharacterModel } from '@models/Characters';
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

export enum ThunkStatus {
  FETCHING,
  FETCH_SUCCESS,
  FETCH_ERROR,
}

interface CharactersState {
  characters: Array<CharacterModel> | [];
  status?: ThunkStatus;
}

interface CharacterState {
  character: CharacterModel;
  status: ThunkStatus;
}

interface RickAndMortyState {
  characters: CharactersState;
  character?: CharacterState;
}

const initialState: RickAndMortyState = {
  characters: {
    characters: [],
    status: undefined,
  },
  character: undefined,
};

export const getCharactersThunk = createAsyncThunk(
  'rickAndMorty/getCharacters',
  async (page: number, { rejectWithValue }) => {
    try {
      const response = await RickAndMortyService.getCharacters(page);
      if (response) return convertToCharacters(response.results);
    } catch (error) {
      return rejectWithValue('Error getting characters');
    }
  }
);

const counterSlice = createSlice({
  name: 'rickAndMorty',
  initialState,
  reducers: {
    resetCharacters: (state) => {
      state.characters.characters = [];
      state.characters.status = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCharactersThunk.pending, (state) => {
        state.characters.status = ThunkStatus.FETCHING;
      })
      .addCase(getCharactersThunk.fulfilled, (state, action: PayloadAction<Array<CharacterModel> | undefined>) => {
        state.characters.status = ThunkStatus.FETCH_SUCCESS;
        if (action.payload) {
          state.characters.characters = action.payload;
        }
      })
      .addCase(getCharactersThunk.rejected, (state) => {
        state.characters.status = ThunkStatus.FETCH_ERROR;
        state.characters.characters = [];
      });
  },
});

export default counterSlice.reducer;