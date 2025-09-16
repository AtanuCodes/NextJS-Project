import mongoose, {Schema, model, models} from "mongoose";
import bcrypt from "bcryptjs";


export interface IUser{
    email:string;
    password:string;
    _id?:mongoose.Types.ObjectId;
    createsAt?:Date;
    updatedAt?:Date;
}

const UserSchema:Schema = new Schema<IUser>({
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true
    }
})