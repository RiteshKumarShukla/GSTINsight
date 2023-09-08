const mongoose = require("mongoose");

const dbURI = "mongodb+srv://riteshshukla:riteshshukla@cluster0.fo6fefn.mongodb.net/gstin-db";

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB", err));

module.exports = mongoose;
