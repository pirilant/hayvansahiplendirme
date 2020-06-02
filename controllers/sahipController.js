const async = require("async")
const Hayvan = require("../models/hayvan")
const Hayvansever = require("../models/hayvansever")
const Sahip = require("../models/sahip")

exports.sahiplendir = async(req,res,next)=>{
	let hs = await Hayvansever.findById({"_id":req.body.hs})
	let hy = await Hayvan.findById({"_id":req.body.hy})

	if (hs.gender == "Erkek") {
		if (hs.limit == 0) {
			new Sahip({
				hid:hy._id,
				had:hy.adi,
				hsid:hs._id,
				hsad:hs.firstname +" "+ hs.lastname
			}).save((err,data)=>{
				if (err) {
					console.log("Hayvan ekleme hatası : "+err)
				}else{
					hs.update({
						limit: hs.limit+1
					},(err,data)=>{
						if (err) {
							console.log('Limit artırma hatası : '+ err)
						}else{
							console.log('başarılı')
						}
					})

					hy.update({
						durum:1
					},(err,data)=>{
						if (err) {
							console.log(err)
						}else{
							console.log("Başarılı")
						}
					})

					res.redirect("/")
				}
			})
		}else{
			res.redirect("/limitdisi")
		}
	}

	if (hs.gender == "Kadın") {
		if (hs.limit !== 3) {
			new Sahip({
				hid:hy._id,
				had:hy.adi,
				hsid:hs._id,
				hsad:hs.firstname +" "+ hs.lastname
			}).save((err,data)=>{
				if (err) {
					console.log("Hayvan ekleme hatası : "+err)
				}else{
					hs.update({
						limit: hs.limit+1
					},(err,data)=>{
						if (err) {
							console.log('Limit artırma hatası : '+ err)
						}else{
							console.log('başarılı')
						}
					})

					hy.update({
						durum:1
					},(err,data)=>{
						if (err) {
							console.log(err)
						}else{
							console.log("Başarılı")
						}
					})

					res.redirect("/")
				}
			})
		}else{
			res.redirect("/limitdisi")
		}
	}
}

exports.limitdisi = async(req,res,next)=>{
	res.render("limitdisi")
}










