const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://saitharun:GJPYB0f94tRD47aW@nodejscluster.uuocs.mongodb.net/DevTinder"
  );
};

module.exports = connectDB;