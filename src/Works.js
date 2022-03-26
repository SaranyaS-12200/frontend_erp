import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    pic: {
        maxWidth:645,
        background: 'rgba(79, 138, 141, 0.8)',
        margin:'20px'
    },
    media : {
        height: 440,
    },
    title: {
        fontFamily:'Hurricane',
        fontWeight: 'bold',
        fontSize: '2rem',
        color: '#fff',
    },
    desc : {
        fontFamily:'Hurricane',
        fontSize: '1.1rem',
        color: '#ddd',
    },
    middle : {
        position:'absolute',
        // width:'3
        width: "550px",
        height:'300px',
        // background:'#063',
        bottom:'0px',
        right:'25%',
        left:'50%',
        marginLeft:'-150px',

    //     left: "0",
    // lineHeight: "200px",
    // marginTop: "-100px",
    // position: "absolute",
    // textAlign: "center",
    // top: "50%",
    // width: "100%",

    }
});
export default function Works({ItsWorks}) {
    const classes = useStyles();
  return (
      <div className={classes.middle}>
    <Card 
    className={classes.pic}
    // sx={{ maxWidth: 345 }}
    >
        <CardMedia
        className={classes.media}
          component="img"
          height="140"
          image={process.env.PUBLIC_URL+'https://st2.depositphotos.com/1113140/5787/v/950/depositphotos_57879341-stock-illustration-check-list-icon.jpg'}
        //   {ItsWorks.url}

          alt="green iguana"
        />
        <CardContent>
          <Typography 
          gutterBottom 
          variant="h5" 
          component="h1"
          className={classes.title}>
            Check Availability
          </Typography>
          <Typography variant="body2" 
          className={classes.desc}
          color="text.secondary">
            We are happy to serve your renting needs but first find out the products you wish to rent are available in the stock at that very moment.
          </Typography>

        </CardContent>
    
    </Card>
    </div>
  );
}





