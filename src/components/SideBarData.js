import React,{useState} from 'react';
import DetailsIcon from '@material-ui/icons/Details';
import CreateIcon from '@material-ui/icons/Create';
import BookIcon from '@material-ui/icons/Book';

export const  SidebarData =[
    {
        title:"Loan Details",
        icon: <DetailsIcon/>,
        link: "/loan-details"
    },
    {
        title:"Apply Loan",
        icon: <CreateIcon/>,
        link: "/apply-loan"
    },
    {
        title:"Loan Status",
        icon: <BookIcon/>,
        link: "/loan-status"
    },
    {
        title:"EMI  Calculation",
        icon: <DetailsIcon/>,
        link: "/emi-calculator"
    }
]