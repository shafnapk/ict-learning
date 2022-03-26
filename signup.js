// var fnameval=document.forms["signinform"]["firstname"].value;
//var fnameval1=document.getElementById("firstname").value;
 var fnameval=document.getElementById("firstname");
 var  errorlsname=document.getElementById("errorlname");
 var lnameval=document.getElementById("lastname");
 var  errorfsname=document.getElementById("errorfname");
 var genderval=document.getElementsByName("inlineRadioOptions");
 var  errorgenderval=document.getElementById("errorgender");
 var emailval=document.getElementById("emailid");
 var  erroremailval=document.getElementById("erroremail");
 var phnumval=document.getElementById("Phonenumber");
 var  errorphval=document.getElementById("errorPhonenumber");
 var cityval=document.getElementById("city");
 var  errorcityval=document.getElementById("errorcity");
 var countryval=document.getElementById("country");
 var  errorcountryval=document.getElementById("errorcountry");
 var paswdval=document.getElementById("password1");
var errorpaswdval=document.getElementById("errorpassword1");


function signvalidate(){
    let status = true;
    
   console.log(fnameval.value);

    if (fnameval.value.trim()== "") {

        errorfsname.innerHTML="Please enter Your First Name";
         status = false;
    }
    if (lnameval.value.trim()== "") {
    
        errorlsname.innerHTML="Please enter Your Last Name";
        status = false;
    }
    if ((genderval[0].checked==false&&genderval[1].checked==false)) {
        errorgenderval.innerHTML="Please select your gender";
        errorgenderval.style.color="red";
        status =false;  
    }
    // else{
    //     errorgenderval.innerHTML="";
    //     status=true;
    // }
    if (emailval.value.trim()== "") {
    
        erroremailval.innerHTML="Please enter Your  Email";
        status = false;
    }
    if (phnumval.value.trim()== "") {
    
        errorphval.innerHTML="Please enter Your  Phone Number";
        status = false;
    }
    if(cityval.value.trim()=="")
              {
         errorcityval.innerHTML="Please enter Your city name";
         errorcityval.style.color="red";
        status = false;
    }
    if(countryval.value.trim()=="")
   {
            errorcountryval.innerHTML="Please enter Your country name";
            errorcountryval.style.color="red";
            status = false;
   }  
   if(paswdval.value.trim()=="")
   {
    errorpaswdval.innerHTML="Please enter Password";
    errorpaswdval.style.color="red";
            status = false;
   }  

   console.log(status);
  
    status = fnamevaldation() && status;
   status = flnamevaldation() && status;
    status = gendervaldation() && status;
    status = emailvaldation1() && status;
    status = phnumvalidation() && status;
    status = cityvaldation() && status;
    status = countryvaldation() && status;

    status = passwordvaldation1() && status;
    
    return status;
}
// var lnameval=document.forms["signinform"]["lastname"].value;
// var genderval=document.forms["signinform"]["inlineRadioOptions"].value;
// var emailval=document.forms["signinform"]["email"].value;
// var Phonenumberval=document.forms["signinform"]["Phonenumber"].value;
// var cityval=document.forms["signinform"]["city"].value;
// var countryval=document.forms["signinform"]["country"].value;
// var passwordval=document.forms["signinform"]["password"].value;
//function signvalidate()
//{
  //return fnamevaldation();



// if(!isNaN(fnameval1))
// {
//     alert("name should in character");
//     return false;
// }


//}
function fnamevaldation(){
    // if(fnameval.value.trim()=="")
    //       {
    //  errorfsname.innerHTML="Please enter Your first name";
    //  errorfsname.style.color="red";
    //       // usernamev.focus();
        
    //        return false;
    //       }
    // else
    // {
    //     return flnamevaldation();
    // }
        // alert("please enter");
     let regexfn= /^[a-zA-Z]+$/;
        if(regexfn.test(fnameval.value))
        {
            errorfsname.innerHTML="";
            return true;
           
        }
        else{
            errorfsname.innerHTML="Please enter a valid name";
            errorfsname.style.color="red";
            return false;
        }
        
}
function flnamevaldation(){
    
    let regexfn= /^[a-zA-Z]+$/;
        if(regexfn.test(lnameval.value))
        {
            errorlsname.innerHTML="";
            return true;
           
        }
        else{
            errorlsname.innerHTML="Please enter a valid name";
            errorlsname.style.color="red";
            return false;
        }
}
function gendervaldation(){

    if ((genderval[0].checked==false&&genderval[1].checked==false)) {
        errorgenderval.innerHTML="Please select your gender";
        errorgenderval.style.color="red";
            // alert("Please Select Your Gender");
            return false;
    }
    else{
        errorgenderval.innerHTML="";
        return true;
    }
}
//function phonenumber(inputtxt)
// {
//     var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
//     if(inputtxt.value.match(phoneno))
//        {
//          return true;      
//        }
//      else
//        {
//          alert("Not a valid Phone Number");
//          return false;
//        }
//   }
  
//email validation
function emailvaldation1(){

    var regexemail=  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/

    if(regexemail.test(emailval.value))
    {
        erroremailval.innerHTML="";
        return true;
       
    }
    else{
        erroremailval.innerHTML="Please enter a valid email id";
        erroremailval.style.color="red";
        return false;
    }
}
    function phnumvalidation(){
        var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        
         if(phnumval.value.match(phoneno)){
            //errorphval.style.display="none";
            errorphval.innerHTML="";
            return true;


        }
        else
        {
            errorphval.innerHTML="Please enter 10 digits."; 
            errorphval.style.color="red";
           
            return false;
        }
            // alert("please enter");
    }


    function cityvaldation(){
        let regexfn= /^[a-zA-Z]+$/;
        if(regexfn.test(cityval.value))
        {
            errorcityval.innerHTML="";
            return true;
           
        }
        else{
            errorcityval.innerHTML="Please enter a valid city";
            errorcityval.style.color="red";
            return false;
        }
    }
    // }
    function countryvaldation(){
        let regexfn= /^[a-zA-Z]+$/;
        if(regexfn.test(countryval.value))
        {
            errorcountryval.innerHTML="";
            return true;
           
        }
        else{
            errorcountryval.innerHTML="Please enter a valid country";
            errorcountryval.style.color="red";
            return false;
        }
        
    }
    function passwordvaldation1(){

        var regexpaswd1=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z!@#$%^\d]{8,}$/;
       
        if(regexpaswd1.test(paswdval.value))
                {
      
                   errorpaswdval.innerHTML="Valid";
                   errorpaswdval.style.color="yellow";
                   return  myfunction1();
                   return true;
                }
               else{
                errorpaswdval.innerHTML="Password must contains(an uppercase,a lowercase,a digit and minimum 8 characters.";
                errorpaswdval.style.color="red";
                paswdval.style.background="white";
                           return false;
                  //     }
               return false;
      }

    }

    function myfunction1() 
      { 
          var regexpaswd1=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        //   if(regexpaswd1.test(paswdval.value))
        //   {
      //         //usernamev.focus();
              // errorpaswd.innerHTML="Valid";
          //  return  myfunction(paswd);
      //       return true;
      //     }
          if(paswdval.value.length<=10 && paswdval.value.length>=8)
          {
            errorpaswdval.innerHTML="poor";
              paswdval.style.background="red";
              errorpaswdval.style.color="yellow";
              return true;
              
          }
          //     // x.style.background = "yellow";
           
          //  }
          
     
      else if(paswdval.value.length>10 && paswdval.value.length<12)
      {
        errorpaswdval.innerHTML="medium";
        errorpaswdval.style.color="yellow";
          paswdval.style.background="orange";

          return true;
      }
      else if(paswdval.value.length>12){
        errorpaswdval.innerHTML="strong";
        errorpaswdval.style.color="yellow";
          paswdval.style.background="green";
         // errorpaswd.setAttribute="bold";
          return true;
                        }
      
            //} 
        }






//     if(genderval.value=="")
//     {
//       errorgenderval.innerHTML="Please enter Your last name";
//             // usernamev.focus();
          
//              return false;
//     }
//   else {
//       return gendervaldation();
//   }

  //var option=document.getElementsByName('yesno');
     
// if (!(option[0].checked || option[1].checked)) {
//     alert("Please Select Your Gender");
//     return false;
// }
// }

