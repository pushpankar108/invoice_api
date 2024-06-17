const mongoose = require("mongoose");

const uri = "mongodb://localhost:27017/";
//"mongodb+srv://abhi07:abhiyadav07@cluster0.vn1ptrs.mongodb.net/?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    await mongoose.connect(uri, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected`);
  } catch (error) {
    console.log("Mongo Error: ", error);
    console.error(error);
  }
};

module.exports = connectDB;
