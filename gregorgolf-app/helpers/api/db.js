import getConfig from 'next/config';
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

try {
    mongoose.connect(process.env.MONGODB_URI);
    mongoose.Promise = global.Promise;
} catch (error){
    throw 'Can not connect to database';
}

export const db = {
    User: userModel(),
    Event: eventModel(),
    App: appModel()
};

// mongoose models with schema definitions

function userModel() {
    const schema = new Schema({
        email: { type: String, unique: true, required: true },
        hash: { type: String },
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        job: { type: String },
        phone: { type: String },
        photo: { type: String },
        membership: { type: String },
        accountStatus: { type: String },
        subscriptionStatus: { type: String },
        customerId: { type: String },
        subscriptionId: { type: String },
        subscriptionDate: { type: Date },
        subscriptionFrequency: { type: String },
    }, {
        // add createdAt and updatedAt timestamps
        timestamps: true
    });

    schema.set('toJSON', {
        virtuals: true,
        versionKey: false,
        transform: function (doc, ret) {
            delete ret._id;
            delete ret.hash;
        }
    });
    
    return mongoose.models.User || mongoose.model('User', schema);
}

function eventModel() {
    const schema = new Schema({
        bay: { type: Number, required: true },
        members: { type: Array, required: true },
        hours: { type: Number, required: true },
        startTime: { type: Date, required: true },
        endTime: { type: Date, required: true },
        payment: { type: String },
        paymentId: { type: String }
    }, {
        // add createdAt and updatedAt timestamps
        timestamps: true
    });

    schema.set('toJSON', {
        virtuals: true,
        versionKey: false,
        transform: function (doc, ret) {
            delete ret._id;
        }
    });
    
    return mongoose.models.Event || mongoose.model('Event', schema);
}

function appModel() {
    const schema = new Schema({
        profile: { type: String },
        numIn60: { type: Number, required: true },
    }, {
        // add createdAt and updatedAt timestamps
        timestamps: true
    });

    schema.set('toJSON', {
        virtuals: true,
        versionKey: false,
        transform: function (doc, ret) {
            delete ret._id;
        }
    });
    
    return mongoose.models.App || mongoose.model('App', schema);
}