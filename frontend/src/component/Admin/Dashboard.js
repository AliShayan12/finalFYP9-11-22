import React, { useEffect } from "react";
import Sidebar from "./Sidebar.js";
import "./dashboard.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import MetaData from "../layout/MetaData";
import { useSelector, useDispatch } from "react-redux";
import { getAdminProduct } from "../../actions/productAction";
import StoreIcon from '@mui/icons-material/Store';
import BlockIcon from '@mui/icons-material/Block';
import { getAllOrders } from "../../actions/orderAction.js";
import { getAllUsers } from "../../actions/userAction.js";

const Dashboard = () => {

    const dispatch = useDispatch();

    const { products } = useSelector((state) => state.products);
    const { orders } = useSelector((state) => state.allOrders);
    const { users } = useSelector((state) => state.allUsers);
    let outOfStock = 0;

    products &&
        products.forEach((item) => {
            if (item.Stock === 0) {
                outOfStock += 1;
            }
        });
    useEffect(() => {
        dispatch(getAdminProduct());
        dispatch(getAllOrders);
        dispatch(getAllUsers());
    }, [dispatch]);

    let totalAmount = 0;
    orders &&
        orders.forEach((item) => {
            totalAmount += item.totalPrice;
        });


    return (
        <div className="dashboard">
            <MetaData title="Dashboard - Admin Panel" />
            <Sidebar />

            <div className="dashboardContainer">
                <Typography component="h1">Dashboard</Typography>

                <div className="dashboardSummary">
                    <div>
                        <p>
                            Total Amount <br /> Rs {totalAmount}
                            {/* Total Amount <br /> $50000 */}
                        </p>
                    </div>
                    <div className="dashboardSummaryBox2">
                        <Link to="/admin/products">
                            <p style={{ fontSize: "1.2rem" }}>Total Products Posted</p>
                            <p>{products && products.length}</p>

                        </Link>
                        <Link to="/admin/orders">
                            <p style={{ fontSize: "1.2rem" }}>Orders</p>
                            <p>{orders && orders.length}</p>
                            {/* <p>41</p> */}
                        </Link>
                        <Link to="/admin/users">
                            <p style={{ fontSize: "1.2rem" }}>Users</p>
                            <p>{users && users.length}</p>
                            {/* <p>2</p> */}
                        </Link>
                    </div>
                </div>

                <div className="OutOfStock">
                    <BlockIcon />
                    Products that are not available: {outOfStock}
                </div>


                <div className="TotalProducts">
                    <StoreIcon />
                    Total products available: {products.length - outOfStock}
                </div>

            </div>
        </div >
    )
}

export default Dashboard;