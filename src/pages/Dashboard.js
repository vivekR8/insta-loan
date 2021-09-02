import React from 'react';
import UserDetailsCard from '../components/UserDetailsCard';
import '../App.css';
import { Link } from 'react-router-dom';

class Dashboard extends React.Component{
    render(){
        const{userData}=this.props;
        return(
            userData?<div className="content-wrapper">
                <h1 className="message">Welcome {userData.userName} &nbsp;</h1>
                <UserDetailsCard {...userData}/>
            </div>
            :
            <div><h1>Please Login with User ID</h1></div>
        );
    }
}

export default Dashboard;