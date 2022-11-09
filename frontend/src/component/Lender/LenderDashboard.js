import React, { useEffect } from "react";
import LenderSidebar from "./LenderSidebar.js";
import "./lenderdashboard.css";
import { Typography } from "@material-ui/core";
// import StoreIcon from '@mui/icons-material/Store';
// import BlockIcon from '@mui/icons-material/Block';

import MetaData from "../layout/MetaData";
import { useSelector, useDispatch } from "react-redux";
import { getLenderProducts } from "../../actions/productAction";


const LenderDashboard = () => {

    const dispatch = useDispatch();

    const { products } = useSelector((state) => state.products);

    const { user } = useSelector((state) => state.user);

    let outOfStock = 0;

    products &&
        products.forEach((item) => {
            if (item.Stock === 0) {
                outOfStock += 1;
            }
        });


    useEffect(() => {
        dispatch(getLenderProducts());
        // dispatch(getAllOrders);
        // dispatch(getuser());
    }, [dispatch]);

    return (
        <div className="dashboard">
            <MetaData title="Dashboard - Lender Panel" />

            <LenderSidebar />

            <div className="dashboardContainer">
                <Typography component="h1">{`${user.name}'s Dashboard`}</Typography>

                <div className="line"></div>
                <div className="dashboardSummary">

                    <div className="AvailableProducts">
                        {/* <BlockIcon /> */}
                        Total Products that are posted for rent: {products.length}
                        {/* Products that are  available: 26 */}
                    </div>

                    <div className="TotalProducts ">
                        {/* <StoreIcon /> */}
                        Available products for rent : {products.length - outOfStock}
                        {/* Total products Posted: 50 */}
                    </div>

                    <div className="OutOfStock">
                        {/* <BlockIcon /> */}
                        Products that are not available: {outOfStock}
                        {/* Products that are not available: 34 */}
                    </div>



                </div>

            </div>
        </div >


    )



}

export default LenderDashboard;
