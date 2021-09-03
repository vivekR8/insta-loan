import React,{useState} from 'react';
import '../css/Emi.css';
import { withStyles } from '@material-ui/styles';
import { Slider, withTheme } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Table, TableCell,TableRow } from '@material-ui/core';
import TableDetails from '../components/TableDetails';
import SliderMarks from '../components/SliderMarks';
const PrettoSlider=withStyles({
    root:{color:'Blue',height:10},
    thumb:{height:25,width:25,backgroundColor:'white',border:'3px solid black',marginTop:-9,marginLeft:-9},
    track:{height:10,borderRadius:4},
    rail:{height:10,borderRadius:4},
})(Slider);

function EmiCalculator()
{   const[pAmount,setpAmount]=useState(50000);
    const[interest,setinterest]=useState(10);
    const[duration,setDuration]=useState(60);
    const maxValue=1500000;
    const intMax=20;
    const maxDuration=360;

    const intr=interest/1200;
    const emi= duration?Math.round(pAmount*intr/(1-(Math.pow(1/(1+intr),duration)))):0;
    const totalAmt=duration*emi;
    var ToatalAmountOfCredit=Math.round((emi/intr)*(1-Math.pow((1+intr),(-duration))));
    const ToatalAmountOfInterest=Math.round(totalAmt-ToatalAmountOfCredit);
    return(
        //<div className="content-wrapper">
            <div className=" Emi " style={{paddingLeft:"20px"}}>
                <div className="CalApp">
                    <h2 className="CalHeading"><u>Emi Calculator</u></h2>
                <div>
                    <Typography gutterBottom><strong>Loan Amount</strong></Typography>
                    <PrettoSlider value={pAmount} marks={SliderMarks.marksAmt} onChange={(event,vAmt)=>{setpAmount(vAmt)}}defaultValue={pAmount} max={maxValue} valueLabelDisplay="auto"/>
                </div>
                <div>
                    <Typography gutterBottom><strong>Interest Rate %</strong></Typography>
                    <PrettoSlider value={interest} marks={SliderMarks.marksInt}onChange={(event,vInt)=>{setinterest(vInt);}}defaultValue={interest} max={intMax} valueLabelDisplay="auto"/>
                </div>
                <div>
                    <Typography gutterBottom><strong>Tenure (Months)</strong></Typography>
                    <PrettoSlider value={duration} marks={SliderMarks.marksTenure} onChange={(event,vDur)=>{setDuration(vDur);}}defaultValue={duration} max={maxDuration} valueLabelDisplay="auto"/>

                </div>
                </div>
                <div>
                    <Table >
                        <TableRow>
                            <TableCell>
                                <TableDetails pAmount={pAmount} totalAmt={totalAmt} interest={interest} duration={duration} emi={emi} ToatalAmountOfInterest={ToatalAmountOfInterest}></TableDetails>
                            </TableCell>
                        </TableRow>

                    </Table>
                </div>
                    
            </div>
        //</div>
    );
}

export default EmiCalculator;