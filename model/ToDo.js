module.exports = (model, Schema) => {

  const ToDo = new Schema({
    action: { type: String, required: true },
    isDone: { type: Boolean, required: true, default: false }
  })
  return model('ToDo', ToDo)
}