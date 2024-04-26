const express = require("express");
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");
const bodyParser = require("body-parser");
const cors = require('cors')

const userRoute = require("./routes/user");
const cardRoute = require("./routes/ccard");
const transRoute = require("./routes/trans");

const app = express();
dotenv.config({ path: "./config.env" });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.use(cors());
 
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET, POST, PATCH, PUT, DELETE, OPTIONS"
//   );
//   next();
// });

app.use("/api/v1/user", userRoute);
app.use("/api/v1/card", cardRoute);
app.use("/api/v1/trans", transRoute);

// CONNECTION TO DB
const database = process.env.DATABASE_LOCAL;
mongoose
  .connect(database)
  .then(() => {
    console.log("DB Connected...!");
  })
  .catch((err) => console.log(err));

//START SERVER
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

app.use("/", (req, res) => {
  return res.end("hi");
});

module.exports = app;
