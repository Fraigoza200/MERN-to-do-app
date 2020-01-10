const { ToDo } = require('../model')

module.exports = app => {

  //Get all to do items

  app.get('/', (req, res) => {
    ToDo.find()
    .then(list => res.json(list))
    .catch(e => console.log(e))
  })

  //Create one item
  app.post('/actions', (req, res) => {
    ToDo.create(req.body)
    .then(() => res.sendStatus(200))
    .catch(e => console.log(e))
  })
  

  //Update complete one item
  app.put('/actions/:id', (req, res) => {
    ToDo.updateOne({ _id: req.params.id }, req.body)
    .then(() => res.sendStatus(200))
    .catch(e => console.log(e))
  })

  //delete one item
  app.delete('/actions/:id', (req, res) => {
    ToDo.deleteOne({ _id: req.params.id})
    .then(() => res.sendStatus(200))
    .catch(e => console.log(e))
  })
}