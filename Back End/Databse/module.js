const mongoose=require('mongoose')

const movie_schema=new mongoose.Schema({
    names:{
        type:String
    },
    img:{
        type:String
    },
    movie_Link:{ 
        type:String
    }
})



const movie_model=new mongoose.model('Movie-data',movie_schema);
module.exports=movie_model;