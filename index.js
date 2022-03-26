var usernamev=document.getElementById("username");
var  errorname=document.getElementById("error");
var paswd=document.getElementById("password");

var errorpaswd=document.getElementById("errorpswd");
var regexemail=  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/

// var regexemail=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;

// function loginvalidate(){
//     return inputfunction();
// }


function loginvalidate(){
    let status = true;
    if (usernamev.value== "") {
         errorname.innerHTML="Please enter Your email";
         errorname.style.color="red";
         status = false;
    }
    else{
        status = emailvaldation();
    }
    if (paswd.value== "") {
    
        errorpaswd.innerHTML="Please enter Your password";
        status = false;
    }
    status = emailvaldation() && status;
    status = passwordvaldation() && status;
    return status;
}
//here
// function loginvalidate()
// {
//     return emailvaldation();
// }
//here
// if (usernamev.value.trim()== "") {
 
//    errorname.innerHTML="Please enter Your email";
//    usernamev.focus();

//    return false;
// }
    

function emailvaldation()
    {
       if(regexemail.test(usernamev.value))
          {
              errorname.innerHTML="";
              errorname.style.color="green";
              return true;
           }
        else{
             errorname.innerHTML="Please enter a valid email id";
             errorname.style.color="red";
             return false;
            }
    }



    function passwordvaldation(){

        var regexpaswd=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z!@#$%^\d]{8,}$/;
       
        if(regexpaswd.test(paswd.value))
                {
      
                    errorpaswd.innerHTML="Valid";
                    errorpaswd.style.color="yellow";
                   return  myfunction1();
                   return true;
                }
               else{
                errorpaswd.innerHTML="Password must contains(an uppercase,a lowercase,a digit and minimum 8 characters.";
                errorpaswd.style.color="red";
                paswd.style.background="white";
                           return false;
                  //     }
               return false;
      }

    }  
    
 
    function myfunction1() 
    { 
        var regexpaswd1=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
      //   if(regexpaswd1.test(passwadval.value))
      //   {
    //         //usernamev.focus();
            // errorpaswd.innerHTML="Valid";
        //  return  myfunction(paswd);
    //       return true;
    //     }
        if(paswd.value.length<=10 && paswd.value.length>=8)
        {
            errorpaswd.innerHTML="poor";
          paswd.style.background="red";
          errorpaswd.style.color="yellow";
            return true;
            
        }
        //     // x.style.background = "yellow";
         
        //  }
        
   
    else if(paswd.value.length>10 && paswd.value.length<=12)
    {
        errorpaswd.innerHTML="medium";
        errorpaswd.style.color="yellow";
      paswd.style.background="orange";

        return true;
    }
    else if(paswd.value.length>12){
        errorpaswd.innerHTML="strong";
        errorpaswd.style.color="yellow";
      paswd.style.background="green";
       // errorpaswd.setAttribute="bold";
        return true;
                      }
    
          //} 
      }



     





    





