module.exports = app => {
    const transactions = require("../controllers/transaction.controller.js");
  
    var router = require("express").Router();
  
    // Retrieve a single Tutorial with id
    router.get("/transactions", transactions.findAllTransactions);

    app.use('/api', router);
  };