require("dotenv").config();
const mongoose = require("mongoose");

const dbConnect = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("DB Connection Successful"))
    .catch((error) => {
      console.log("Issue In DB connections");
      console.error(error.message);
      process.exit(1);
    });
};

module.exports = dbConnect;