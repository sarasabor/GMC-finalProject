import jwt from 'jsonwebtoken';

const protect = (req, res, next) => {
    console.log(req.headers.authorization?.split(' ')[1]);
    next();
}


export default protect;