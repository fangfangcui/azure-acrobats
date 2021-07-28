const db = require("../models");
const sequelize = db.sequelize;


exports.findAllTransactions = (req, res) => {
    sequelize.query(`SELECT SUM(t."spend"), CONCAT(EXTRACT(MONTH FROM t."purchase_date"), '-20', EXTRACT(YEAR FROM t."purchase_date")) as year FROM "kroger"."trans_actions" as t GROUP BY EXTRACT(YEAR FROM t."purchase_date"), EXTRACT(MONTH FROM t."purchase_date")`).then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving households."
      });
    });
}

exports.findSalesOfHouseholdProds = (req, res) => {
  sequelize.query(`SELECT SUM(t."spend"), CONCAT(EXTRACT(MONTH FROM t."purchase_date"), '-20', EXTRACT(YEAR FROM t."purchase_date")) as year FROM "kroger"."trans_actions" as t GROUP BY EXTRACT(YEAR FROM t."purchase_date"), EXTRACT(MONTH FROM t."purchase_date")`).then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving households."
    });
  });
}