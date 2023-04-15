const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favoriteSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    campsites: [{
        type: Schema.Types.ObjectId,
        ref: 'Campsite',
        required: true
    }]
}, {
    timestamps: true
});

module.exports = mongoose.model('Favorite', favoriteSchema);
