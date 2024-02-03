import mongoose, { Schema } from "mongoose";

const interestSchema : Schema = new Schema({
    principle_date: Date,
    principle_amount: Number,
    monthly_interest: Number,
    interest_date: Date,
    percentage: String

},{
    timestamps: true
})

const InterestModel = mongoose.models.Interest || mongoose.model('Interest', interestSchema);

export default InterestModel;