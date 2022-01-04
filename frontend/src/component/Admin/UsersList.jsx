import React from 'react';
import './ProductsList.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Fragment, useState } from 'react';
import { useEffect } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import { Button } from "@material-ui/core";
import MetaData from "../layout/MetaData";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import SideBar from "./Sidebar";
import { clearErrors, deleteUser, getAllUsers } from '../../actions/userAction';
import { DELETE_USER_RESET } from '../../constants/userConstants';

const UserList = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();

    const alert = useAlert();

    const { user } = useSelector((state) => state.user);
    useEffect(() => {
        if (user.role !== 'admin') {
            navigate("/login");
        }
    }, [navigate, user]);
    
    const { users, loading, error } = useSelector((state) => state.allUsers);
    const { error: deleteError, isDeleted, message } = useSelector((state) => state.profile);

    const deleteUserHandler = (id) => {
        dispatch(deleteUser(id));
    }

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

        if (deleteError) {
            alert.error(deleteError);
            dispatch(clearErrors());
        }
        if (isDeleted) {
            alert.success(message);
            navigate('/admin/dashboard');
            dispatch({ type: DELETE_USER_RESET });
        }

        dispatch(getAllUsers());
    }, [deleteError, error, dispatch, alert, navigate, isDeleted, message]);

    const columns = [
        { field: "id", headerName: "User ID", minWidth: 200, flex: 0.8 },

        {
            field: "email",
            headerName: "Email",
            minWidth: 350,
            flex: 1,
        },
        {
            field: "name",
            headerName: "Name",
            minWidth: 150,
            flex: 0.5,
        },

        {
            field: "role",
            headerName: "Role",
            minWidth: 270,
            flex: 0.5,
        },

        {
            field: "actions",
            flex: 0.3,
            headerName: "Actions",
            minWidth: 150,
            sortable: false,
            renderCell: (params) => {
                return (
                    <Fragment>
                        <Link to={`/admin/user/${params.getValue(params.id, "id")}`}>
                            <EditIcon />
                        </Link>

                        <Button
                            onClick={() =>
                                deleteUserHandler(params.getValue(params.id, "id"))
                            }
                        >
                            <DeleteIcon />
                        </Button>
                    </Fragment>
                );
            },
        },
    ];
    const rows = [];

    users &&
        users.forEach((item) => {
            rows.push({
                id: item._id,
                role: item.role,
                email: item.email,
                name: item.name,
            });
        });
    return (
        <Fragment>
            <MetaData title='All Users - Admin' />
            <div className='dashboard'>
                <SideBar />
                <div className='productsListContainer'>
                    <h1 id="productListHeading">All Users</h1>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={10}
                        disableSelectionOnClick
                        className="productListTable"
                        autoHeight
                    />
                </div>
            </div>
        </Fragment>
    )
}

export default UserList;
