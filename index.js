// const express = require('express')
// const urlRouter = require('./src/routers/routes')
// const connectDb = require('./src/config/database')
// const cors = require('cors');
// const app = express();

// connectDb();

// app.use(express.json({
//     extended: true
// }));

// app.use(cors())

// app.use('/api', urlRouter);


// app.use('**', (req, res) => {
//     res.send(`<h4>Not found</h4>`);
// });
// const port = process.env.PORT || 5000;
// app.listen(port, () => {
//     console.log('Server started');
// })


const express = require('express');
const cors = require('cors');

const connectDB = require('./src/config/database');
const urlRouter = require('./src/routers/routes');

const app = express();

connectDB();

app.use(cors());
//  apply to all requests
app.use(express.json({
    extended: true
}));

app.use('/api', urlRouter);



const PORT = process.env.PORT || 4000;


app.listen(PORT, () => {
    console.log("Server is running on Port: " + PORT);

});