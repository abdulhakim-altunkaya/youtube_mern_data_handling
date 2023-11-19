const express = require("express");
const path = require("path");

const app = express();
//frontend sends data in JSON format. And server will need to convert it to JS object by using
//this line below. If you want to nest objects inside objects, then use "extended: true". In other
//cases use "extended: false". In other words, if your data is simple, like a string text from an input field
//then use "extended: false"
app.use(express.json({extended: false}));

//as our react and express will run on different ports, browser security mechanisms might prevent us from sending&receiving 
//data between 2 different ports. To overcome this, we need to use lines below and also we need full paths.
const cors = require("cors");
app.use(cors());

/* ROUTES */
app.get("/test", (req, res) => {
    res.json({mymessage: "hey from server"});
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
})


/*
OPTIONAL: FOR DEPLOYMENT
//import path package
const path = require('path');
// Serve static files from the React app by using path package
app.use(express.static(path.join(__dirname, 'client/build')));
// Handle any requests that don't match the above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});
//on client CMD, "npm build"
//also remove "build" entry from client .gitignore
//also you'll need to enter .env connection string as an environment variable in your platform
//also make sure you are using relative paths in your react components for server.js routes
*/

app.post("/writetodatabase", async (req, res) => {
  try {
    const {content} = req.body;
    const newData = new DataModel({ content });
    await newData.save();
    res.json({message: "Data saved successfully / Данные сохранены"})
  } catch (error) {
    console.log("Ошибка сервера при сохранении данных", error.message);
    res.status(500).send("Server error while saving data/Ошибка сервера при сохранении данных")
  }
})


