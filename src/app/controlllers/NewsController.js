const product = require('../models/product');
const { multipleMongooseToObject } = require('../../util/mongoose');

class newController {
    news(req, res, next) {

        product.find({})
        .then(product => {
            //fix lỗi khi phiên bản handlebar sau 4.6 có bảo mật cao
            // product = product.map(product => product.toObject())
            res.render('news', { 
                product: multipleMongooseToObject(product) 
            })
        })
        .catch(next);
    }

    search(req, res) {
        res.render('search');
    }
}

module.exports = new newController();


