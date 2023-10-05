const product = require('../models/product');
const { multipleMongooseToObject } = require('../../util/mongoose');
const dangky = require('mongoose').model("dangkies",{
    tk: {type: String},
    mk: {type: String},
});

class homeController {
    index(req, res, next) {
        // try {
        //     const productList = await product.find();
        //     console.log(productList)
        //     res.json(productList);
        // } catch (error) {
        //     res.status(400).json({ error: 'ERROR!!!' });
        // }

        product.find({})
        .then(product => {
            //fix lỗi khi phiên bản handlebar sau 4.6 có bảo mật cao
            // product = product.map(product => product.toObject())
            res.render('home', { 
                product: multipleMongooseToObject(product) 
            })
        })
        .catch(next);
    }

    search(req, res) {
        res.render('search');
    }

    homelogin (req, res, next) {
        res.render("layouts/login", { layout: 'login' });
        
    }

    async handleLogin (req, res, next) {
            const [email, pass] = req.body;
            const checkuser = await dangky.findOne({ tk: email, mk: pass })
            console.log(checkuser)
            if (!checkuser)
                return res.status(400).json({
                    status: "fail",
                    msg: "tài khoản hoặc mật khẩu không đúng",
                }); 
            res.status(201).json({
                status: "success",
                // token: createJwt(user.id),
                msg: "Đăng nhập thành công.",
            });
    }

    homerei (req, res, next) {
        res.render("layouts/rei",{ layout: 'rei' });
        
    }

    async handlerei (req, res, next) {
        const { email, password, repeatPassword } = req.body;
        if(password !== repeatPassword) return      res.status(400).json({
            status: "error",
            msg: "Mật khẩu không trùng nhau",
        });
        await dangky.create({
            tk:email, 
            mk:password,
        })    
        res.status(201).json({
            status: "success",
            msg: "Đăng ký thành công",
        });
    }
}

module.exports = new homeController();
