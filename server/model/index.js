import mongoose, { Schema } from 'mongoose';

export const Test = mongoose.model('test', new Schema({
    name: String
}));

export const FetchDataOfOption = mongoose.model('', new Schema({
    category: String,
    country: String
}));
