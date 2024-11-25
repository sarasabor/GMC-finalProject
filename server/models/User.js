import mongoose from "mongoose";
import validator from 'validator';
const { isEmail } = validator;

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: [true, 'Please Enter Your Email'],
        unique: true, 
        lowercase: true,
        validate: [isEmail, 'Please Enter A Valid Email']
    },
    password: {
        type: String,
        required: [true, 'Please Enter Your Password'],
        minlength: [5, 'Minimum length is 5 characters']
    }
}, { timestamps: true });

//* Check User 
userSchema.post('save', (data, next) => {
    console.log('New User Has Been Registered', data);
    next();
})

const User = mongoose.model('User', userSchema);

export default User;