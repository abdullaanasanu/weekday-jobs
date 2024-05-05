import { createSlice } from "@reduxjs/toolkit";

interface JobState {
  list: any[];
  page: number;
  total: number;
}

export const jobSlice = createSlice({
  name: "job",
  initialState: {
    list: [],
    page: 1,
    total: 0,
  },
  reducers: {
    listSet: (state: JobState, action) => {
      state.list = [...state.list, ...action.payload];
    },
    pageSet: (state: JobState, action) => {
      state.page = action.payload;
    },
    totalSet: (state: JobState, action) => {
      state.total = action.payload;
    },
  },
});

// fetch job list from API
export const fetchJobList =
  ({ page = 1 }) =>
  async (dispatch: any, action: any) => {
    try {
      const limit = 12;
      const offset = (page - 1) * limit;
      const response = await fetch(
        "https://api.weekday.technology/adhoc/getSampleJdJSON",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            limit,
            offset,
          }),
        }
      );
      const data = await response.json();
      dispatch(listSet(data.jdList));
      dispatch(pageSet(page + 1));
    } catch (error) {
      console.error(error);
    }
  };

export const { listSet, pageSet } = jobSlice.actions;

export default jobSlice.reducer;
