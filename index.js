const express = require('express')
const urlRouter = require('./src/routers/routes')
const app = express();

app.use(express.json({ extended: true }));

app.use('/', urlRouter);


app.use('**', (req, res) => {
    res.send(`<h4>Not found</h4>`);
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log('Server started');
})