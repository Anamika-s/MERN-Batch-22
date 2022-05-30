 
class CookieController
{
  static set_cookie = (req, res)=>
  {
    res.cookie("username","anamika",{maxAge:1000})
    res.cookie("email" ,"anamika@gmail.com")
    res.send("Cookie is set here")
  }

  
  static get_cookie = (req, res)=>
  {
  //   console.log(req.cookies)
  console.log(req.cookies.username)

    res.send("Cookie are get from here")
  }

  
  static delete_cookie = (req, res)=>
  {
    res.clearCookie("username")
    res.send("Cookies are deleted here")
  }
}

export default CookieController