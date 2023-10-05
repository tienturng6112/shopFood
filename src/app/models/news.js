const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const news = new Schema({
    name: { type: String, maxLength: 255 },
    des: { type: String, maxLength: 600 },
    image: { type: String, maxLength: 255 },
    slug: { type: String },
    createdAt: { type: Date, default: Date.now},
    updatedAt: { type: Date, default: Date.now},
});
const listproduct = mongoose.model('news', news);

module.exports = listproduct;

//tu dong tao ra database trong mongodb
