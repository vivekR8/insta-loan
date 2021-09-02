import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 50,
    width:"30vw",
    paddingTop:15,
    marginBottom:"20px",
    marginRight:"10px"
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
     
  },
  button:{
      
      justifyContent:"center",
      paddingBottom:"10px"
  },
  h2:{
      textAlign:"center"
  }
});

export default function UserDetailsCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>:  </span>;
    console.log("card",props.userData)
  return (
    <Card className={classes.root}>
        <h2 className={classes.h2}>Vehicle Loan</h2>
        <span className={classes.wrap}>
            
            <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        <div className={classes.pad}>UserId  
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div>
                        {bull}
                        <div>{props.userId}</div>
                    </Typography>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        <div className={classes.pad}>Loan ID  
                        &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;</div>
                        {bull}
                        <div>{props.loanDebtId}</div>
                    </Typography>
                    
                    <Typography className={classes.pos} >
                        <div className={classes.pad}>Amount 
                        &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; </div>
                        {bull}
                        <div>{props.loanAmt}</div>
                    </Typography>
                    <Typography className={classes.pos} >
                        <div className={classes.pad}>Start Date &nbsp;&nbsp;&nbsp;&nbsp;</div>
                        {bull}
                        <div>{props.startDate}</div>
                    </Typography>
                    <Typography className={classes.pos} >
                        <div className={classes.pad}>End Date &nbsp; &nbsp;&nbsp;&nbsp;</div>
                        {bull}
                        <div>{props.endDate}</div>
                    </Typography>



                    <Typography className={classes.pos} variant="body2" component="p">
                        <div className={classes.pad}>Vehicle Type 
                        &nbsp;&nbsp;&nbsp;</div>
                        {bull}
                        <div>{props.vehicleType}</div>
                    </Typography>

                    <Typography className={classes.pos} variant="body2" component="p">
                        <div className={classes.pad}>Owner Details &nbsp;&nbsp;</div>
                        {bull}
                        <div>{props.ownerDetails}</div>
                    </Typography>



                    <Typography className={classes.pos} >
                        <div className={classes.pad}>Interest
                        &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
                        </div>
                        {bull}
                        <div>{props.interest}</div>
                    </Typography>
                    <Typography className={classes.pos} >
                        <div className={classes.pad}>Status 
                        &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;</div>
                        {bull}
                        <div>{props.loanStatus}</div>
                    </Typography>
                   
                    
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