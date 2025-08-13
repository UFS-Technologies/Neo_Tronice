 var express = require('express');
 var router = express.Router();
 var followup=require('../models/followup');
router.post('/Save_followup/', function (req, res, next) {
  try {
    console.log("req.body",req.body);
    followup.Save_followup(req.body.FollowUp, req.body.Customer_Id, req.body.customFields || [], function (err, rows) {
      if (err) {
        console.log('err: ', err);
        res.json(err);
      }
      else {
        res.json(rows[0][0]);
      }
    });
  }
  catch (e) {
  }
  finally {
  }
});
 router.get('/Search_followup/',function(req,res,next)
 { 
 try 
 {
followup.Search_followup(req.query.followup_Name, function (err, rows) 
 {
  if (err) 
  {
  res.json(err);
  }
  else 
  {
    res.json(rows);
  }
  });
  }
 catch (e) 
 {
 }
 finally 
 {
 }
  });
 router.get('/Get_followup/:followup_Id_?',function(req,res,next)
 { 
 try 
 {
followup.Get_followup(req.params.followup_Id_, function (err, rows) 
 {
  if (err) 
  {
  res.json(err);
  }
  else 
  {
    res.json(rows);
  }
  });
  }
 catch (e) 
 {
 }
 finally 
 {
 }
  });
 router.get('/Delete_followup/:followup_Id_?',function(req,res,next)
 { 
 try 
 {
followup.Delete_followup(req.params.followup_Id_, function (err, rows) 
 {
  if (err) 
  {
  res.json(err);
  }
  else 
  {
    res.json(rows);
  }
  });
  }
 catch (e) 
 {
 }
 finally 
 {
 }
  });

router.get('/FollowUp_Summary/', function (req, res, next) {
  try {
    followup.FollowUp_Summary(req.query.User, function (err, rows) {
      if (err) {
        res.json(err);
      }
      else {
        res.json(rows[0]);
      }
    });
  }
  catch (e) {
  }
  finally {
  }
});

router.get('/Dashboard_FollowUp_Summary/', function (req, res, next) {
  try {
    followup.Dashboard_FollowUp_Summary(req.query.User, function (err, rows) {
      if (err) {
        res.json(err);
      }
      else {
        res.json(rows[0]);
      }
    });
  }
  catch (e) {
  }
  finally {
  }
});

router.get('/Pending_FollowUp/', function (req, res, next) {
  try {
    followup.Pending_FollowUp(req.query.By_User, function (err, rows) {
      if (err) {
        res.json(err);
      }
      else {
        res.json(rows[0]);
      }
    });
  }
  catch (e) {
  }
  finally {
  }
});

  module.exports = router;

