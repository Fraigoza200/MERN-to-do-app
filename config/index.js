const mongoose = require('mongoose')

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/toDoDb"

module.exports = 
mongoose.connect(MONGODB_URI, {
  useCreateIndex: true,
  useFindAndModify: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
})