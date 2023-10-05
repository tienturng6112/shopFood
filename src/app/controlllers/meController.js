const product = require('../models/product');
const { multipleMongooseToObject } = require('../../util/mongoose');

class meController {
    // /me/updata
    meupdata(req, res, next) {
        product.find({})
            .then(product => res.render('me/updata', {product: multipleMongooseToObject(product)}))
            .catch(next);
    }
}

module.exports = new meController();
