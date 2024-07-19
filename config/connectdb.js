const mongoose= require("mongoose")
const connectdatabase= async()=>{
    try {
        
        mongoose.connect(process.env.URI)
        console.log("connected")
    } catch (error) {
        console.log(error)
    }
}


module.exports=connectdatabase