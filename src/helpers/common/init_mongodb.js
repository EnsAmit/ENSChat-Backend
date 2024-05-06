const mongoose = require("mongoose");
require("dotenv").config();
const mongoURI = process.env.mongodbURI;

const connectToMongo = () => {
  try {
    mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
};

export { connectToMongo };

