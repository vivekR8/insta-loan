import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Sidebar from './components/SideBar';
import LoanDetails from './pages/LoanDetials';
import axios from 'axios';
import {API} from './constants';
import './App.css';
import EmiCalculator from './pages/EmiCalculator';
import ApplyLoan from './pages/ApplyLoan';
import LoginPage from './pages/LoginPage';
import LoanStatus from './pages/LoanStatus';

class  App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      isLoggedIn:false,
      type:"admin",
      userData:null,
      userId:0
    };
  }

 getUserDetails=(id)=>{
    this.setState({isLoggedIn:true,userId:id},
      ()=>{

   const {userId}=this.state;
   console.log(userId);
   axios.get(`${API}/user/${userId}`).then(
      (res)=>{
      this.setState({userData:res.data})
    }).catch((err)=>console.log(err))
  })
 }

  render(){
    const {userData}=this.state;
    console.log(userData,"response")
  return (
    <div className="App">
      {this.state.isLoggedIn?
          <Router >
          <div className="route">
             <Sidebar  />
              <div 
               className="wrapper" 
                style={{width:'70%'}}>
                  
                 
                  <Route exact path="/"><Dashboard userData={userData} /></Route>
                  <Route exact path="/loan-details" ><Dashboard userData={userData} /></Route>
                  <Route exact path="/apply-loan" component={ApplyLoan}/>
                  <Route exact path="/loan-status" component={LoanStatus}/>
                  <Route exact path="/emi-calculator" component={EmiCalculator}/>
              </div>
              </div>
          </Router>
        :
        <LoginPage loginById={this.getUserDetails} />
        }
        
    </div>
  );
  }
}

export default App;
