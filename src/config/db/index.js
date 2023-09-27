const mongoose = require('mongoose')
async function connect() {
    try {
        await mongoose.connect(
            'mongodb+srv://12345:12345@cluster0.jyt8pn6.mongodb.net/?retryWrites=true&w=majority',
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        )
        console.log('Connect successfully!!!')
    } catch (error) {
        console.log('Connect failure!!!')
    }
}

module.exports = { connect }
