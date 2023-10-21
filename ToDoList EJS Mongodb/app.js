const express = require("express")
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const _ = require('lodash');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'))

app.set('view engine', 'ejs');

mongoose.connect("mongodb://127.0.0.1:27017/todolistDB", { useNewUrlParser: true });

const itemSchema = {
    name: String
};

const Item = mongoose.model("Item", itemSchema);

const item1 = new Item({
    name: "Welcome to your todolist!",
});

const item2 = new Item({
    name: "Hit the + button to add an item",
});

const item3 = new Item({
    name: "Click the checkbox to delete an item",
});

const defaultItems = [item1, item2, item3];

const listSchema = {
    name: String,
    items: [itemSchema]
}

const List = mongoose.model("List", listSchema);


app.get('/', function (req, res) {
    let day = '';
    let today = new Date();

    let options = {
        weekday: 'short',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    day = today.toLocaleDateString('en-US', options); //hi-IN

    Item.find({}).then(function (foundItems) {
        if (foundItems.length === 0) {
            Item.insertMany(defaultItems)
                .then(function () {
                    console.log("Successfully inserted default");
                })
                .catch(function (err) {
                    console.log(err);
                });


            res.redirect("/");
        } else {
            res.render("lists", { listTitle: day, newListItems: foundItems });
        }
    })
        .catch(function (err) {
            console.log(err);
        });

});

app.get("/:customListName", function (req, res) {
    const customListName = _.capitalize(req.params.customListName);

    List.findOne({ name: customListName })
        .then(function (foundList) {
            if (!foundList) {
                const list = new List({
                    name: customListName,
                    items: defaultItems
                });

                list.save();
                res.redirect('/' + customListName)

            } else {

                res.render('lists', { listTitle: customListName, newListItems: foundList.items })
            }

        })
        .catch(function (err) {

        })


})



app.post('/', function (req, res) {
    var itemName = req.body.newItem;
    const listName = req.body.list;

    const item = new Item({
        name: itemName
    });

    if (listName.indexOf(',') != -1) {
        item.save();
        res.redirect('/');
    } else {
        List.findOne({ name: listName })
            .then(function (foundList) {
                foundList.items.push(item);
                foundList.save();
                res.redirect('/' + listName);
            })
            .catch(function (err) {
                console.log(err);
            })
    }



});


app.post('/delete', function (req, res) {
    const checkedItemId = req.body.checkbox;
    const listName = req.body.listName;

    if (listName.indexOf(',') != -1) {
        Item.findByIdAndRemove(checkedItemId).
            then(function () {
                console.log("Sucessfully deleted")
                res.redirect('/');
            })
            .catch(function (err) {
                console.log(err)
            })

    }else{
        List.findOneAndUpdate({name: listName}, {$pull: {items: {_id : checkedItemId}}})
        .then(function(){
            res.redirect('/' + listName)
        })
        .catch(function(err){
            console.log(err);
        })
    }



})




app.get('/about', function (req, res) {
    res.render('about');
})




app.listen(5000, function () {
    console.log("Server started at port 5000");
})