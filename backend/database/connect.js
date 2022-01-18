const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://threeidiots:amitomkaranshika@cluster0.t4nxv.mongodb.net/ourTodoDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("database connected!");
  })
  .catch((err) => {
    console.log(err);
  });
