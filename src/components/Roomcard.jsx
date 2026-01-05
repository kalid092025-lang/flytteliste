import { Card, CardContent, Typography, Checkbox, Stack, Tooltip } from "@mui/material";
import BedIcon from "@mui/icons-material/Bed";
import ChairIcon from "@mui/icons-material/Chair";
import FridgeIcon from "@mui/icons-material/AcUnit"
import WeekendIcon from "@mui/icons-material/Weekend"; 
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects"; 
import TableRestaurantIcon from "@mui/icons-material/TableRestaurant"; 
import CoffeeIcon from "@mui/icons-material/Coffee"; 
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function RoomCard({ room, togglePacked }) {
  return (
    <Card
      sx={{
        p: 2,
        border: room.packed ? "2px solid green" : "2px solid gray",
        boxShadow: room.packed ? 6 : 1,
        "&:hover": { transform: "scale(1.03)", transition: "0.2s" },
      }}
    >
      <CardContent>
        <Tooltip title={`${room.windows} vinduer`}>
          <Typography variant="h6">
            {room.room} {room.packed && <CheckCircleIcon color="success" />}
          </Typography>
        </Tooltip>

        <Typography sx={{ mt: 1 }}>Etasje: {room.upstairs ? "Oppe" : "Nede"}</Typography>

        <Stack spacing={1} mt={1}>
          {room.furniture.map((item, index) => (
            <Stack direction="row" spacing={1} key={index} alignItems="center">
              {item.toLowerCase().includes("bed") && <BedIcon fontSize="small" />}
              {item.toLowerCase().includes("chair") && <ChairIcon fontSize="small" />}
             {item.toLowerCase().includes("fridge") && <FridgeIcon fontSize="small" />}
         {item.toLowerCase().includes("dresser") && <WeekendIcon fontSize="small" />}
              {item.toLowerCase().includes("wardrobe") && <WeekendIcon fontSize="small" />}
              {item.toLowerCase().includes("nightstand") && <WeekendIcon fontSize="small" />}
              {item.toLowerCase().includes("pillow") && <EmojiObjectsIcon fontSize="small" />}
              {item.toLowerCase().includes("clothes") && <EmojiObjectsIcon fontSize="small" />}
              {item.toLowerCase().includes("table") && <TableRestaurantIcon fontSize="small" />}
              {item.toLowerCase().includes("coffee") && <CoffeeIcon fontSize="small" />}
              <Typography variant="body2">{item}</Typography>
            </Stack>
          ))}
        </Stack>

        <Stack direction="row" alignItems="center" mt={2} spacing={1}>
          <Checkbox
            checked={room.packed}
            onChange={() => togglePacked(room.id)}
          />
          <Typography variant="body2">Ferdig pakket</Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default RoomCard;
