const mongoose = require('mongoose');


MONGO_URL = " mongodb+srv://bharaths:<Bharaths143>@cluster0-o9ide.mongodb.net/test?retryWrites=true&w=majority";

const connectDb = () => {
    mongoose.connect(MONGO_URL, {
        useNewUrlParser: true,
    }).then(res => {
        console.log("Db Connected");

    }).catch(err => {
        console.error(err);
        console.log('Db connection closed');

    });
}


module.exports = connectDb;