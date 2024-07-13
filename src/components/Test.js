import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import Axios from 'axios';
import axios from "axios";
import { useNavigate } from "react-router-dom";


export const Test = () => {

    const [email,setEmail]=useState('');
    const [pass,setPass]=useState('');
    const navigate=useNavigate();

    const handleSubmit=()=>{
        
    }
  return (
    <Box>
      <Grid container sx={{ padding: "20px" }}>
        <Grid item xs={12} sm={12} lg={4} md={6} sx={{ marginBottom: "10px" }}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                sx={{
                  display: { xs: "none", lg: "block", md: "none" },
                }}
                component="img"
                height="140"
                image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="p" color="text.primary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} lg={4} md={6}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>

      <form style={{marginLeft:"50px"}}>
        <Box>
          <TextField
            label="email"
            type="text"
            placeholder="Type a message..."
            onChange={(e)=>setEmail(e.target.value)}
          />
        </Box>
        <Box>
          <TextField
            margin="normal"
            label="password"
            type="password"
            placeholder="Type a password..."
            onChange={(e)=>setPass(e.target.value)}
          />
        </Box>
        <Box>
          <Button variant="outlined" onClick={handleSubmit}>Submit</Button>
        </Box>
      </form>
    </Box>
  );
};
