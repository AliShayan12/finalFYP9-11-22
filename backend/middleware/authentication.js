const Errorhander = require("../utils/errorhander");
const catchAsyncErrors = require("./catchAsyncErrors");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");


// if logged in then access that module.
exports.isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {

    const { token } = req.cookies;

    if (!token) {
        return next(new Errorhander("Please Login", 401));
    }

    const decodedData = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await User.findById(decodedData.id);

    next();

})

//spread operator
exports.authorizeRoles = (...roles) => {
    return (req, res, next) => {

        if (!roles.includes(req.user.role)) {
            return next(new Errorhander(`Role: ${req.user.role} is not allowed to access this resource`, 403)
            )
        }

        next();
    }
}
