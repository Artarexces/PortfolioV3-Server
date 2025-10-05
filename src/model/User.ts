import { Schema, model } from 'mongoose'

interface IUser {
    name: string;
    email: string;
    password: string;
}

const UserSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: false},
    password: {type: String, required: true}
}, {
    versionKey: false
})

export const UserModel = model<IUser>('User', UserSchema)