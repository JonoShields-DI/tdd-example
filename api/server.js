const {makeApp} = require('./app')
const repository = require('./repository')

const app = makeApp(repository)

app.listen(5001, () => {
    console.log(`Example app listening at http://localhost:${5001}`);
  });