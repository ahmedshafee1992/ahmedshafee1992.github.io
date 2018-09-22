



function print(a)
{
    document.getElementById("phonenumber").value+=a.value; 
}

function deleteNumber()
{
   var strng=document.getElementById("phonenumber").value;
   document.getElementById("phonenumber").value=strng.substring(0,strng.length-1)
   
}

function changeBackground(){
    var text=document.getElementById("Number10").style.backgroundColor="red";

}

function BackToNormal(){
    var text=document.getElementById("Number10").style.backgroundColor="";

}

function call()
{
    document.getElementById("LOGS").style.display="none";
    document.getElementById("FAVOURITES").style.display="none";
    document.getElementById("CONTACTS").style.display="none";
    document.getElementById("CREATEDiv").style.display="none";
    document.getElementById("defualt").style.display="block";  
}

function contact(){
document.getElementById("defualt").style.display="none";
document.getElementById("LOGS").style.display="none";
document.getElementById("FAVOURITES").style.display="none";
document.getElementById("CREATEDiv").style.display="none";
document.getElementById("CONTACTS").style.display="block";
}

function log()
{
    document.getElementById("defualt").style.display="none";
    document.getElementById("FAVOURITES").style.display="none";
    document.getElementById("CONTACTS").style.display="none";
    document.getElementById("CREATEDiv").style.display="none";
    document.getElementById("LOGS").style.display="block";    
}

function favourites()
{
    document.getElementById("defualt").style.display="none";
    document.getElementById("LOGS").style.display="none";
    document.getElementById("CONTACTS").style.display="none";
    document.getElementById("CREATEDiv").style.display="none";
    document.getElementById("FAVOURITES").style.display="block";
    
}


function myFunction() 
{
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";

        }
    }
}



function Creating()
{
      
    if(document.getElementById("phonenumber").value!="")
        {
      document.getElementById("defualt").style.display="none";
      document.getElementById("LOGS").style.display="none";
      document.getElementById("FAVOURITES").style.display="none";
      document.getElementById("CONTACTS").style.display="none";
      document.getElementById("CREATEDiv").style.display="block";
      document.getElementById("phonenumber").value+="#";
      
    }
       else 
       {
           alert("Plese insert the number first");
       }
}

function CreatContact()
{
   
    var CheckTypeNumber=document.getElementById("phonenumber").value;
    var stringLength = CheckTypeNumber.length; // this will be 16
    var lastChar = CheckTypeNumber.charAt(stringLength - 1);    
   
 if(lastChar=="*")
 {
    CreatContactFavorites();
 }
 else 
  {
    

  }

}

function CreateRegularContact()
{
   
    var CheckTypeNumber=document.getElementById("phonenumber").value;
    var stringLength = CheckTypeNumber.length; // this will be 16
    var FirstChar = CheckTypeNumber.charAt(0);    

    var counter=1;  
    var  NewContact=document.getElementById("insertdetails1").value ;
     NewContact+="  "+ document.getElementById("insertdetails2").value;
     
     var ul = document.getElementById("myUL2");
      var liS = document.getElementById("A");
      
      var li=document.createElement("li");
      var a=document.createElement("a");
      a.appendChild(document.createTextNode(NewContact))
      li.appendChild(a);
      li.setAttribute("id",++counter);
      

$('li.A').after(li);
      
      alert("Creating New  Contact");
       contact();

}
function CreatContactFavorites()
{
 var counter=1;  
  var  NewContact=document.getElementById("insertdetails1").value ;
   NewContact+="  "+ document.getElementById("insertdetails2").value;
    var ul = document.getElementById("myUL2");
    var li = document.createElement("li");
    var a=document.createElement("a");
    a.appendChild(document.createTextNode(NewContact))
    li.appendChild(a);
    li.setAttribute("id",++counter);
    ul.appendChild(li);
    alert("Creating New Favorite Contact");
    favourites();
}


      function play()
      {
            var audio = document.getElementById("audio");
            audio.play();
      }


      
    function calling()
      {
     if(document.getElementById("phonenumber").value !="")
     {
        document.getElementById("call").style.display="none";  
        document.getElementById("Cancel").style.display="block"; 
        
       alert("CALLING "+document.getElementById("phonenumber").value );
        
           var counter=1;
            var NewNumber=document.getElementById("phonenumber").value;

            var ul = document.getElementById("myUL1");
            var li = document.createElement("li");
            var a=document.createElement("a");
            a.appendChild(document.createTextNode(NewNumber))
            li.appendChild(a);
            li.setAttribute("id",counter++);
            ul.appendChild(li);
       }       
      } 
      

      function Canceling()
      {
        document.getElementById("Cancel").style.display="none";        
        document.getElementById("call").style.display="block";
        document.getElementById("phonenumber").value =""
      } 


      function CreateFavorites()
      {
        if(document.getElementById("phonenumber").value !="")
        {
            document.getElementById("defualt").style.display="none";
            document.getElementById("LOGS").style.display="none";
            document.getElementById("FAVOURITES").style.display="none";
            document.getElementById("CONTACTS").style.display="none";
            document.getElementById("CREATEDiv").style.display="block";
            document.getElementById("phonenumber").value+="*";
            
          }  
          else
          {
              alert("Plese insert the number first");
          }

      
      }
      

      function isNumberKey(evt)
      {
        var charCode = (evt.which) ? evt.which : event.keyCode
        if (charCode > 31 && (charCode < 48 || charCode > 57))
            return false;
        return true;
      }
    
   










































































