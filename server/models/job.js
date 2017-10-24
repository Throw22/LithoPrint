const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JobSchema = mongoose.Schema({
  workOrder: {
    type: String,
    required: true
  },
  customer: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  salesPerson: {
    type: String,
    required: true
  },
  customerServiceRep: {
    type: String,
    required: true
  },
  press: {
    type: String,
    required: true
  },
  letterPress: {
    type: String,
    required: true
  },
  vendor: {
    type: String
  },
  bindery: {
    type: String
  },
  mailing: {
    type: String
  },
  dueDate: {
    type: Date,
    required: true
  },
  deliveryMethod: {
    type: String
  },
  createdAt: { type: Date, default: Date.now }
});

const Job = mongoose.model('Job', JobSchema);

module.exports = Job;
