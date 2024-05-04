// UI imports
import * as React from "react";
import RS from "react-select";

// Component
export const Select = ({ options = [], styles = {}, ...props }) => {
  return (
    <RS
      options={options}
      styles={
        {
          container: (provided: any, state: any) => ({
            ...provided,
            minWidth: "15rem",
          }),
          ...styles,
        } as any
      }
      {...props}
    />
  );
};
