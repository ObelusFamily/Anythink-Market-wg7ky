//TODO: seeds script should come here, so we'll be able to put some data in our local env
//TODO: seeds script should come here, so we'll be able to put some data in our local
var mongoose = require("mongoose");
require("dotenv").config();
require("../models/User");
require("../models/Item");
require("../models/Comment");

var Item = mongoose.model("Item");
var Comment = mongoose.model("Comment");
var User = mongoose.model("User");

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log())
  .catch((err) => console.log(err));

const SeedData = async () => {
  try {
    await User.deleteMany();
    await Item.deleteMany();
    await Comment.deleteMany();

    for (let i = 1; i <= 100; i++) {
      const user = new User();
      user.username = `username${i}`;
      user.email = `email${i}@g.com`;
      user.setPassword(`password${i}`);
      await user.save();
     
      const item= new Item();
      item.title=`title${i}`;
      item.description=`desc${i}`
      await item.save();

      const comment=new Comment();
      comment.body=`comment${i}`
      await comment.save();

    }

    console.log("success");
    mongoose.disconnect();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

SeedData();
