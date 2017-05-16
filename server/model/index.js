import mongoose, { Schema } from 'mongoose';

export const Test = mongoose.model('test', new Schema({
    name: String
}));
