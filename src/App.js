import "./App.css";
// import { createStyles, makeStyles } from '@mui/styles';
import { makeStyles } from "@material-ui/core/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@material-ui/core";
import { Header } from "./Header";
import Paper from '@mui/material/Paper';
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AboutWork from "./AboutWork";
import { useState } from "react";


export const useStyles = makeStyles((theme) => ({
  root: {
    // minHeight:'100vh',
    backgroundImage: `url(${
      process.env.PUBLIC_URL +
      `https://images.squarespace-cdn.com/content/v1/53707517e4b054112dbfd825/1600263032673-233O6INKOV05HKUB6B4Q/Equipment+needed+for+wedding+photography.jpg`
    })`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    minWidth: "1500px",
    minHeight: "1000px",
  },
  appbar: {
    background: "none",
  },
}));

function App() {
  const [mode,setMode]=useState('light');
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={4}  style={{borderRadius:"0px",minHeight:"100vh"}} >
    <div className="App">
      <div className={classes.root}>
        <CssBaseline />
        <Header />
        
      </div>
    </div>
    </Paper>
    </ThemeProvider>
  );
}


export default App;
