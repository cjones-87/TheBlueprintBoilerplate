const app = require('./app');

const port = process.env.port || 3000;

app.listen(port, () => {
  console.log('Knock, knock');
  console.log("Who's there?");
  console.log(`Your server, listening on port ${port}`);
});
