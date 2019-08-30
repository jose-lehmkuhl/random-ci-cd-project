const Express = require('express')
const app = new Express()

const port = 8000

app.get('/', (req, res) => {
  res.status(200).json({ message: 'App is working' })
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
