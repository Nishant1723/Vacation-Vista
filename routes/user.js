const express = require("express");
const wrapAsync = require("../utils/wrapAsync");
const router = express.Router();
const User = require("../models/user");
const { route } = require("./listing");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware");

const userController = require("../controller/users");

router
    .route("/signup")
    .get(userController.renderSignUpForm)
    .post(wrapAsync(userController.signup));

router
    .route("/login")
    .get(userController.renderModuleForm)
    .post(
        saveRedirectUrl,
        passport.authenticate("local", {
            failureRedirect: "/login",
            failureFlash: true,
        }),
        userController.login
    );

router.get("/logout", userController.logout);

module.exports = router;















// router.get("/signup", userController.renderSignUpForm);

// router.post("/signup", wrapAsync(userController.signup));

// router.get("/login", userController.renderModuleForm)

// router.post("/login",
//     saveRedirectUrl,
//     passport.authenticate("local", {
//         failureRedirect: "/login",
//         failureFlash: true,
//     }),
//     userController.login
// );



