const Product = require('../models/product');
// const create = require('../models/product');
const { mongooseToObject } = require('../../util/mongoose');

class courseController {

    // get /course/slug
    show(req, res, next) {
        Product.findOne({
            slug: req.params.slug
        })
        .then(product => {
            console.log(mongooseToObject(product))
            res.render('course/show', { 
                product: mongooseToObject(product) })}
        )
        .catch(next)
    }

    //[get] /course/create
    create(req, res, next) {
        res.render('course/create')
    }

    //[post] /course/store
    store(req, res, next) {
        // console.log(req.body)
        // res.json(req.body)
        // req.body.image = ``;
        const product = new Product(req.body);
        console.log(product)
        product.save();

        res.send('Thêm thành công');
    }
    // me/:id/edit
    edit(req, res, next) {
        Product.findById(req.params.id)
            .then(Product => res.render('course/edit',{
                Product: mongooseToObject(Product)
            }))
            .catch(next);
    }

    // [put] me/:id
    updata(req, res, next) {
        Product.updateOne({
            _id: req.params.id
        }, req.body)
        .then(() => res.redirect('/me/updata'))
        .catch(next);
    }

    delete(req, res, next) {
       Product.deleteOne({
        _id: req.params.id
       })
       .then(() => res.redirect('back'))
       .catch(next)
    }

    login(req, res, next) {
        res.render ('layouts/login', {layout: 'login'});
     }
}


module.exports = new courseController();
