import { Schema, model } from 'mongoose'

interface IUser {
    name: string;
    email: string;
    message: string;
}

const UserSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: false, unique: true},
    message: {type: String, required: true}
}, {
    versionKey: false
})

export const UserModel = model<IUser>('User', UserSchema)