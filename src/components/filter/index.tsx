// Imports
import { useSelector } from "react-redux";

// UI imports
import { Select } from "./select";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import NumberInput from "@mui/material/TextField";

// App imports
import { formatSelectOptions, formatSelectOptionsNumber } from "@/common/utils";

const mode: any = [
  { value: "remote", label: "Remote" },
  { value: "onsite", label: "Onsite" },
];

// Component
export default function Filter() {
  // state
  const jobs = useSelector((state: any) => state.job);

  console.log(jobs);

  const roles: any = formatSelectOptions(jobs.list, "jobRole");
  const locations: any = formatSelectOptions(jobs.list, "location");
  const minExp: any = formatSelectOptionsNumber(jobs.list, "minExp");
  const company: any = formatSelectOptions(jobs.list, "companyName");

  return (
    <Box component="section" sx={{ display: "flex", gap: "0.5rem" }}>
      <Select options={roles} placeholder="Roles" />
      <Select options={locations} placeholder="Location" />
      <Select options={minExp} placeholder="Experience" />
      <Select options={mode} placeholder="Remote" />
      <Select options={company} placeholder="Company" />
      <OutlinedInput placeholder="Min Salary" type="number" />
    </Box>
  );
}
