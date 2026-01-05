import { useState } from "react";
import { Container, Grid } from "@mui/material";
import { rooms as roomData } from "./data/rooms";
import Header from "./components/Header";
import Filter from "./components/Filter";
import RoomCard from "./components/Roomcard";
import Progress from "./components/Progress";

function App() {
  const [rooms, setRooms] = useState(
    roomData.map(room => ({ ...room, packed: false }))
  );
  const [filter, setFilter] = useState("all");

  const togglePacked = (id) => {
    setRooms(prev =>
      prev.map(room =>
        room.id === id ? { ...room, packed: !room.packed } : room
      )
    );
  };

  const filteredRooms = rooms.filter(room => {
    if (filter === "all") return true;
    if (filter === "upstairs") return room.upstairs;
    if (filter === "downstairs") return !room.upstairs;
  });

  return (
    <Container sx={{ mt: 4 }}>
      <Header />
      <Progress rooms={rooms} />
      <Filter setFilter={setFilter} />

      <Grid container spacing={1}>
        {filteredRooms.map(room => (
          <Grid item xs={12} sm={6} md={4} key={room.id}>
            <RoomCard room={room} togglePacked={togglePacked} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default App;
