import mongoose, { Schema, Document } from "mongoose";

export interface Message extends Document {
  message: string;
  createdAt: Date;
}

const MessageSchema = new Schema<Message>({
  message: {
    type: String,
    required: [true, "Message is required"],
    maxlength: 500,
  },
  createdAt: {
    type: Date,
    required: [true, "Created at is required"],
    default: Date.now,
  },
});

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  isVerified: boolean;
  isAcceptingMessages: boolean;
  VerifyCode: string;
  verifyCodeExpiry: Date;
  messages: Message[];
}

const userSchema = new Schema<IUser>({
  username: {
    type: String,
    required: [true, "Username is required"],
    unique: true,
    trim: true,
    maxlength: 20,
    minlength: 3,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    match: [/.+\@.+\..+/, "Please enter a valid email address"]
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    maxlength: 20,
    minlength: 8,
  },
  isVerified: {
    type: Boolean,
    required: [true, "Verification status is required"],
    default: false,
  },
  isAcceptingMessages: {
    type: Boolean,
    required: [true, "Accepting messages status is required"],
    default: true,
  },
  VerifyCode: {
    type: String,
    required: [true, "Verify code is required"],
    length: 6,
  },
  verifyCodeExpiry: {
    type: Date,
    required: [true, "Verify code expiry is required"],
    default: Date.now,
  },
  messages: {
    type: [MessageSchema],
    default: [],
  },
});


// Check if the model already exists to avoid OverwriteModelError & if not then create a new model
const userModel = (mongoose.models.User as mongoose.Model<IUser>) || mongoose.model<IUser>("User", userSchema);
export default userModel;