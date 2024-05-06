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
            minWidth: "10rem",
          }),
          ...styles,
        } as any
      }
      theme={(theme) => ({
        ...theme,
        borderRadius: 0,
        colors: {
          ...theme.colors,
          primary: "#3f51b5",
        },
      })}
      {...props}
    />
  );
};
