import { LinearProgress, Typography } from "@mui/material";

function Progress({ rooms }) {
  const packed = rooms.filter(room => room.packed).length;
  const percent = (packed / rooms.length) * 100;

  return (
    <>
      <Typography sx={{ mb: 1 }}>
        Pakket {packed} av {rooms.length} rom
      </Typography>
      <LinearProgress
        variant="determinate"
        value={percent}
        sx={{ mb: 3 }}
      />
    </>
  );
}

export default Progress;
