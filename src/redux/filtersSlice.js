import { createSlice } from '@reduxjs/toolkit';

const initialState = '123';

const filtersSlice = createSlice({
  name: 'gandon',
  initialState: initialState,
  reducers: {
    filterNumbers: (state, action) => {
      return action.payload;
    },
  },
});

export const { filterNumbers } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
