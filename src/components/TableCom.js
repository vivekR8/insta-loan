import React, { useEffect,useState } from 'react';
import '../css/loanStatus.css';
import axios from 'axios';
import {API} from '../constants';
const userId="134";
const TableCom = () => {
    useEffect(()=>{
        axios.get(`${API}/user/${userId}`)
        .then(res=>{
            console.log(res.data);
            setLoandata(res.data);
        }).catch((err)=>console.log(err))
    },[])
    const [loandata,setLoandata]=useState({
        "homeLoans": [
            {
                "userId": 121,
                "loanDebtId": "HM4",
                "loanAmt": 4654,
                "interest": 5,
                "startDate": "2020-03-04",
                "endDate": "2021-09-19",
                "propertyType": "Villa",
                "area": "North Island",
                "address": "184-6159 Faucibus Rd.",
                "loanStatus": "Pending"
            }
        ],
    "educationLoans": [],
    "goldLoans": [
        {
            "userId": 105,
            "loanAmt": 8278,
            "interest": 7,
            "startDate": "2011-07-19",
            "endDate": "2028-06-03",
            "goldAmt": 7481,
            "loanDebtId": "GL22",
            "loanStatus": "Approved"
        }
    ],
    "vehicleLoans": [
        {
            "loanDebtId": "VH13",
            "userId": 105,
            "startDate": "2015-10-12",
            "loanAmt": 476793,
            "endDate": "2021-10-17",
            "interest": 13,
            "loanStatus": "Declined",
            "ownerDetails": "Quisque imperdiet, erat",
            "vehicleType": "Van"
        }
    ]});
    const cname= (status)=>{
        if(status==="Pending")
        {
            return (
                "Pending")
        }
        else if(status === "Approved")
        {
            return("Approved")
        }
        else if(status==="Declined" || status==="Disapproved")
        {
            return("Declined")
        }
        return("not")
    }
    return ( 
        <div><table className="table" id="customers">
        <thead>
            <tr>
                <th>Type of Loan</th>
                <th>Loan Debt Id</th>
                <th>Loan Amt</th>
                <th>Interest</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
        {
            !loandata.homeLoans ? (""):(
                loandata.homeLoans.map((home,loanDebtId)=>(
                    <tr key={loanDebtId} className={cname(home.loanStatus)}>
                        <td>Home Loan</td>
                        <td>{home.loanDebtId}</td>
                        <td>{home.loanAmt}</td>
                        <td>{home.interest}</td>
                        <td>{home.loanStatus}</td>
                    </tr>
                ))
            )
        }
        {
            !loandata.goldLoans ? (""):(
                loandata.goldLoans.map((gold,loanDebtId)=>(
                    <tr key={loanDebtId} className={cname(gold.loanStatus)}>
                        <td>Gold loan</td>
                        <td>{gold.loanDebtId}</td>
                        <td>{gold.loanAmt}</td>
                        <td>{gold.interest}</td>
                        <td>{gold.loanStatus}</td>
                    </tr>
                ))
            )
        }
        {
             !loandata.educationLoans ? (""):(
                loandata.educationLoans.map((edu,loanDebtId)=>(
                    <tr key={loanDebtId} className={cname(edu.loanStatus)}>
                        <td>Education loan</td>
                        <td>{edu.loanDebtId}</td>
                        <td>{edu.loanAmt}</td>
                        <td>{edu.interest}</td>
                        <td>{edu.loanStatus}</td>
                    </tr>
                ))
            )

        }
        {
            !loandata.vehicleLoans ? (""):(
                loandata.vehicleLoans.map((vehicle,loanDebtId)=>(
                    <tr key={loanDebtId} className={cname(vehicle.loanStatus)}>
                        <td>Vehicle loan</td>
                        <td>{vehicle.loanDebtId}</td>
                        <td>{vehicle.loanAmt}</td>
                        <td>{vehicle.interest}</td>
                        <td>{vehicle.loanStatus}</td>
                    </tr>
                ))
            )
        }
        </tbody>
            
            </table></div>
     );
}
 
export default TableCom;