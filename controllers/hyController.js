const Hayvan = require("../models/hayvan")
const async = require("async")

exports.list = async(req,res,next) => {
	let hayvan = await Hayvan.find({})
	res.render("hayvan",{
		hayvan:hayvan
	})
}

exports.insert = async(req,res,next) => {
	new Hayvan(req.body).save((err,data)=>{
		if (err) {
			console.log(err);
		}else{
			res.redirect("/hayvan")
		}
	})
}

exports.delete = async(req,res,next) => {
	let hayvan = await Hayvan.findById({"_id":req.params.id})
	hayvan.remove((err,data)=>{
		if (err) {
			console.log(err)
		}else{
			res.redirect("/hayvan")
		}
	})
}