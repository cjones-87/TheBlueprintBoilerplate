const { db } = require('./db');
const app = require('./app');
require('dotenv').config();
const port = process.env.PORT || 1987;

const init = async () => {
  try {
    await db.sync().then(() => {
      console.log('Knock, knock');
      console.log("Who's there?");
      console.log(`Your server, listening on port ${port}`);
      app.listen(port);
    });
  } catch (error) {
    console.log('There was an error initializing the app');
  }
};

init();
