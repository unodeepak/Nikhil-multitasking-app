const express = require("express");
const app = express();
const routes = require('./server/routes');
const connect = require("./server/database/mongoose");

app.use(express.json());
app.use('/api', routes);

const PORT = 5001;


app.listen(PORT, () => {
  connect();
  console.log(`Server is Running on PORT ${PORT}`);
});
