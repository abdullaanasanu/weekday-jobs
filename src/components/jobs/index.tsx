"use client";

// Imports
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";

// UI imports
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";

// App imports
import { fetchJobList } from "@/store/job";
import Item from "./item";

// Component
export default function Jobs() {
  // dispatch
  const dispatch: any = useDispatch();

  // state
  const jobs = useSelector((state: any) => state.job);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await dispatch(
      fetchJobList({
        page: jobs.page,
      })
    );
  };

  return (
    <InfiniteScroll
      dataLength={jobs.filteredList.length}
      next={fetchData}
      hasMore={jobs.list.length < jobs.total}
      loader={
        <Grid container spacing={6}>
          {Array(3).map((_, index) => (
            <Grid item xs={4} key={index}>
              <Skeleton
                variant="rectangular"
                width="100%"
                height={118}
                sx={{ borderRadius: 2 }}
              />
            </Grid>
          ))}
        </Grid>
      }
      endMessage={jobs.list.length && <p>No more data to load.</p>}
    >
      <Grid
        container
        spacing={6}
        sx={{
          pb: 4,
        }}
      >
        {jobs.filteredList.map((job: any) => (
          <Grid item xs={12} md={6} lg={4} key={job.jdUid}>
            <Item job={job} />
          </Grid>
        ))}
      </Grid>
    </InfiniteScroll>
  );
}
