function validateform()
{
   var password=document.myform.password.value;
   if (password == "") {
            alert("Please enter your password");
             password.focus();
             return false;
   }
   if(password.length!= ""){
      var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;                
          if(regex.test(password) === false) 
          {   
               alert("Password should be atleast 8 characters");
               alert("It should be atleast one uppercase,one special character,numbers");
           return false;
         }       
    }
}


function validationform()
{
   var password=document.myform.password.value;
   var password1=document.myform.password1.value;

   if (password == "") {
            alert("Please enter your password");
             password.focus();
             return false;
   }
   if(password.length!= ""){
      var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;                
          if(regex.test(password) === false) 
          {   
               alert("Please Enter a valid password");
               alert("It should be atleast one uppercase,one special character,numbers");

           return false;
         }       
    }
    if(password != password1){
      alert("Password mismatch");
            return false;
    }
}

function validateadminform()
{
  var name=document.myform.name.value;
   var password=document.myform.password.value;
   if (name==null || name==""){  
    alert("Name must be filled out");  
    return false;  
  }
   if (password == "") {
            alert("Please enter your password");
             password.focus();
             return false;
   }
   if(password.length!= ""){
      var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,8})/;                
          if(regex.test(password) === false) 
          {   
               alert("Password should be atleast 8 characters");
               alert("It should be atleast one uppercase,one special character,numbers");
           return false;
         }       
    }
}

function validatefeedbackform()
{
   var name=document.myform.name.value;
   var radios = document.getElementsByName("feed1");
   var formValid = false;
   if (name==null || name==""){  
    alert("Name must be filled out");  
    return false;  
  }

    var i = 0;
    while (!formValid && i < radios.length) {
        if (radios[i].checked) formValid = true;
        i++;        
    }

    if (!formValid) 
    alert("Must check some option!");
   /* alert("Please choose FeedbackType: Comments or BugReport or Questions");*/
    return formValid;

}

function validatecontactform()
{
  var name=document.myform.name.value;
  
   if (name==null || name==""){  
    alert("Name must be filled out");  
    return false;  
  }
}

function validatesignupform()
{
   var name=document.myform.name.value;
   var password=document.myform.password.value;
   var phone=document.myform.phone.value;
   var radios = document.getElementsByName("feed");
   var formValid = false;
   if (name==null || name==""){  
    alert("Name must be filled out");  
    return false;  
  }

    var i = 0;
    while (!formValid && i < radios.length) {
        if (radios[i].checked) formValid = true;
        i++;        
    }

    if (!formValid) {
    alert("Must check some option!");
   /* alert("Please choose FeedbackType: Comments or BugReport or Questions");*/
    return formValid;
  }
    if (password == "") {
      alert("Please enter your password");
       password.focus();
       return false;
    }
       if(password.length!= ""){
        var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;                
    if(regex.test(password) === false) 
    {   
         alert("Password should be atleast 8 characters");
         alert("It should be atleast one uppercase,one special character,numbers");
     return false;
   }       
  }
  if (phone.length!= "") {
          var regex = /^(?=. *[0-9])(?=.{10,})/;
          if(regex.test(phone) === false)
          {
            alert("Phone number must be filled.");
            return false;
          }
          if(phone.length < 10)
          {
             alert("Make sure is that mobile number should be 10 digit.")
             return false;
          }
  }

}

function start2()
	{
	document.getElementById("move").addEventListener("mousemove", moveone, false );
	document.getElementById("move").addEventListener("mouseout", leaveone, false );
	}
	
	function moveone()
	{
	document.getElementById("move").innerHTML ="Engineering Admission Predictor";
	}

	function leaveone()
	{
	document.getElementById("move").innerHTML ="About us";
	}
	window.addEventListener( "load", start2, false );


  window.addEventListener( "load", start, false );
	
	function start()
	{
	document.getElementById("picture").addEventListener("mouseover", over, false );
	document.getElementById("picture").addEventListener("mouseout", out, false );
	}

	function over()
	{
	 document.getElementById("picture").setAttribute( "src", "clg-5.avif");
	}

	function out()
	{
	document.getElementById("picture").setAttribute( "src", "clg-1.avif");
	}

  function moveone1()
	{
	document.getElementById("move1").innerHTML ="STUDENT LOGIN";
	}
//FormEvent//
  window.addEventListener( "load", start3, false );
  function start3()
  {
    document.getElementById("myform").addEventListener("submit",subfun, false );
    document.getElementById("myform").addEventListener("reset",resetfun, false );
    }

function subfun() 
  { window.alert("Are you Sure to submit");
      window.alert("Thank you");
  }
  function resetfun() 
    { 
      window.alert("Are you Sure to reset")
    }


    window.addEventListener( "load", start4, false );
    function start4()
    {
    document.getElementById("fname").addEventListener("focus",focusone, false );
    document.getElementById("fname").addEventListener("blur", blurone, false );
    document.getElementById("pwd").addEventListener("focus",focustwo, false );
    document.getElementById("pwd").addEventListener("blur", blurone, false );
    document.getElementById("em").addEventListener("focus",focusthree, false );
    document.getElementById("em").addEventListener("blur", blurone, false );
    document.getElementById("phno").addEventListener("focus",focusfour, false );
    document.getElementById("phno").addEventListener("blur", blurone, false );
    document.getElementById("myform").addEventListener("submit",subfun, false );
    document.getElementById("myform").addEventListener("reset",resetfun, false );
    }
    
    function focusone() 
    {document.getElementById("help").innerHTML="Enter name" ;
    }
    
    function focustwo() 
    {document.getElementById("help").innerHTML="Enter password" ;
    }
    function focusthree() 
    {document.getElementById("help").innerHTML="Enter email" ;
    }
    function focusfour() 
    {document.getElementById("help").innerHTML="Enter mobile number" ;
    }
    function blurone() 
    { document.getElementById("help").innerHTML="" ;
    }
    function subfun() 
    { window.alert("Are you Sure to submit");
      window.alert("Thank you");
    }
    function resetfun() 
    {window.alert("Are you Sure to reset")}