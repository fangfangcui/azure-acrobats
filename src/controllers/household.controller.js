const { Sequelize } = require("../models");
const db = require("../models");
const Household = db.households;
const Op = db.Sequelize.Op;


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


  exports.findHouseholdsAndTransactions = (req, res) => {
      Household.findAll({
          include: {
              model: Transaction,
              where: {
                  hdhs_num: Sequelize.col('households.hshd_num')
              }
          }
      }).then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving households."
        });
      });
  }