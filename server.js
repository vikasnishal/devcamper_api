const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const colors = require("colors");
const connectDB = require("./config/db");

dotenv.config({ path: "./config/config.env" });
// import routers
const bootcamps = require("./routes/bootcamps");

//connect DC

connectDB();

const app = express();
//Body parser
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello from express");
});
if ((process.env.NODE_ENV = "development")) {
  app.use(morgan("dev"));
}
app.use("/api/v1/bootcamps", bootcamps);

const PORT = process.env.PORT || 5000;
const server = app.listen(
  PORT,
  console.log(
    `server running in ${process.env.NODE_ENV} at ${process.env.PORT}`.yellow
      .bold
  )
);
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red.bold);
  server.close(() => {
    process.exit(1);
  });
});
