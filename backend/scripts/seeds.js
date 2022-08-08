//TODO: seeds script should come here, so we'll be able to put some data in our local env
var mongoose=require("mongoose")
require("../models/User");
require("../models/Item");
require("../models/Comment");

var Item = mongoose.model("Item");
var Comment = mongoose.model("Comment");
var User = mongoose.model("User");

let UsersDemodata = [];
let productDemodata = [];
let commentDemodata = [];

const SeedData = () => {
  for (let i = 1; i <= 100; i++) {
    productDemodata = [
      ...productDemodata,
      {
        slug:`slug${i}`,
        title: `title${i}`,
        description: `desc${i}`,
        image: `https://res.cloudinary.com/ness90210/image/upload/v1658051347/Anythink_search/Design/no-items-found_nyyhsa.png`,
      },
    ];
    UserDemodata=[
        ...UsersDemodata,
        {
            username:`name${i}`,
            email:`email${i}@gmail.com`
        }
    ]
    commentDemodata=[
        ...commentDemodata,
        {
           body:`comment${i}` 
        }
    ]
  }

  Item.insertMany(productDemodata,{ordered:false})
  .then(()=>console.log("data seeded for products")).catch((err)=>console.log(err));
  User.insertMany(UsersDemodata,{ordered:false})
  .then(()=>console.log("data seeded for Users")).catch((err)=>console.log(err));
  Comment .insertMany(commentDemodata,{ordered:false})
  .then(()=>console.log("data seeded for comments")).catch((err)=>console.log(err));
};


SeedData();