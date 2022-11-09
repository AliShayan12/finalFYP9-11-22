import React from "react";
import ErrorIcon from "@material-ui/icons/Error";
import "./NotFound.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const noProducts = () => {
    return (
        <div className="PageNotFound">
            <ErrorIcon />

            <Typography>No Products Found </Typography>
            <Link to="/lender/createProduct">Create Product</Link>
        </div>
    );
};

export default noProducts;