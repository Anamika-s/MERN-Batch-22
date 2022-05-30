const myLogger2 = (req,res,next) =>
{
 console.log("Logging Information for About");
 next();
}

export default myLogger2