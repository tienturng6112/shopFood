const express = require("express");
const morgan = require("morgan");
const methodOverride = require('method-override')
const path = require("path");
const handlebars = require("express-handlebars").engine;

const app = express();
const port = 3000;

const route = require('./routers');
const db = require('./config/db');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
//connect db

db.connect();

app.use(express.static(path.join(__dirname, "public")))

//http log
app.use(morgan('combined'));

//template engine
app.engine('hbs', handlebars({
    extname: ".hbs",
    helpers:{
        sum(a,b){
            return a + b;
        }
    },

}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, './views'));
// app.set('views', './views');

//fix short name

route(app);


app.listen(port, () => {
    console.log("trang web cua ban dang chay tren cong 3000");
});