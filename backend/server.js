const app = require("./app");
const cloudinary = require("cloudinary");

//import dotenv package
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");


//handling uncaught exception like for example print random word. It can be skipped
process.on("uncaughtException", (err) =>{
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to uncaught exception`);
  process.exit(1);
})


//loading the config.env file
dotenv.config({ path: "backend/config/config.env" });

//connecting to database by calling the function created in database.js
connectDatabase();


cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});


const server = app.listen(process.env.PORT, () => {
  console.log(`Server is working on http://localhost:${process.env.PORT}`)
})


//unhandled promise rejection for example. using mngo instead of mongo //you can skip this
process.on("unhandledRejection",err =>{
  console.log(`Error: ${err.message}`);
  console.log("Shutting down the server because of unhandled promise rejection");

  server.close(()=>{
    process.exit(1);
  })

})
