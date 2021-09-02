import React from "react";
import Form from '../components/Form';
import Sidebar from "../components/SideBar";


class ApplyLoan extends React.Component{
    render(){
        return(
            <div className="content-wrapper" style={{height: "95vh",backgroundColor: "beige"}}>
                {/* backgroundColor: "beige""#70c7f5"*/}
                <h1 style={{backgroundColor: "#2F4050", textAlign: "center",fontFamily: "sans-serif",
                boxShadow: "5px 5px 5px darkslategrey",  color: "white"}}> Loan Application </h1>
                <Form />
            </div>
        );
    }
}

export default ApplyLoan;

