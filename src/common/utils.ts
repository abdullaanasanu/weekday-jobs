// capitalize
export const capitalize = (str: string) => {
  return str?.charAt(0).toUpperCase() + str?.slice(1);
};

// react select option formatter (strings)
export const formatSelectOptions = (jobs: string[], key: string) => {
  return jobs
    .map((job: any) => ({
      value: job[key],
      label: capitalize(job[key]),
    }))
    .filter(
      (role: any, index: number, self: any) =>
        index === self.findIndex((t: any) => t.value === role.value)
    );
};

// react select option formatter (numbers)
export const formatSelectOptionsNumber = (jobs: string[], key: string) => {
  return jobs
    .map((job: any) => ({
      value: job[key],
      label: job[key],
    }))
    .filter(
      (role: any, index: number, self: any) =>
        role.value &&
        index === self.findIndex((t: any) => t.value === role.value)
    )
    .sort((a, b) => a.value - b.value);
};
