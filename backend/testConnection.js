const mongoose = require("mongoose");

const MONGO_URI =
  "mongodb+srv://nitin:9736943790@cluster0.cwswhem.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"; // Replace with your actual URI

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true })
  .then(() => {
    console.log("Successfully connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
  });
