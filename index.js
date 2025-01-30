
const express =require('express');
const app =express();

const staticRoutes =require('./routes/staticRoutes');
const urlRoute =require('./routes/url');
const path = require('path');
const {connectTOMongoDB} =require('./connection');
const URL =require('./models/url');

const port =8001;
const router = express.Router();

connectTOMongoDB('mongodb://localhost:27017/short_url')
.then(()=>console.log('MongoDb Connected')
);

app.set('view engine','ejs');
app.set('views',path.resolve("./views"));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use("/url",urlRoute);
app.use("/",staticRoutes);


// app.get('/getanalytics');
app.listen(port,()=> console.log(`Server Started at PORT:${port}`)
);

