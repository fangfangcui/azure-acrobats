module.exports = {
    HOST: "agileacrobats2021pgdbserver.postgres.database.azure.com",
    USER: "agileacrobats",
    PASSWORD: "Summer2021",
    DB: "agileacrobats2021db",
    schema: "kroger",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };