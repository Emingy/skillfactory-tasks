const express = require('express');
const cors = require('cors');
const port = 8000;
const bodyParser = require('body-parser');
const app = express();
const {signIn} = require('./controller-signIn')
const {signUp} = require('./controller-signUp')
const {token} = require('./controller-token')
const {recovery} = require('./controller-recovery')

function loggerMiddleware(req,res,next) {
    console.log(`${req.method} - ${req.url}`);

    next();
}
app.use(bodyParser.json())
app.use(cors())
app.use(loggerMiddleware);
app.use('/signUp', signUp);
app.use('/token', token);
app.use('/signIn', signIn);
app.use('/recovery', recovery)

app.listen(port, ()=>{
    console.log(`Listening ${port}`)
})