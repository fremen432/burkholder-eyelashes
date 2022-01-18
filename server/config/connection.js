const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/burkholder-eyelashes', 
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    }
);

module.exports = mongoose.connection;