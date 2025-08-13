const mongoose = require('mongoose');
const {Schema} = mongoose;

const expenseSchema = new Schema({
  siteName:{
    type:String,
    required:true
  },
  supervisor_id: {
    type: Schema.Types.ObjectId,
    ref: 'Supervisor',
    required: true
  },
  supervisorEmail:{
    type:String,
    required:true
  },
  supervisorName: {
    type: String,
    required: true
  },
  expenseType: {
    type: String,
    required: true,
    // enum: ['travel', 'materials', 'food', 'lodging', 'equipment', 'other'] 
  },
  amount: {
    type: Number,
    required: true,
    min: 0
  },
  date: {
    type: Date,
    required: true,
    default: Date.now
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: false 
  },
  status: {
    type: String,
    // required: true,
    // enum: ['pending', 'approved', 'rejected'],
    default: 'pending'
  },
  adminComment: {
    type: String,
    required: false
  }
}, {
  timestamps: true 
});

const Expense = mongoose.model("Expense",expenseSchema)

module.exports = Expense;