

const jwt=require('jsonwebtoken');
const CustomAPIError=require('../errors/custom-error')
const {StatusCodes}=require('http-status-codes')
const {BadRequestError}=require('../errors/index')
const {UnauthError}=require('../errors/index')



const authMiddleware= async(req,res,next)=>
{

    const authHeader=req.headers.authorization;
 
    if(!authHeader || !authHeader.startsWith('Bearer '))
    {
     throw new UnauthError("Please provide Authorization token")
    }
     
    const token=authHeader.split(' ')[1]
    try 
    {
        const decoded=jwt.verify(token,process.env.JWT_SECRET)
        const {id,username}=decoded
        req.user={id,username}
        next()
    }
    catch (error) 
   {
     throw new BadRequestError('Not Authorized to access this route')
   }  
}

module.exports=authMiddleware