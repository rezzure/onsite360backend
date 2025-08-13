const Expense = require("../../Schema/expenses.schema/expense.model");

const expenseDetail = async(req,res)=>{
    
  console.log(req.body);
//   console.log(req.file)
 const{supervisor_id,supervisorName,supervisorEmail,expenseType,amount,description,date,site}=req.body
 let expenseData = {
    expenseType:expenseType,
    siteName:site,
    amount:amount,
    description:description,
    date:date,
    supervisorEmail:supervisorEmail,
    status:"pending",
    image:req.file.filename,
    supervisorName:supervisorName,
    supervisor_id:supervisor_id
 }
    try {

        let data = await Expense.create(expenseData)
        return res.status(200).send({
            success:true,
            message:"data submitted successfully",
            data:data
        })
    }
    catch (err) {
        res.status(500).send({
            success: false,
            message: "internal server error" + err
        })
    }
}

module.exports=expenseDetail