const express = require("express");
const router = express.Router();

require("dotenv").config();
const verification=require("../../middleware/verification.js");

const addRole = require ("../../controllers/Admin/addRole.js");
const adminDetail = require ("../../controllers/Admin/adminDetail.js");
const createUser = require ("../../controllers/Admin/createUser.js");
const getUsers = require ("../../controllers/Admin/getUsers.js");
const editUser = require ("../../controllers/Admin/editUser.js");
const getAdminDetail = require ("../../controllers/Admin/getAdminDetail.js");
const deleteUser = require ("../../controllers/Admin/deleteUser.js");
const getClientDetails = require ("../../controllers/Admin/getClientDetail.js");
const addSite = require ("../../controllers/Admin/addSite.js");
const getSupervisorDetail = require ("../../controllers/Admin/supervisorDetails.js");
const editSiteDetail = require ("../../controllers/Admin/editSiteDetail.js");
const getSiteDetail = require ("../../controllers/Admin/getSiteDetail.js");
const deleteSite = require ("../../controllers/Admin/deleteSite.js");
const getExpense = require ("../../controllers/Admin/getExpense.js");
const updateExpenseStatus = require ("../../controllers/Admin/updateExpenseStatus.js");
const getPaymentDetail = require ("../../controllers/Admin/getPaymentDetail.js");
const paymentApproval = require ("../../controllers/Admin/paymentApproval.js");
const disbursement = require ("../../controllers/Admin/disbursement.js");
const addFeature = require ("../../controllers/Admin/addFeature.js");

// admin login

// router.post("/admin/login", async (req, res) => {
//   const { email, password } = req.body;
//   if(!email||!password){
//     res.send({
//         success:false,
//         message:"all fields are required"
//     })
//   }
//   try {
//     const user = await User.findOne({ email: email });
//     if (!user) {
//       return res.send({
//         success: false,
//         message: "user not found",
//       });
//     }
//     if (user.role === "admin") {
//       const isMatch = await bcrypt.compare(password, user.password);
//       if (!isMatch) {
//         return res.send({
//           success: false,
//           message: "wrong password",
//         });
//       }
//       const data = {
//         id: user._id,
//       };

//       const token = await jwt.sign(data, secretCode);
//       console.log(token + ". token");
//       user.password = "";
//       return res.send({
//         success: true,
//         message: "user logged in successfully",
//         token: token,
//         data: user,
//       });
//     }
//     return res.send({
//         success:false,
//         message:"user is not an admin"
//     })
//   } catch (err) {
//     return res.status(501).send({
//       success: false,
//       message: `error:- ${err.message}`,
//     });
//   }
// });

// admin details
router.get("/admin/detail",verification,adminDetail)

// router for add role
router.post("/add/role" ,verification,addRole)

//router to create user
router.post("/create/user",verification, createUser);

// router for getting user list
router.get("/get/users",verification, getUsers);

// editUser
router.put("/edit/user/:id",verification,editUser)


// delete user from collection
router.delete("/delete/user/:id",verification,deleteUser)

// router for getting admin detail
router.get("/admin/detail",verification,getAdminDetail)

// router to get clients detail
router.get("/client/detail",verification, getClientDetails);

//  router to get supervisors detail
router.get("/supervisor/details",verification, getSupervisorDetail);

// router for site details
router.post("/add/site",verification, addSite);





// getting site details
router.get("/get/sitesdetail",verification,getSiteDetail)

// edit site details
router.put("/edit/site/:id",verification, editSiteDetail)

// deleting site
router.delete("/delete/site/:id",verification,deleteSite)


// router for getting pending expenses detail from expenses collection
router.get("/getExpense/detail", verification,getExpense);

//router for expense approval
router.post("/updateExpenseStatus", verification,updateExpenseStatus);

//router for getting payment details which is from clients
router.get("/getPayment/detail", verification,getPaymentDetail);

// router for approving payment from client
router.post("/payment/approval", verification, paymentApproval);

// router for fund allocation to supervisor
router.post("/disbursement", verification, disbursement);



// additional features
router.post("/add/feature", verification, addFeature)

module.exports = router;
