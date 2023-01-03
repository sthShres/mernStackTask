const mongoose = require("mongoose")

const connectDB= async () =>{

    try{

        const connect = await mongoose.connect(process.env.MONGO_URI)

        console.log(`MongoDB Connected`)
    }
    catch(error){
        console.log(error)
        process.exit(1)


    }
};


module.exports = connectDB




//use this function in server.js to connect to mongDB and start the  server


// const startServer = async () =>{
//   try{
//     await connectDB();
//     app.listen(PORT, ()=>{
//       console.log(`Server running on${PORT}`);
//     });
//   }
//   catch(error){
//     console.log(error)

//   }
// };
// startServer();