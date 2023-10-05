
const homerouter = require('./home');


function route(app) {

    app.use('/', homerouter);  
    app.use('/login', homerouter);  
    // app.get('/',(req, res) => {
    //     res.render(`home`);
    // })
    
    // app.get('/news',(req, res) => {
    //     res.render(`news`);
    // })
    
    // app.get('/search',(req, res) => {
    //     res.render(`search`);
    // })
    
}

module.exports = route;