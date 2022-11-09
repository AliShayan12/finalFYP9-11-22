//this is for the ones who is logged in 
import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
// import {useNavigate} from "react-router-dom";

const ProtectedRoute = ({ isLender, isAdmin, component: Component, ...rest }) => {
    const { loading, isAuthenticated, user } = useSelector((state) => state.user);
    // const navigate = useNavigate()

    return (
        <Fragment>
            {loading === false && (
                <Route
                    {...rest}
                    render={(props) => {
                        if (isAuthenticated === false) {
                            return <Redirect to="/login" />;

                        }

                        //for admin
                        if (isAdmin === true && user.role !== "admin") {
                            return <Redirect to="/login" />;

                        }

                        //for lender
                        if (isLender === true && user.role !== 'Lender') {
                            return <Redirect to="/login" />;

                        }



                        return <Component {...props} />;
                    }}
                />
            )}
        </Fragment>
    );
};

export default ProtectedRoute;