const express = require("express");
const app = express();
const indexRouter = require("./routers/indexRouter");

app.use(express.json());
app.use("/api", indexRouter);

app.listen(5000, () => {
  console.log("server started on port 5000");
});
