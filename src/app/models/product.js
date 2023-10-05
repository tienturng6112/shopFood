var slug = require('mongoose-slug-generator');
const mongoose = require('mongoose');

mongoose.plugin(slug);



mongoose.plugin(slug);
const Schema = mongoose.Schema;

const Product = new Schema({
    name: { type: String},
    des: { type: String},
    image: { type: String},
    videoID: { type: String},
    list: { type: String},
    slug: { type: String , slug: 'name', unique: true},
   
},{
    timestamps: true
});
const listproduct = mongoose.model('product', Product);
module.exports = listproduct;

//tu dong tao ra database trong mongodb
