import React from "react";
import TextField from "@mui/material/TextField";
import S from "./Filter.module.css";

interface PropsType {
  filterValue: string;
  onChangeFilter: any;
}

const Filter: React.FC<PropsType> = ({ filterValue, onChangeFilter }) => {
  
  return (
    <div>
      <TextField
        label="Find contacts by name"
        variant="standard"
        id="component-simple"
        type="text"
        name="filter"
        className={S.input}
        value={filterValue}
        onChange={onChangeFilter}
      />
    </div>
  );
};

export default Filter;
