// import React, { Fragment, useEffect } from 'react';
// // import { CgMouse } from "react-icons/cg";
// // import { CgMouse } from "react-icons/all";
// import { Link } from 'react-router-dom';
// import "./Home.css";
// import ProductCard from "./ProductCard";
// import MetaData from "../layout/MetaData";
// import { clearErrors, getProduct } from '../../actions/productAction';
// import { useSelector, useDispatch } from "react-redux";
// import Loader from '../layout/Loader/Loader';
// import { useAlert } from "react-alert"; 

// const Home = () => {

//     const alert = useAlert();
//     const dispatch = useDispatch();
//     const { loading, error, products } = useSelector((state) => state.products);

//     useEffect(() => {
//         if (error) {
//             alert.error(error);
//             dispatch(clearErrors());
//         }
//         dispatch(getProduct());
//     }, [dispatch, error, alert])

//     return (
//         <Fragment>
//             {loading ? <Loader /> : (
//                 <Fragment>
//                     <MetaData title="Equip-Rental" />

//                     <div className="banner">
//                         <p>Welcome to Equip-Rental</p>
//                         <h1>Find Products For Rent Below</h1>

//                         <Link to="/products">
//                             <button>
//                                 {/* Show Featured Products <CgMouse /> */}
//                                 Show Featured Products
//                             </button>
//                         </Link>
//                     </div>
//                     <h2 className="homeHeading">Featured Products</h2>

//                     <div className="container" id="container">
//                         {products && products.map((product) => <ProductCard product={product} />)}
//                     </div>



//                 </Fragment>
//             )}
//         </Fragment>

//     )
// }

// export default Home


import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardActions, CardContent, Grid, Typography, CardMedia } from "@mui/material"
import "./Home.css";

const Home = () => {

    return (
        <div>
            <div className="banner">
                <p>Welcome to Equip-Rental</p>
                <h1>Where You Find Products For Rent</h1>

                <Link to="/products">
                    <button>

                        Show Featured Products
                    </button>
                </Link>

            </div>
            <div className='card'>

                <Grid container spacing={4}>
                    <Grid item xs={4}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://media.istockphoto.com/photos/watch-picture-id916408346?k=20&m=916408346&s=612x612&w=0&h=pzFvtlKT8xq9eVq1YmNMV2bF1dTTL7ayS9ce2G3Kyu4="
                                alt="Wrist Watch"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Wrist Watch
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    A wristwatch is designed to be worn around the wrist, attached by a watch strap or other type of bracelet, including metal bands, leather straps or any other kind of bracelet.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary">1500 Rs per hour</Button>

                                <Button size="small" >Rent now</Button>
                            </CardActions>
                        </Card>
                    </Grid>


                    <Grid item xs={4}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGVhZHBob25lc3xlbnwwfHwwfHw%3D&w=1000&q=80"
                                alt="Headphones image"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Sony Headphones
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    There are different types of headphones, such as in-ear, over-ear, and earbuds. Headphones are designed to block out outside noise
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">700 Rs Per hour</Button>
                                <Button size="small">Rent now</Button>
                            </CardActions>
                        </Card>
                    </Grid>


                    <Grid item xs={4}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://images.unsplash.com/photo-1616627547584-bf28cee262db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                                alt="Furniture"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Chair
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    This mid-century chair is crafted from steel and leather. It is a modern interpretation of the classic design with its clean lines and sleek angles.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">1000 Rs Per hour </Button>
                                <Button size="small">Rent now</Button>
                            </CardActions>
                        </Card>
                    </Grid>

                </Grid>

            </div>
        </div>
    )
}

export default Home

