const express = require('express');

const router = express.Router();
const homeController = require('../app/controlllers/homeController');
const NewsController = require('../app/controlllers/NewsController');
const courseController = require('../app/controlllers/courseController');
const meController = require('../app/controlllers/meController');

// router.use('/:slug', homeController.search);
router.get("/", homeController.index);
router.route('/news').get(NewsController.news);
router.get('/sanpham/:slug', courseController.show);
router.get('/create', courseController.create);
router.route('/course/store').post(courseController.store);
router.get('/me/updata', meController.meupdata);
router.get('/me/:id/edit', courseController.edit);
router.put('/me/:id', courseController.updata);
router.delete('/me/:id', courseController.delete);
// router.get('/login',courseController.login);
// router.route('/news').get(NewsController.news);
// router.route('/news').get(NewsController.news);




router
    
    .get('/login',homeController.homelogin)
    .post('/login',homeController.handleLogin);
router
    // .get("/signup",homeController.homerei)
    .post("/signup",homeController.handlerei);

module.exports = router;