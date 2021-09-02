import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 200,
    width:"65vw",
    paddingTop:15,
    marginBottom:"20px"
  },
  wrap:{
    display:"flex",
    justifyContent:"space-evenly"
  },
  bullet: {
    margin: '0 8px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
    display:"flex",
    
  },
  pos: {
    marginBottom: 12,
    display:"flex",
    
  },
  pad:{
      marginRight:"30px"
  },
  button:{
      
      justifyContent:"center",
      paddingBottom:"10px"
  }
  
});

export default function UserDetailsCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>:  </span>;
    console.log("card",props)
  return (
    <Card className={classes.root}>
        <span className={classes.wrap}>
            <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        <div className={classes.pad}>UserId  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                        {bull}
                        <div>{props.userId}</div>
                    </Typography>
                    <Typography className={classes.pos} variant="h5" component="h1">
                        <div className={classes.pad}>Name</div>
                        {bull}
                        <div>{props.userName}</div>
                    </Typography>
                    <Typography className={classes.pos} >
                        <div className={classes.pad}>Contact &nbsp;</div>
                        {bull}
                        <div>{props.contact}</div>
                    </Typography>
                    <Typography className={classes.pos} >
                        <div className={classes.pad}>Email &nbsp;&nbsp;&nbsp;&nbsp;</div>
                        {bull}
                        <div>{props.email}</div>
                    </Typography>
                    <Typography className={classes.pos} variant="body2" component="p">
                        <div className={classes.pad}>Address &nbsp;&nbsp;</div>
                        {bull}
                        <div>{props.address}
                        <br />
                        {props.city}
                        </div>
                    </Typography>
                </CardContent>
                <CardContent>
                    <Typography className={classes.pos} >
                        <div className={classes.pad}>Account No.</div>
                        {bull}
                        <div>{props.accountNo}</div>
                    </Typography>
                    <Typography className={classes.pos} >
                        <div className={classes.pad}>Pan no &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                        {bull}
                        <div>{props.panNo}</div>
                    </Typography>
                    <Typography className={classes.pos} >
                        <div className={classes.pad}>Credit Score</div>
                        {bull}
                        <div>{props.creditScore}</div>
                    </Typography>
                    {props.educationLoans.length>0  &&  
                        <Typography className={classes.pos} >
                            <div className={classes.pad}>Education Loan &nbsp;</div>
                            {bull}
                            <div>{props.educationLoans.length}</div>
                        </Typography>
                    }
                    {props.homeLoans.length>0  &&  
                        <Typography className={classes.pos} >
                            <div className={classes.pad}>Home Loan &nbsp;</div>
                            {bull}
                            <div>{props.homeLoans.length}</div>
                        </Typography>
                    }
                    {props.vehicleLoans.length>0  &&  
                        <Typography className={classes.pos} >
                            <div className={classes.pad}>Vehicle Loan</div>
                            {bull}
                            <div>{props.vehicleLoans.length}</div>
                        </Typography>
                    }
                    {props.goldLoans.length>0  &&  
                        <Typography className={classes.pos} >
                            <div className={classes.pad}>Gold Loan&nbsp;&nbsp;&nbsp;</div>
                            {bull}
                            <div>{props.goldLoans.length}</div>
                        </Typography>
                    }
            </CardContent>
      </span>
      <CardActions className={classes.button}>
        <Fab variant="extended" >
            Edit
        </Fab>
      </CardActions>
    </Card>
  );
}