const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://Admin:bezz2122@cluster0-wdsqr.mongodb.net/knowledge_stats?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .catch(e => {
        const msg = 'ERRO! Não foi possível conectar com o MongoDB!'
        console.log('\x1b[41m%s\x1b[37m', msg, '\x1b[0m')
    })