module.exports = app => {
    const users = require("../controllers/user-functions.controller.js");
  
    var router = require("express").Router();
  
    // Retrieve a single Tutorial with id
    router.get("/:id", users.findOne);
  
    // Delete a Tutorial with id
    router.delete("/:id", users.delete);
  

    app.use('/api/user', router);
  };