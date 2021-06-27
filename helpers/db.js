const mongoose = require('mongoose');
module.exports = ()=>{
    mongoose.connect('mongodb+srv://dbUser:Hakan3428@mernmongodbcluster34.2o0zg.mongodb.net/movieappdb?retryWrites=true&w=majority',
    {useNewUrlParser: true, useUnifiedTopology: true})

    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() { console.log("we're connected!")
})
}
