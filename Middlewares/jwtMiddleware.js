const jwt = require('jsonwebtoken');

const jwtMiddleware = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        return res.status(401).json({ error: 'Authorization header missing' });
    }
    const token = authHeader.split(' ')[1]; 
    if (!token) {
        return res.status(401).json({ error: 'Token is missing' });
    }

    console.log('token from middleware:', token);
    try {
        const jwtResponse = jwt.verify(token, 'shon123');
        console.log(jwtResponse);
        req.payload = jwtResponse.userId;
        next();
    } catch (error) {
        res.status(401).json('Authorization failed, please login');
        console.log(error);
    }
};

module.exports = jwtMiddleware;
