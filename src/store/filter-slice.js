import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: { params: [] },
  reducers: {
    setFilter(state, action) {
      const param = action.payload;
      const existingParams = state.params.find((f) => f === param);

      if (!existingParams) {
        state.params.push(param);
      } else;
    },
    removeFilter(state, action) {
      const param = action.payload;
      const existingParams = state.params.find((f) => f.params === param);

      if (!existingParams) {
        state.params = state.params.filter((p) => p !== param);
      } else;
    },
    removeAllFilter(state) {
        state.params = [];
    }
  },
});

export const filterAction = filterSlice.actions;

export default filterSlice.reducer;
