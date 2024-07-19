const mongoose= require("mongoose")



const personschema= mongoose.Schema({

    name:{type:String,required:true},
    age:{age:Number},
    favoriteFood: [String]

})

const person= mongoose.model("person", personschema)
module.exports= person