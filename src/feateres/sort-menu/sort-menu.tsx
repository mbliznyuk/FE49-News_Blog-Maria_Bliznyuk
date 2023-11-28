import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useAppDispatch, useAppSelector } from "../../hook";
import { getArticles } from "../articles-list/articles-list.slice";
import { getNews } from "../news-list/news-list.slice";
import { setActiveSortOption } from "./sort-menu.slice";
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
        borderRadius: "5px",
        color: "var(--text-primary-color)",
      }}
    >
      <FormControl color="secondary" fullWidth>
        <InputLabel
          sx={{
            color: "var(--input-accent-color)",
          }}
          id="demo-simple-select-label"
        >
          Sort:
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={activeId}
          label="Sort:"
          onChange={handleChange}
          sx={{
            color: "var(--text-primary-color)",
            ".MuiOutlinedInput-notchedOutline": {
              borderColor: "transparent",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "var(--input-accent-color)",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "var(--input-accent-color)",
            },
            ".MuiSvgIcon-root ": {
              fill: "var(--input-accent-color)",
            },
          }}
        >
          <MenuItem value={"TITLE"}>Title</MenuItem>
          <MenuItem value={"PUBLISHED_AT"}>Published At</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
