//pass error message to the client if he enters the wrong password 
//*we can create a function
export const errorHandler = (statusCode,message)=>{
const error = new Error();
 error.statusCode = statusCode;
 error.message = message;
 return error;
}
