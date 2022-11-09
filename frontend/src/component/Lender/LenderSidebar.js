import React from "react";
import "./Lendersidebar.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import PostAddIcon from "@material-ui/icons/PostAdd";
import AddIcon from "@material-ui/icons/Add";
// import DashboardIcon from "@material-ui/icons/Dashboard";
const LenderSidebar = () => {
    return (
        <div className="sidebar">
            <Link to="/">
                <img src={logo} alt="Equip-Rental" />
            </Link>

            {/* <Link to="/lender/dashboard">
                <p>
                    <DashboardIcon /> Dashboard
                </p>
            </Link> */}

            <Link to="/lender/products">
                <p>
                    <PostAddIcon /> View Products
                </p>
            </Link>


            <Link to="/lender/createProduct">
                <p>
                    <AddIcon /> Add Product
                </p>
            </Link>


        </div>
    );
};

export default LenderSidebar;