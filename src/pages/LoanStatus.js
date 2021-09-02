import React from 'react';
import TableCom from '../components/TableCom';


const LoanStatus = () => {
    return ( 
        <div className="content-wrapper" style={{height: "95vh",width:"100%"}}>
            <h1 style={{backgroundColor: "#2F4050", textAlign: "center",fontFamily: "sans-serif",
                boxShadow: "5px 5px 5px darkslategrey",  color: "white"}}> Loan Status</h1>
        <TableCom></TableCom>
            </div>
     );
}
 
export default LoanStatus;