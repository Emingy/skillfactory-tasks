const express = require('express');
const cors = require('cors');
const port = 8000;
const bodyParser = require('body-parser');
const app = express();
const {signIn} = require('./signin/controller-signIn')
const {signUp} = require('./signup/controller-signUp')
const {token} = require('./token/controller-token')
const {recovery} = require('./recovery/controller-recovery');
const { car } = require('./car/controller-car');
const { searchCar } = require('./searchCar/controller-searchCar');

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
app.use('/car', car)
app.use('/searchCar', searchCar)

app.listen(port, ()=>{
    console.log(`Listening ${port}`)
})