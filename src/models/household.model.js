module.exports = (sequelize, Sequelize) => {
    const Household = sequelize.define("households", {
      hshd_num: {
        type: Sequelize.STRING,
        primaryKey: true,
        unique: true
      },
      loyalty_flag: {
        type: Sequelize.STRING
      },
      age_range: {
        type: Sequelize.STRING
      },
      marital_status: {
        type: Sequelize.STRING
      },
      income_range: {
        type: Sequelize.STRING
      },
      homeowner_desc: {
        type: Sequelize.STRING
      },
      hshd_composition: {
        type: Sequelize.STRING
      },
      hh_size: {
        type: Sequelize.STRING
      },
      children: {
        type: Sequelize.STRING
      },
    }, {
        timestamps: false
    });
  
    return Household;
  };