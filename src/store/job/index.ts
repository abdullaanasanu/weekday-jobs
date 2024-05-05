import { createSlice } from "@reduxjs/toolkit";

export const jobSlice = createSlice({
  name: "job",
  initialState: {
    list: [],
  },
  reducers: {
    setList: (state, action) => {
      state.list = action.payload;
    },
  },
});

// fetch job list from API
export const fetchJobList = () => async (dispatch: any) => {
  try {
    const response = await fetch(
      "https://api.weekday.technology/adhoc/getSampleJdJSON",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          limit: 10,
          offset: 0,
        }),
      }
    );
    const data = await response.json();
    dispatch(setList(data.jdList));
  } catch (error) {
    console.error(error);
  }
};

export const { setList } = jobSlice.actions;

export default jobSlice.reducer;
