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


/*******************************
 * Hello World (POST) method *
 ******************************/

app.post('/ecommerce', function(req, res) {
    var event = req.apiGateway.event;
    var context = req.apiGateway.context;
    
    
    res.json(req.apiGateway.event);
});

/*******************************
 * Search Method (POST)  *
 ******************************/

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

/***********************************
 * Fetch Cart by Product ID POST *
 **********************************/

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

/*******************************
 * Fetch Cart by UserSub POST *
 ******************************/

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

/*******************************
 * Add Quantity Method POST *
 ******************************/

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

/*******************************
 * Delete Cart Item POST *
 ******************************/

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

/*******************************
 * CheckOut addAddress POST *
 ******************************/

app.post('/ecommerce/checkOut/addAddress', function(req, res) {
  var docClient = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});
  
    const { id, country, name, phoneNumber, address, city, userSub } = req.body;
  
    if(!id || !country || !name || !phoneNumber || !address || !city || !userSub){
      res.send("Input Error")
    }else{
      var params = {
        TableName: 'Locations-a2s2mavb3ng2pkzyqks67bsbxm-dev',
        Item: {
          id: id,
          country: country,
          name: name,
          phoneNumber: phoneNumber,
          address: address,
          userSub: userSub,
          city: city,
        },
      };
      
      docClient.put(params, (err, data) => {
        if(err){
          res.send(err)
        }else{
          res.send(req.body);
        }
      })
    }
});

/*******************************
 * Fetch Locations by UserSub POST *
 ******************************/

app.post('/ecommerce/fetchLocations/byUser', function(req, res) {
    var docClient = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});
    
    var params = {
      TableName: 'Locations-a2s2mavb3ng2pkzyqks67bsbxm-dev',
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

/*******************************
 * Delete Location Item POST *
 ******************************/

app.post('/ecommerce/deleteLocationItem', function(req, res) {
  var docClient = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});
    
    const {id} = req.body;
    
    var params = {
      TableName: 'Locations-a2s2mavb3ng2pkzyqks67bsbxm-dev',
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

/*******************************
 * Server Initialized *
 ******************************/

app.listen(3000, function() {
    console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app

