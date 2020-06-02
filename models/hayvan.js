const mongoose = require("mongoose")
const Schema = mongoose.Schema

const hayvanSchema = new Schema({
	adi:String,
	yas:Number,
	cinsiyet:String,
	durum:{
		type:Number,
		default:0
	} ,
	aciklama:String,
	createdAt:{
		type:Date,
		default:Date.now,
	}
})

module.exports = mongoose.model("Hayvan",hayvanSchema)

