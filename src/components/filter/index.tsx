// Imports
import { useDispatch, useSelector } from "react-redux";

// UI imports
import { Select } from "./select";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";

// App imports
import { formatSelectOptions, formatSelectOptionsNumber } from "@/common/utils";
import { useEffect, useState } from "react";
import { filterJobList } from "@/store/job";

const mode: any = [
  { value: "remote", label: "Remote" },
  { value: "onsite", label: "Onsite" },
];

// Component
export default function Filter() {
  // dispatch
  const dispatch: any = useDispatch();

  // state
  const jobs = useSelector((state: any) => state.job);
  const [filters, setFilters] = useState({
    role: [],
    location: [],
    minExp: null,
    mode: [],
    company: null,
    minSalary: "",
  });

  const roles: any = formatSelectOptions(jobs.list, "jobRole");
  const locations: any = formatSelectOptions(jobs.list, "location");
  const minExp: any = formatSelectOptionsNumber(jobs.list, "minExp");
  const company: any = formatSelectOptions(jobs.list, "companyName");

  useEffect(() => {
    dispatch(
      filterJobList({
        filters,
        list: jobs.list,
      })
    );
  }, [filters, jobs.list]);

  return (
    <Box component="section" sx={{ display: "flex", gap: "0.5rem" }}>
      <Select
        options={roles}
        placeholder="Roles"
        value={filters.role}
        onChange={(val: any) => setFilters({ ...filters, role: val })}
        isMulti
        isClearable
      />
      <Select
        options={locations}
        placeholder="Location"
        value={filters.location}
        onChange={(val: any) => setFilters({ ...filters, location: val })}
        isMulti
        isClearable
      />
      <Select
        options={minExp}
        placeholder="Experience"
        value={filters.minExp}
        onChange={(val: any) => setFilters({ ...filters, minExp: val })}
        isClearable
      />
      <Select
        options={mode}
        placeholder="Remote"
        value={filters.mode}
        onChange={(val: any) => setFilters({ ...filters, mode: val })}
        isClearable
      />
      <Select
        options={company}
        placeholder="Company"
        value={filters.company}
        onChange={(val: any) => setFilters({ ...filters, company: val })}
        isClearable
      />
      <OutlinedInput
        placeholder="Min Salary"
        type="number"
        value={filters.minSalary}
        onChange={(e: any) =>
          setFilters({ ...filters, minSalary: e.target.value })
        }
      />
    </Box>
  );
}
