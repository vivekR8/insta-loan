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
import './App.css';

class  App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      isLoggedIn:false
    };
  }

  render(){
  return (
    <div className="App">
      {this.state.isLoggedIn?
          <Router>
              <div >
                  
                  {/* <Sidebar /> */}
                  {/* <LoanDetails value={"hi"} valueid={101}/> */}
                  <Route exact path="/" component={Dashboard}/>
                  <Route exact path="/loan-details" ><LoanDetails valueId={100}/></Route>
                  <Route exact path="/apply-loan" component={Dashboard}/>
                  <Route exact path="/loan-status" component={Dashboard}/>
                  <Route exact path="/emi-calculator" component={Dashboard}/>
              </div>
          </Router>
        :
        <button onClick={()=>{this.setState({isLoggedIn:true})}}>LOG IN</button>
        }
    </div>
  );
  }
}

export default App;
