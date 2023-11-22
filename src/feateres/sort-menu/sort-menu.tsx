import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useAppDispatch, useAppSelector } from "../../hook";
import { setActiveSortOption } from "./sort-menu.slice";
import { getArticles } from "../articles-list/articles-list.slice";
import { getNews } from "../news-list/news-list.slice";

export type SortOptionId = "TITLE" | "PUBLISHED_AT";

export interface SortOption {
  id: SortOptionId;
  label: string;
}

export default function TitleSelect() {
  const dispatch = useAppDispatch();
  const activeId = useAppSelector((state) => state.sortMenu.activeSortOption);
  const period = useAppSelector(
    (state) => state.filterButton.activFilterButton
  );

  const handleChange = (event: SelectChangeEvent) => {
    const eventTartgetValue = event.target.value as SortOptionId;
    dispatch(setActiveSortOption(eventTartgetValue));
    dispatch(getArticles({ period: period, sortBy: eventTartgetValue }));
    dispatch(getNews({ period: period, sortBy: eventTartgetValue }));
  };

  return (
    <Box
      sx={{
        minWidth: 120,
        backgroundColor: "var(--input-clor)",
        borderRadius: "10px",
        border: "none",
        color: "var(--text-primary-color)",
      }}
    >
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Sort:</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={activeId}
          label="Sort:"
          onChange={handleChange}
        >
          <MenuItem value={"TITLE"}>Title </MenuItem>
          <MenuItem value={"PUBLISHED_AT"}>Published At</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
