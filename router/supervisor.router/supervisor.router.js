const express = require("express");
const router = express.Router();
const User = require("../../Schema/users.schema/users.model")
const Supervisor = require("../../Schema/supervisor.schema/supervisor.model");
const Site = require("../../Schema/site.Schema/site.model");
const Expense = require("../../Schema/expenses.schema/expense.model");
const Progress = require("../../Schema/progressReport.schema/progressReport.model")
const upload = require("../../middleware/multer");
const multer = require("multer");
const verification = require("../../middleware/verification");
const supervisorDetail = require("../../controllers/Supervisor/supervisorDetail");
const allortedSite = require("../../controllers/Supervisor/allortedSite");
const getExpenseDetail = require("../../controllers/Supervisor/getExpenseDetail");
const expenseDetail = require("../../controllers/Supervisor/expenseDetail");
const progressReport = require("../../controllers/Supervisor/progressReport");
const getProgressReport = require("../../controllers/Supervisor/getProgressReport");

// get detail
router.get("/supervisor/detail",verification,supervisorDetail)


// router to get allorted site
router.get("/allortedSite",verification,allortedSite)

// router for expense approval
router.post("/expense/detail",verification,upload.single('image'),expenseDetail)

// router to get expense details
router.get("/getExpense/details/:_id",verification,getExpenseDetail)


// router for progress report
router.post("/report/progress/:id",verification,upload.array("photos"),progressReport)

// getting progress report details
router.get("/getProgress/report/:_id",verification,getProgressReport)

module.exports = router;