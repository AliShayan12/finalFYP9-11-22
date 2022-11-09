const express = require("express");

const { getAllProducts, createProduct, updateProduct, deleteProduct, getProductDetails, createProductReview, getProductReviews, deleteReview, getAdminProducts, getLenderProducts, updateLenderProduct, deleteProductLender } = require("../controllers/productController");

const { isAuthenticatedUser, authorizeRoles } = require("../middleware/authentication");

const router = express.Router();

router.route("/products").get(getAllProducts);

router
    .route("/admin/products")
    .get(isAuthenticatedUser, authorizeRoles("admin"), getAdminProducts);

//creating a product
router.route("/admin/product/new").post(isAuthenticatedUser, authorizeRoles("Lender"), createProduct);

// getting lender products
router.route("/lender/products").get(isAuthenticatedUser, authorizeRoles("Lender"), getLenderProducts);

// editing lenders products
router.route("/lender/product/:id").put(isAuthenticatedUser, authorizeRoles("Lender"), updateLenderProduct);

// deleting lender products 
router.route("/lender/product/:id").delete(isAuthenticatedUser, authorizeRoles("Lender"), deleteProductLender);

// admin can delete or edit product
router.route("/admin/product/:id")
    .put(isAuthenticatedUser, authorizeRoles("admin"), updateProduct)
    .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProduct)


router.route("/product/:id").get(getProductDetails);

router.route("/review").put(isAuthenticatedUser, createProductReview);

router.route("/reviews").get(getProductReviews)

router.route("/reviews").delete(isAuthenticatedUser, deleteReview);



module.exports = router;