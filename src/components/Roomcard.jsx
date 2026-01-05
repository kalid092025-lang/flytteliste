import {
  Card,
  CardContent,
  Typography,
  Checkbox,
  List,
  ListItem
} from "@mui/material";

function RoomCard({ room, togglePacked }) {
  return (
    <Card
      sx={{
        border: room.packed ? "2px solid green" : "1px solid lightgray",
      }}
    >
      <CardContent>
        <Typography variant="h6">{room.room}</Typography>
        <Typography>Vinduer: {room.windows}</Typography>
        <Typography>
          Etasje: {room.upstairs ? "Oppe" : "Nede"}
        </Typography>

        <List>
          {room.furniture.map((item, index) => (
            <ListItem key={index}>• {item}</ListItem>
          ))}
        </List>

        <Checkbox
          checked={room.packed}
          onChange={() => togglePacked(room.id)}
        />
        Ferdig pakket
      </CardContent>
    </Card>
  );
}

export default RoomCard;
