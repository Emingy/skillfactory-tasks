const express = require('express');
const cors = require('cors');
const port = 8000;
const bodyParser = require('body-parser');
const app = express();
const {signUp} = require('./controller-signUp')

function loggerMiddleware(req,res,next) {
    console.log(`${req.method} - ${req.url}`);

    next();
}
app.use(bodyParser.json())
app.use(cors())
app.use(loggerMiddleware);
app.use('/signUp', signUp);


app.listen(port, ()=>{
    console.log(`Listening ${port}`)
})