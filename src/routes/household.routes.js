module.exports = app => {
    const households = require("../controllers/household.controller.js");
  
    var router = require("express").Router();
  
    // Retrieve a single Tutorial with id
    router.get("/", households.findAllHouseHolds);

    app.use('/api/households', router);
  };