const express = require('express')
const bodyParser = require('body-parser')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
var AWS = require('aws-sdk')
AWS.config.update({region: 'eu-west-2'})

// declare a new express app
const app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});


/**********************
 * get method *
 **********************/

app.get('/ecommerce', function(req, res) {
    res.send("Hello from Lambda!");
});

/****************************
* post method *
****************************/

app.post('/ecommerce/search', function(req, res) {// Add your code here
    var docClient = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});
    
    var params = {
      TableName: 'Product-a2s2mavb3ng2pkzyqks67bsbxm-dev',
      FilterExpression : 'contains(title, :searchValue) or contains(title, :searchValue_UC) or contains(title, :searchValue_LC) ' +
      'or contains(tags, :searchValue) or contains(tags, :searchValue_UC) or contains(tags, :searchValue_LC)',
      ExpressionAttributeValues : {
        ':searchValue' : req.body.searchValue,
        ':searchValue_UC' : req.body.searchValue.toUpperCase(),  
        ':searchValue_LC' : req.body.searchValue.toLowerCase(),
      },
    };
    
    docClient.scan(params, function(err, data) {
    if (err) {
      console.warn("Error", err);
      res.json({error: err});
    } else {
      console.warn("Success", data.Item);
      res.json({body:{data}});
    }
  });
});

app.post('/ecommerce/fetchCart', function(req, res) {// Add your code here
    var docClient = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});
    
    var params = {
      TableName: 'Product-a2s2mavb3ng2pkzyqks67bsbxm-dev',
      FilterExpression : 'productID = :productID',
      ExpressionAttributeValues : {
        ':productID' : req.body.productID
      }
    };
    
    docClient.scan(params, function(err, data) {
    if (err) {
      console.warn("Error", err);
      res.json({error: err});
    } else {
      console.warn("Success", data.Item);
      res.json({body:{data}});
    }
  });
});

app.post('/ecommerce/fetchCart/byUser', function(req, res) {
    var docClient = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});
    
    var params = {
      TableName: 'CartProduct-a2s2mavb3ng2pkzyqks67bsbxm-dev',
      FilterExpression : 'userSub = :userSub',
      ExpressionAttributeValues : {
        ':userSub' : req.body.userSub
      }
    };
    
    docClient.scan(params, function(err, data) {
    if (err) {
      console.warn("Error", err);
      res.json({error: err});
    } else {
      console.warn("Success", data.Item);
      res.json({body:{data}});
    }
  });
});

app.post('/ecommerce/fetchCart/addQuantity', function(req, res) {
    var docClient = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});
    
    const {id, quantity} = req.body;
    
    var params = {
      TableName: 'CartProduct-a2s2mavb3ng2pkzyqks67bsbxm-dev',
      Key: { id },
      UpdateExpression: `SET #quantity = :new`,
      ExpressionAttributeNames: {
        '#quantity': 'quantity'
      },
      ExpressionAttributeValues: {
        ':new': quantity
      }
    };
    
    docClient.update(params, (err, data) => {
      if(err){
        res.send(err)
      }else{
        res.send({body:{id}})
      }
    })
});

app.post('/ecommerce/deleteCartItem', function(req, res) {
  var docClient = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});
    
    const {id} = req.body;
    
    var params = {
      TableName: 'CartProduct-a2s2mavb3ng2pkzyqks67bsbxm-dev',
      Key: { 'id': id },
    };
    
    docClient.delete(params, (err, data) => {
      if(err){
        res.send(err)
      }else{
        res.send({body:{id}})
      }
    })
});

app.listen(3000, function() {
    console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app

