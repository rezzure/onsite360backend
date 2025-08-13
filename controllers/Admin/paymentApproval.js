const Client = require("../../Schema/client.schema/client.model");
const Payments = require("../../Schema/recivedPayments.Schema/payment.model");

const paymentApproval = async (req, res) => {
  const { paymentId, status } = req.body;
  try {
    const paymentdetail = await Payments.findById({ _id: paymentId });
    if (!paymentdetail) {
      return res.send({
        success: false,
        message: "payment not found",
      });
    }
    const client = await Client.findById({ _id: paymentdetail.clientId });
    if (!client) {
      return res.send({
        success: true,
        message: "client not found",
      });
    }
    paymentdetail.status = status;
    await paymentdetail.save();
    if (status === "approved") {
      client.total_payment = client.total_payment + paymentdetail.amount;
      client.balance_amount = client.total_payment - client.total_expense;
      await client.save();
    }
    return res.status(200).send({
      success: true,
      message: "payment status updated",
      data: paymentdetail,
    });
  } catch (error) {
    return res.status(501).send({
      success: true,
      message: "error found" + error.message,
    });
  }
}

module.exports=paymentApproval