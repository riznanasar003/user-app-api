const mongoose = require ("mongoose")
const schema = mongoose.Schema(
    {
        "name":{type:String,required:true},
        "dob":{type:String,required:true},
        "bgroup":{type:String,required:true},
        "mobile":{type:String,required:true},
        "address":{type:String,required:true},
        "pincoede":{type:String,required:true},
        "district":{type:String,required:true},
        "place":{type:String,required:true},
        "emailid":{type:String,required:true},
        "uname":{type:String,required:true},
        "pass":{type:String,required:true}
    }
)

let usermodel = mongoose.model("users",schema);
module.exports = {usermodel}