const app = require('./app');
require('./src/database');

const port = 3001;
app.listen(port, () => {
  console.log();
  console.log(`Escutando na porta ${port}`);
  console.log('http://127.0.0.1:3001/');
});
