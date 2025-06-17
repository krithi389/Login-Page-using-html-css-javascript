
var one=document.querySelector(".one")
var two=document.querySelector(".two")
var three=document.querySelector(".three")
var four=document.querySelector(".four")




var but=document.querySelector(".but")

but.addEventListener("click",function (event){
    event.preventDefault()
var usererror=document.querySelector(".usererror").value.trim()
var mailerror=document.querySelector(".mailerror").value.trim()
var passerror=document.querySelector(".passerror").value.trim()
var confirmerror=document.querySelector(".confirmerror").value.trim()

var isvalid=true

    var userpattern=/^[A-Za-z]+ [A-Za-z]+$/
    const emailPattern =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
     
    if(usererror==""){
        one.innerHTML="*User Name is Required"
        isvalid=false
    }
    else if(userpattern.test(usererror)){
        one.innerHTML=""
        isvalid=true
    }
    else
    {
        one.innerHTML="*Enter Your Full Name"
        isvalid=false
    }
    
    
    
    if(mailerror==""){
        two.innerHTML="*E-mail is Required"
        isvalid=false
    }
    else if(emailPattern.test(mailerror)){
        two.innerHTML=""
         isvalid=true
    }
    else{
        two.innerHTML="*E-mail is invalid"
        isvalid=false
    }


    if(passerror=="")
    {
        three.innerText="*Password is Required"
        isvalid=false
    }
    else if(passerror.length>=6 && passerror.length<=10)
    {
        three.innerHTML=""
         isvalid=true
    }
    
    else 
    {
        three.innerHTML="*Password should contain atleast one number,one Uppercase,one Lowercase, one SpecialCharacter and Password Should be mimimum of 4 characters to maximum of 10 characters"
        V
    }

    if(confirmerror=="")
    {
        four.innerHTML="*Confirm-Password is Required"
        isvalid=false
    }
    else if(confirmerror==passerror)
    {
        four.innerHTML=""
         isvalid=true
    }
    else
    {
         four.innerHTML="*Confirm-Password is not Matching to Password"
         isvalid=false
    
    }
    if(isvalid)
    {
        alert(`Hi! ${usererror} your Welcome to our Website`)
    }
    

    
    
    
    
   





})