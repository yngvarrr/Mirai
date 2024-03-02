import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import sonic from "../assets/sonic.png"
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import { FaXbox } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import { FaPlaystation } from "react-icons/fa";
import "./components.css"


export const FeedCard = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={sonic}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Game
        </Typography>
        <FaXbox className="platformIcon" />
        <FaComputer className="platformIcon" />
        <FaPlaystation className="platformIcon" />
        <Typography className="card" variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions className="card">
        <Button variant="outlined" size="small" startIcon={<OndemandVideoIcon />}>Trailer</Button>
        <Button variant="contained" size="small">Ações</Button>
      </CardActions>
    </Card>
  );
};
