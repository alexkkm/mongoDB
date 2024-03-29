// To connect with your mongoDB database
const mongoose = require('mongoose');
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

// Schema for users of app
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

// Creating a model "User" based on the schema "UserSchema"
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

// add new user
app.post("/addNewUser", async (request, response) => {
    try {
        const user = new User(request.body);
        let result = await user.save();
        result = result.toObject();
        if (result) {
            delete result.password; // dont know if it is useful
            response.send(request.body);
            console.log(result);
        } else {
            console.log("User already register");
        }

    } catch (e) {
        console.log("Error: " + e);
        response.send("Error: " + e);
    }
});

//Get all user
app.get('/getAllUsers', (request, response) => {
    User.find()
        .then(data => {
            console.log("Successfully fetch from DB:");
            console.log(data)
            response.send(data)
        })
        .catch(error => response.send(error))
});

// Search user by 'name' query
app.get('/searchUser/:name', (request, response) => {
    User.find({ name: request.params.name })
        .then(data => {
            console.log("Successfully fetch from DB:");
            console.log(data)
            response.send(data)
        })
        .catch(error => response.send(error))
})

// Delete user by 'name' query
app.delete('/deleteUser/:name', (request, response) => {
    User.findOneAndDelete({ name: request.params.name })
        .then(data => {
            console.log("Successfully delete " + request.params.name + " from DB:");
            console.log(data)
            response.send(data)
        })
        .catch(error => response.send(error))
})

//TODO
// Update user that searched by 'name' query
app.patch('/updateUser/:name', (request, response) => {
    User.findOneAndUpdate({ name: request.params.name }, request.body)
        .then(data => {
            console.log("Successfully update " + request.params.name + " from DB:");
            console.log(data)
            response.send(data)
        })
        .catch(error => response.send(error))
})

app.listen(5000);