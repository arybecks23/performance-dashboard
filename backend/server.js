const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 5500;
const cors = require("cors");
const usersRoute = require("./routes/users");
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
const corsWhitelist = ["http://localhost:5173"];
app.use(
  cors({
    origin: corsWhitelist,
  })
);

app.use("/users", usersRoute);

app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});
