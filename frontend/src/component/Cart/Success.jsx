import React from 'react'
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import "./orderSuccess.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import MetaData from '../layout/MetaData';

const Success = () => {
    return (
        <div className="orderSuccess">
            <MetaData title="Success"/>
            <CheckCircleIcon />

            <Typography>Your Order has been Placed successfully </Typography>
            <Link to="/orders">View Orders</Link>
        </div>
    );
}

export default Success
