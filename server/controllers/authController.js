import User from "../models/User.js";
import jwt from 'jsonwebtoken';

//* Function To Handle Errors
const errorsFunction = (err) => {
    let errors = { email: '', password: ''}

    //* if Data is Duplicated
    if(err.code === 11000) {
        errors.email = 'Email is Already Registered';
        return errors;
    }

    if(err.message.includes('User validation failed')) {
        Object.values(err.errors).forEach(({properties}) => {
            errors[properties.path] = properties.message;
            //* Operation one : errors['email'] = error message
            //* Operation Two : errors['password'] = error message 
        });
    }

    return errors;

}

//* singn-up GET
export const signUpGet = (req, res) => {
    res.send('html form');
}

export const signUpPost = async(req, res) => {
    const { email, password } = req.body;

    try {
        //* Communication with Database 
        const newUser = await User({email, password });
        // if(!newUser) return res.status(404).json({message: 'Invalid Information'});

        await newUser.save(); //* Saving The User to The Database
        
        //* use of jwt to install it use : npm i jsonwebtoken
        const token = jwt.sign({userId: newUser._id}, process.env.SECRET_KEY, { expiresIn: '1h'});
        
        //* register it in cookies
        res.cookie('jwt', token)
        
        res.status(201).json({ message: 'User Registered Successfully', redirect: '/login', token});
    } catch (error) {
        const errors = errorsFunction(error); //* Returns Errors
        res.status(500).send(errors);
    }
}

export const loginGet = (req, res) => {
    
}

export const loginPost = () => {

}