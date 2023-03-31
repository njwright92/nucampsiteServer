const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const partnerSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    featured: {
        type: Boolean,
        default: false
    },
    comments: [{
        rating: {
            type: Number,
            min: 1,
            max: 5,
            required: true
        },
        text: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        }
    }]
}, {
    timestamps: true
});

const Partner = mongoose.model('Partner', partnerSchema);

module.exports = Partner;
