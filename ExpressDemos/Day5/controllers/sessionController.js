import session from "express-session"

class SessionController 
{
  static set_session = (req,res)=>
  {
    req.session.regenerate(()=>
    {
      console.log("Session Vaiable regenerated")
      console.log(req.sessionID)
     
    })
    res.send("session is set here")
  }
  
  static get_session = (req,res)=>
  {
    console.log(req.session)
    console.log(req.session.id)
    console.log(req.session.cookie)
    console.log(req.session.cookie.maxAge)
    console.log(req.session.cookie)
    
    
    
   res.send("session is get here")
  }
  
  
  static delete_session = (req,res)=>
  {
    req.session.destroy(()=>
    {
      console.log("Session Deleted")
    })
   res.send("session is deleted here")
  }


static set_session_data = (req,res)=>
{   
    req.session.device="Mobile";
    console.log(req.session.device);
    if(req.session.count)
     {
       req.session.count++;
     }
     else
     req.session.count=1;
     
     res.send(`Count req.session : ${req.session.count}`)

}


static get_session_data = (req,res)=>
{  
  console.log(req.session.device)
    if(req.session.device) 
      {
     res.send(`Dvive NAme is ${req.session.device} and Count is : ${req.session.count}`)
      }
      else 
     res.send("No Session Data")
    }
}


export default SessionController;