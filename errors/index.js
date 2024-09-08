const BadRequestError=require('./bad-request')
const UnauthError=require('./unauthorized')
const CustomAPIError=require('./custom-error')

module.exports={
    BadRequestError,
    UnauthError,
    CustomAPIError
}