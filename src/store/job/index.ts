// imports
import { createSlice } from "@reduxjs/toolkit";

// App imports
import { URL_API } from "@/common/env";

// interface
interface JobState {
  list: any[];
  filteredList: any[];
  page: number;
  total: number;
}

// initial state
export const jobSlice = createSlice({
  name: "job",
  initialState: {
    list: [],
    filteredList: [],
    page: 1,
    total: 0,
  },
  reducers: {
    listSet: (state: JobState, action) => {
      state.list = [...state.list, ...action.payload];
    },
    filteredListSet: (state: JobState, action) => {
      state.filteredList = action.payload;
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
  async (dispatch: any) => {
    try {
      const limit = 12;
      const offset = (page - 1) * limit;

      // fetch data
      const response = await fetch(`${URL_API}adhoc/getSampleJdJSON`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          limit,
          offset,
        }),
      });
      const data = await response.json();
      dispatch(listSet(data.jdList));
      dispatch(pageSet(page + 1));
      dispatch(totalSet(data.totalCount));
    } catch (error) {
      console.error(error);
    }
  };

// filter job list from list in store
export const filterJobList =
  ({ filters, list }: any) =>
  async (dispatch: any) => {
    const jobs = list;

    const filteredList = jobs.filter((job: any) => {
      const role = filters.role.length
        ? filters.role.find((r: any) => r.value === job.jobRole)
        : true;
      const location = filters.location.length
        ? filters.location.find((l: any) => l.value === job.location)
        : true;
      const minExp = job.minExp >= filters.minExp?.value || !filters.minExp;
      const mode = filters.mode?.value
        ? filters.mode.value === "remote"
          ? job.location === "remote"
          : job.location !== "remote"
        : true;
      const company = filters.company
        ? filters.company.value === job.companyName
        : true;
      const minSalary =
        job.minJdSalary >= filters.minSalary || !filters.minSalary;
      return role && location && minExp && mode && company && minSalary;
    });
    dispatch(filteredListSet(filteredList));
  };

export const { listSet, pageSet, filteredListSet, totalSet } = jobSlice.actions;

export default jobSlice.reducer;
