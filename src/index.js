require('dotenv').config();
var http = require("http");

const app = require('./app');

const db = require('./models');

const PORT = process.env.PORT || 3000;

db.sequelize.authenticate()
    .then(() => {
        console.log('conected');
        app.listen(PORT,  
            () => {
            console.log(`listening on port ${PORT}`)
            setInterval(function(){ 
                http.get("http://humsensor.herokuapp.com/stay-alive")
            },300000)
        }
        );
    })
    .catch(err => {
        console.log(`unable to connect: ${err}`)
    }
    );

    
