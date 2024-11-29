import jwt from 'jsonwebtoken';

const protect = (req, res, next) => {
    const token = req.cookies;
    console.log(token);
    next();
}


export default protect;