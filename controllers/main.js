


const jwt=require('jsonwebtoken');
const {CustomAPIError}=require('../errors/index')
const {BadRequestError}=require('../errors/index')
const {UnauthError}=require('../errors/index')
const {StatusCodes}=require('http-status-codes')

const login =async(req,res)=>{
    const {username,password}=req.body
    //mongoose validations
    //Joi Pacakge
    //checking values manually
    if(!username || !password)
    {
        throw new BadRequestError("Please provide email and password")
    }
    const id=new Date().getDate();
    //try to keep playload small, better experience for user
    const token= jwt.sign({id, username},process.env.JWT_SECRET,{expiresIn:'30d'})

    
    res.status(StatusCodes.OK).json({msg:'user created',token})
}

const dashboard = async(req,res)=>
{
    console.log(req.user)
    let luckyNumber=0
    for(var i=0; i<6;i++)
     {
         let num=Math.floor(Math.random()*9)+1
         luckyNumber=luckyNumber*10+num
     }
     res.status(StatusCodes.OK).json({msg:`Hello Siva the decoded data is ${req.user.username}`,secret:`here is the thing you are looking for, your data is ${luckyNumber}`})
   
}

const checkDomainExit= async(req,res)=>{
    const {domain}=req.query
    let arr=["MEAN","MERN","DSA","PYTHON"]
        for(var i=0;i<arr.length;i++){
            if(arr[i]===domain){
                res.status(StatusCodes.CREATED).json({msg:`Domain Booked Successfully ${domain}`})
            }
            else{
                continue
            }
        }
        res.status(401).json({msg:`Unable to book Domain check once the domain list are ${arr}`})
        
    
    
       


}

const generateOtp= async(req,res)=>{
    let otp=""
    for(var i=0;i<6;i++){
        let num=  Math.floor(Math.random()*9)
        otp=otp*10+num
    }
    console.log(otp)
    res.status(200).json({OTP:`${otp}`,success:'true'})
}


module.exports={
    login,
    dashboard,
    generateOtp,
    checkDomainExit
}

