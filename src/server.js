const express = require("express");
const app = express();

app.use(express.json());

const customerRoute = require("./routes/customerRoute");
app.use("/", customerRoute);

// PORT
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server chạy tại http://localhost:${PORT}`);
});
