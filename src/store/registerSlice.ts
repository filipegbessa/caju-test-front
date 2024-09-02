import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchRegisters } from '~/api/register';
import { IRegistration } from '~/types';

interface RegisterState {
  data: IRegistration[];
  loading: boolean;
  error: string | null;
}

const initialState: RegisterState = {
  data: [],
  loading: false,
  error: null,
};

export const getRegisters = createAsyncThunk(
  'register/fetchRegisters',
  async () => {
    const data = await fetchRegisters();
    return data;
  }
);

const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRegisters.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getRegisters.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getRegisters.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch registers';
      });
  },
});

export default registerSlice.reducer;
