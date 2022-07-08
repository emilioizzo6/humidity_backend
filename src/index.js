require('dotenv').config();

const app = require('./app');

const db = require('./models');

const PORT = process.env.PORT || 3000;

db.sequelize.authenticate()
    .then(() => {
        console.log('conected');
        app.listen(PORT,  
            () => {
            console.log(`listening on port ${PORT}`)
        }
        );
    })
    .catch(err => {
        console.log(`unable to connect: ${err}`)
    }
    );

    
