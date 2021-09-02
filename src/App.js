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

 getUserDetails=()=>{
   const {userId}=this.state;
   console.log(userId);
   axios.get(`${API}/user/${userId}`).then(
      (res)=>{
      this.setState({userData:res.data})
    }).catch((err)=>console.log(err))
 }

  render(){
    const {userData}=this.state;
    console.log(userData,"response")
  return (
    <div className="App">
      {this.state.isLoggedIn?
          <Router>
              <div className="wrapper">
                  
                  <Sidebar />
                  <Route exact path="/"><Dashboard userData={userData} /></Route>
                  <Route exact path="/loan-details" ><LoanDetails valueId={100}/></Route>
                  <Route exact path="/apply-loan" component={Dashboard}/>
                  <Route exact path="/loan-status" component={Dashboard}/>
                  <Route exact path="/emi-calculator" component={EmiCalculator}/>
              </div>
          </Router>
        :
        <button onClick={()=>{this.setState({isLoggedIn:true,userId:134},()=>this.getUserDetails())}}>LOG IN</button>
        }
    </div>
  );
  }
}

export default App;
