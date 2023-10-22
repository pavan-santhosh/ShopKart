import jwt from 'jsonwebtoken';
const generateToken = (res,userId) => {
    const token = jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn: '30d',
    });
    //Set JWT as HTTP-only Cookie
    res.cookie('jwt',token,{
        httpOnly: true,
        secure: process.env.NODE_ENV!=='development', //NOTE: is not double equal to ===> !==
        sameSite: 'strict',
        maxAge: 30*24*60*60*1000, //30 days in milliseconds
    });
}

export default generateToken;