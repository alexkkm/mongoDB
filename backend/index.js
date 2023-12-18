
const mongoose = require('mongoose');

// To connect with mongoDB database with dbName: "Test"
try {
    mongoose.connect('mongodb+srv://alexkong0222:alexkong0222@cluster0.qpf52os.mongodb.net/?retryWrites=true&w=majority', {
        dbName: 'Test',
        //useNewUrlParser: true,
        //useUnifiedTopology: true
    })
    console.log("Successfully connect to the mongoDB database.\n")
}
catch (error) {
    console.log(error)
}

// Schema for User
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

// create the model 'users', with applying the schema 'UserSchema' into it
const User = mongoose.model('users', UserSchema);
User.createIndexes();

// For backend and express
const express = require('express');
const app = express();
const cors = require("cors");
console.log("App listen at port 5000");
app.use(express.json());
app.use(cors());
app.get("/", (req, resp) => {

    resp.send("App is Working");
    // You can check backend is working or not by 
    // entering http://loacalhost:5000

    // If you see App is working means
    // backend working properly
});

app.post("/register", async (req, resp) => {
    try {
        const user = new User(req.body);
        let result = await user.save();
        result = result.toObject();
        if (result) {
            delete result.password;
            resp.send(req.body);
            console.log(result);
        } else {
            console.log("User already register");
        }

    } catch (e) {
        resp.send("Something Went Wrong");
    }
});

app.get("/search", async (req, res) => {
    try {
        const result = await User.find({ $text: { $search: { name: req.query } } })
        res.send(result);
    } catch (err) {
        res.send("Something went wrong")
    }
})


app.listen(5000);