import './App.css';
// import { createStyles, makeStyles } from '@mui/styles';
import { makeStyles } from '@material-ui/core/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@material-ui/core';
import { Header } from './Header';



const useStyles = makeStyles((theme) =>
  ({
    root: {
      // minHeight:'100vh',
      backgroundImage:`url(${process.env.PUBLIC_URL+`https://images.squarespace-cdn.com/content/v1/53707517e4b054112dbfd825/1600263032673-233O6INKOV05HKUB6B4Q/Equipment+needed+for+wedding+photography.jpg`})`,
      backgroundRepeat:'no-repeat',
      backgroundSize:'cover',
      minWidth:'1500px',
      minHeight:'1000px'
    },
    appbar:{
      background:'none',
    }
  }),
);


function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <div className={classes.root}>
        <CssBaseline/>
        <Header/>
      </div>
       </div>
  );
}

export default App;
