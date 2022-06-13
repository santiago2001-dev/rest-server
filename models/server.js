const express = require('express');
const cors = require('cors');


class   server {

    constructor(){
        this.app = express();
        this.routes();
        this.middelwares();
    }
    middelwares(){
        this.app.use(cors())
        this.app.use(express.static('public'));
        this.app.use(express.urlencoded({ extended: false }));

        this.app.use(express.json());
    }

    routes(){
        this.app.use('/api/users',require('../routes/router'))

}

    listem(){
        this.app.listen(process.env.PORT,()=>{
            console.log(`server run in port http://localhost:${process.env.PORT}`)
        });
    }


}

module.exports = server;