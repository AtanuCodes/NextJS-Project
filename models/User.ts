import mongoose, { Schema, model, models } from "mongoose";
import bcrypt from "bcryptjs";

export interface IUser {
  email: string;
  password: string;
  _id?: mongoose.Types.ObjectId;
  createdAt?: Date;
  updatedAt?: Date;
}

const UserSchema: Schema = new Schema<IUser>(
  {
    email: { type: String, required: true, unique: true, lowercase: true },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);


UserSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password as string, 10);
  }
  next();
});

const User =  models.User || model<IUser>("User", UserSchema);
export default User;