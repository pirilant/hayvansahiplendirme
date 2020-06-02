const mongoose = require("mongoose")
const Schema = mongoose.Schema

const hayvanseverSchema = new Schema({
	firstname:String,
	lastname:String,
	email:String,
	gender:String,
	limit:{
		type:Number,
		default:0
	},
	createdAt:{
		type:Date,
		default:Date.now,
	}
})

module.exports = mongoose.model("Hayvansever", hayvanseverSchema)