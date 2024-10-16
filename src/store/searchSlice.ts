import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { fetchRegisters } from '~/api/register';
import { IRegistration } from '~/types';

interface SearchState {
  data: IRegistration[] | null;
  loading: boolean;
  error: string | null;
}

const initialState: SearchState = {
  data: null,
  loading: false,
  error: null,
};

export const fetchByCPF = createAsyncThunk(
  'search/fetchByCPF',
  async (cpf: string | null, { rejectWithValue }) => {
    if (!cpf || !cpf?.length) return null;

    try {
      const data = await fetchRegisters();
      return data?.filter((register) => {
        return register.cpf === cpf.replace(/[.\-]/g, '');
      });
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchByCPF.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchByCPF.fulfilled,
        (state, action: PayloadAction<IRegistration[] | null>) => {
          state.loading = false;
          state.data = action.payload;
        }
      )
      .addCase(fetchByCPF.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default searchSlice.reducer;
