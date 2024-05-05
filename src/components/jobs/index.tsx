"use client";

// Imports
import { use, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";

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
    fetchData();
  }, []);

  const fetchData = async () => {
    // fetchJobList
    await dispatch(
      fetchJobList({
        page: jobs.page,
      })
    );
  };

  console.log(jobs);

  return (
    <InfiniteScroll
      dataLength={jobs.list.length}
      next={fetchData}
      hasMore={true}
      loader={<p>Loading...</p>}
      endMessage={<p>No more data to load.</p>}
    >
      <Grid container spacing={6}>
        {jobs.list.map((job: any) => (
          <Grid item xs={4}>
            <Item job={job} />
          </Grid>
        ))}
      </Grid>
    </InfiniteScroll>
  );
}
