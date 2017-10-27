const Report = require('../models/reports');
require('dotenv').config()
const jwt = require('jsonwebtoken')

class ReportController{
  static getAll(req,res){
    Report.find({},(err,result)=>{
      res.json(200,{msg:'post list', reports:result})
    }).catch(err=>{
      res.json(500,{msg:"err", err:err})
    })
  }

  static addNew(req,res){
    let decode=jwt.verify(req.body.token, process.env.APPSECRET)
    let insert={
      fbID:decode.id,
      name:decode.name,
      email:decode.email,
      imagepostUrl:req.file.cloudStoragePublicUrl ,
      imageuserUrl:decode.imageUrl,
      postedAt: new Date(),
      headline:req.body.headline,
      detail:req.body.detail

    }
    Report.create(insert).then((result)=>{
      res.json(200,{msg:'new post', reports:result})
    }).catch(err=>{
      res.json(500,{msg:"err", err:err})
    })
  }

  static editData(req,res){

    let condition={
      _id : req.body.id
    }
    let newData={
        $set:{
          headline:req.body.headline,
          detail:req.body.detail
        }
      }
      Report.update(condition,newData).then(result=>{
        res.json(200,{msg:"edited id", reports:result})
      }).catch(err=>{
        res.json(500,{msg:"err", err:err})
      })
      }

  static upVote(req,res){
    let decode=jwt.verify(req.body.token, process.env.APPSECRET)

    Report.findByIdAndUpdate(
    req.params.reportid,
    {$push: {"votes": {voterid:decode.id,votername:decode.name,votermail:decode.email,voterimageUrl:decode.imageUrl,voteAt:new Date()}}},
    {safe: true, upsert: true}
  ).then(result=>{
    res.json(200,{msg:"voted id", reports:result})

  }).catch(err=>{
    res.json(500,{msg:"err", err:err})
  })
  }


  static downVote(req,res){
    let decode=jwt.verify(req.body.token, process.env.APPSECRET)

    Report.update({ _id: req.params.reportid }, { "$pull": { "votes": { "voterid": decode.id } }}, { safe: true, multi:true }, function(err, obj) {
      res.json(200,{msg:"downvoted", reports:obj})
    });
  }


  static deleteData(req,res){
    let condition={
      _id : req.params.reportid
    }
    Report.findOneAndRemove(condition).then(result=>{
      res.json(200,{msg:"deleted id", reports:result})
      }).catch(err=>{
        res.json(500,{msg:"err", err:err})
      })
  }

}

module.exports = ReportController;
