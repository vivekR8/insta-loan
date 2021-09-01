import React from 'react';
import axios from 'axios';
import {API} from '../constants';
import ShowData from '../components/showData';
class LoanDetails extends React.Component{
    constructor(props){
        super(props);
        this.state={
            loanDetails:null
        };
    }
    
    handleClick=()=>{
        axios.get(`http://localhost:8090/home-loan`).then(
            (res)=>{console.log(res.data)
            this.setState({loanDetails:res.data})}
        ).catch((err)=>console.log(err))
    }
    render(){
        return(
            <div>
                <div><h1 onClick={()=>this.handleClick()}>{this.props.valueId}</h1></div>
                {/* {this.state.loanDetails.map((val)=>{ */}
                {/* {this.state.loanDetails && */}
                    <ShowData val={this.state.loanDetails}/>
                {/* } */}
                {/* })} */}
                
            </div>
            
        );
    }
}

export default LoanDetails;