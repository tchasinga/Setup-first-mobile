const path = require('path');

module.exports ={
    mode: 'developmwnt',
    entry : {
        path : path.resolve(__dirname, './src/index.js'),
    },

    output : {
        path : path.resolve(__dirname, './build'),
        filename : 'CodeRunner.js'
    }
}