import React from 'react';
import UserDetailsCard from '../components/UserDetailsCard';
import '../App.css';
import HomeLoanCard from '../components/HomeLoanCard';
import GoldLoanCard from '../components/GoldLoanCard';
import VehicleLoanCard from '../components/VehicleLoanCard';


class Dashboard extends React.Component{
    render(){
        const{userData}=this.props;
        return(
            userData?
            
            <div className="content-wrapper">{console.log(userData.homeLoans)}
                <h1 className="message">Welcome {userData.userName} &nbsp;</h1>
                <UserDetailsCard  {...userData}/>
                <div className="card">
                {userData.homeLoans.length>0 && userData.homeLoans.map((data)=>{
                    return <HomeLoanCard {...data}/>
                })}
                {userData.goldLoans.length>0 && 
                userData.goldLoans.map((data)=>{
                    return <GoldLoanCard {...data}/>
                })}

                {userData.vehicleLoans.length>0 && userData.vehicleLoans.map((data)=>{
                    return <VehicleLoanCard {...data}/>
                })}

            </div>

               
                
                
                
            </div>
            :
            <div><h1>Please Login with User ID</h1></div>
        );
    }
}

export default Dashboard;