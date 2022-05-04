const { timeStamp } = require('console');
const { Schema, model } = require('mongoose');

const thoughtInfo = new Schema ({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now, 
        // come back to getter method to format the date 
        get: timeStamp => dateConverter(timeStamp)
    }
})
