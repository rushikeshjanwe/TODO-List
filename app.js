const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
// console.log(date());
const app = express();

let items = [];
let workItems = [];
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));
app.get('/', function(req, res) {
  // res.write("<h1>practicing javascript</h1>");
  // res.write("<p>second message</p>");
  // res.send();

  let day = date.getDay();
  res.render("list", {
    listTitle: day,
    itemList: items
  });
});

app.get("/work", function(req, res) {
  res.render("list", {
    listTitle: "Work List",
    itemList: workItems
  })
})

// app.post('/work', function(req, res) {
//   let item = req.body.item1;
//
// });

app.post('/', function(req, res) {
  let item = req.body.item1;
  let listTitle = req.body.button;
  if (listTitle === "Work List") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

app.listen(process.env.PORT || 3000, function() {
  console.log("Server started on port 3000");
});
