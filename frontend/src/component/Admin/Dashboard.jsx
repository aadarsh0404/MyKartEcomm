import React from 'react';
import Sidebar from "./Sidebar.jsx";
import './Dashboard.css';
import { Typography } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import { Doughnut, Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAdminProduct } from '../../actions/productAction.js';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
} from 'chart.js';
import { getAllOrders } from '../../actions/orderAction.js';
import MetaData from '../layout/MetaData'
const Dashboard = () => {

    const dispatch = useDispatch();
    const { products } = useSelector((state) => state.products);
    const { orders } = useSelector((state) => state.allOrders);
    const { users } = useSelector((state) => state.allUsers);
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.user);
    useEffect(() => {
        if (user.role !== 'admin') {
            navigate("/login");
        }
    }, [navigate, user]);
    useEffect(() => {
        dispatch(getAdminProduct());
        dispatch(getAllOrders());
    }, [dispatch]);

    let earnings = 0;
    orders&&orders.forEach((item)=>{
        earnings+=item.totalPrice
    });
    earnings = Math.round(earnings);

    let outOfStock = 0;
    products && products.forEach(item => {
        if (item.Stock === 0)
            outOfStock += 1;
    });

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend,
        ArcElement
    );

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Chart.js Line Chart',
            },
        },
    };


    const linestate = {
        labels: ["Initial Amount", "Amount Earned"],
        datasets: [
            {
                label: "TOTAL AMOUNT",
                data: [0, earnings],
                backgroundColor: ["tomato"],
                hoverBackgroundColor: ["rgb(197, 72, 49)"],
            },
        ],
    };

    const doughnutstate = {
        labels: ["In Stock", "Out of Stock"],
        datasets: [
            {
                label: "PRODUCT STOCKS",
                backgroundColor: ["#3ef3e4", "#f3e3c2"],
                hoverBackgroundColor: ["#ffedfa", "#feaae3"],
                data: [products.length - outOfStock, outOfStock],
            },
        ],
    };

    return (
        <div className='dashboard'>
            <MetaData title='DashBoard'/>
            <Sidebar />

            <div classname='dashboardContainer'>
                <h1 id='header'>Dashboard</h1>

                <div className="dashboardSummary">
                    <div>
                        <p>
                            Total Amount <br /> ₹{earnings}
                        </p>
                    </div>
                    <div className="dashboardSummaryBox2">
                        <Link to="/admin/products">
                            <p>Product</p>
                            <p>{products && products.length}</p>
                        </Link>
                        <Link to="/admin/orders">
                            <p>Orders</p>
                            <p>{orders && orders.length}</p>
                        </Link>
                        <Link to="/admin/users">
                            <p>Users</p>
                            <p>{users && users.length}</p>
                        </Link>
                    </div>
                    <div className='linechart'>
                        <Line
                            options={options}
                            data={linestate}
                        />
                    </div>
                    <div className='doughnutchart'>
                        <Doughnut
                            options={options}
                            data={doughnutstate}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
