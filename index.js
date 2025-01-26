
const express =require('express');
const app =express();
const urlRoute =require('./routes/url');
const {connectTOMongoDB} =require('./connection');

const port =8001;


connectTOMongoDB('mongodb://localhost:27017/short_url')
.then(()=>console.log('MongoDb Connected')
);

app.use(express.json());
app.use("/url",urlRoute);

// app.get('/getanalytics');
app.listen(port,()=> console.log(`Server Started at PORT:${port}`)
);

