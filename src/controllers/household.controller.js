const db = require("../models");
const Household = db.households;



exports.findAllHouseHolds = (req, res) => {
  
    Household.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving households."
        });
      });
  };