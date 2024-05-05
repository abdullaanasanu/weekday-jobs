// Imports
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// UI imports
import Grid from "@mui/material/Grid";
import Item from "./item";
import { fetchJobList } from "@/store/job";

// Component
export default function Jobs() {
  // dispatch
  const dispatch: any = useDispatch();

  // state
  const jobs = useSelector((state: any) => state.job);

  useEffect(() => {
    refresh();
  }, []);

  const refresh = async () => {
    // fetchJobList
    dispatch(fetchJobList());
  };

  console.log(jobs);

  return (
    <Grid container spacing={6}>
      {jobs.list.map((job: any) => (
        <Grid item xs={4}>
          <Item job={job} />
        </Grid>
      ))}
    </Grid>
  );
}
