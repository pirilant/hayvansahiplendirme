const Hayvansever = require("../models/hayvansever")
const async = require("async")

exports.list = async(req,res,next) => {
	let hayvansever = await Hayvansever.find({ })

	res.render("hayvansever",{
		hayvansever:hayvansever
	})
}


exports.insert = async(req,res,next) => {
	console.log(req.body);
	new Hayvansever(req.body).save((err,data)=>{
		if (err) {
			console.log(err)
		}else{
			res.redirect("/hayvansever")
		}
	})	
}

exports.delete = async(req,res,next) => {
	let hayvansever = await Hayvansever.findById({"_id":req.params.id})

	hayvansever.remove((err,data)=>{
		if (err) {
			console.log(err)
		}else{
			res.redirect("/hayvansever")
		}
	})
}