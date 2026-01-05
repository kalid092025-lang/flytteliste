import { ButtonGroup, Button } from "@mui/material";

function Filter({ setFilter }) {
  return (
    <ButtonGroup sx={{ mb: 3 }}>
      <Button onClick={() => setFilter("all")}>Alle</Button>
      <Button onClick={() => setFilter("upstairs")}>Oppe</Button>
      <Button onClick={() => setFilter("downstairs")}>Nede</Button>
    </ButtonGroup>
  );
}

export default Filter;
