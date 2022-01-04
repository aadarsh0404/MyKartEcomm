import React, { Fragment, useState } from 'react';
import './Header.css';
import { SpeedDial, SpeedDialAction } from "@material-ui/lab";
import { Dashboard, Person, ExitToApp, ListAlt } from '@material-ui/icons';
import { useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
import { logout } from '../../../actions/userAction';
import { useDispatch, useSelector } from 'react-redux';
import Profile from "../../../images/Profile.png"
import { Backdrop } from '@material-ui/core';
import {ShoppingCart} from '@material-ui/icons'

const UserOptions = ({ user }) => {

    const {cartItems} = useSelector((state)=>state.cart);
    const [open, setOpen] = useState(false);
    const alert = useAlert();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const options = [
        { icon: <ListAlt />, name: "Orders", func: orders },
        { icon: <Person />, name: "Profile", func: account },
        { icon: <ShoppingCart style={{ color: cartItems.length > 0 ? "tomato" : "unset" }}></ShoppingCart>, name: `Cart(${cartItems.length})`, func: cart },
        { icon: <ExitToApp />, name: "Logout", func: logoutUser },
    ];
    if (user !== undefined && user.role === "admin") {
        options.unshift({ icon: <Dashboard />, name: "Dashboard", func: dashboard })
    }

    function dashboard() {
        navigate('/admin/dashboard');
    }

    function orders() {
        navigate('/orders');
    }

    function account() {
        navigate('/account');
    }

    function cart() {
        navigate('/cart');
    }

    function logoutUser() {
        dispatch(logout());
        alert.success("Logout Successful");
    }

    return (
        <Fragment>
            <Backdrop open={open} style={{zIndex:"10"}} />
            <SpeedDial
                ariaLabel='SpeedDial tooltip example'
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                direction='down'
                classname='speedDial'
                style={{ zIndex: '11' }}
                icon={<img classname='speedDialIcon' src={user.avatar.url ? user.avatar.url : Profile} alt='/Profile' />}
            >
                {options.map((item) => (
                    <SpeedDialAction key={item.name} icon={item.icon} tooltipTitle={item.name} onClick={item.func} tooltipOpen={window.innerWidth<=600?true:false} />
                ))}
            </SpeedDial>
        </Fragment>

    )
}

export default UserOptions
