import {AppBar} from '@material-ui/core';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import { Tab } from '@mui/material';
const useStyles=makeStyles((theme)=>({
    root: {
display:'flex',
// justifyContent: 'center',
// alignItems: 'center',
// height:'100vh',
// fontFamily:'Nunito',
    },
    appbar: {
        background:'none',
    },
    appbarWrapper: {
       width: '80%',
       margin: '0 auto'
    },
    // appbarTitle: {
    //     flexGrow: '1',
    // }
}));

export function Header() {
    const classes=useStyles();
  const history = useHistory();
  return (
    <div>
      <AppBar className={classes.appbar} elevation={0}
        >
        <Toolbar className={classes.appbarWrapper}>
            <h1 className={classes.appbarTitle}>MyWork</h1><Tab/>
          <Button color="inherit"
            onClick={() => history.push('/About')}
          >About</Button>
          <Button color="inherit"
            onClick={() => history.push('/Products')}
          >Products</Button>
          <Button color="inherit"
            onClick={() => history.push('/CartPage')}
          >CartPage</Button>
          <Button color="inherit"
            onClick={() => history.push('/Contact')}
          >Contact</Button>
          <Button color="inherit"
            onClick={() => history.push('/Login')}
          >Login</Button>
          <Button color="inherit">Mode</Button>
        </Toolbar>
      </AppBar>
      <div>
          <h1 className={classes.data}>Photography is an art of <br/> teleporting the past into the future.</h1>
      </div>
      <div>
        <Switch>
          <Route exact path="/About">
            <h1>WELCOME TO ABOUT PAGE</h1>
          </Route>
          <Route exact path="/Products">
            <h1>WELCOME TO Product PAGE</h1>
          </Route>
          <Route exact path="/CartPage">
            <h1>WELCOME TO CartPage PAGE</h1>
          </Route>
          <Route exact path="/Contact">
            <h1>WELCOME TO Contact PAGE</h1>
          </Route>
          <Route exact path="/Login">
            <h1>WELCOME TO Login PAGE</h1>
          </Route>
        </Switch>
      </div>
    </div>
  );
}
