const mongoose = require("mongoose")
const Schema = mongoose.Schema

const sahipSchema = new Schema({
	hid:String,
	hsid:String,
	had:String,
	hsad:String,
	createdAt:{
		type:Date,
		default:Date.now,
	}

})

module.exports = mongoose.model("sahip", sahipSchema) 