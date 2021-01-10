// input code here
const input = document.getElementsByClassName("otp");
const btn = document.getElementById("btn");

function infunn(){
   for(var i=0;i<input.length;++i){
       input[i].onkeyup = function(e){
           if(e.ctrlKey && e.keyCode == 86){
               var data = this.value;
                for(var j=0;j<6;++j){
                  input[j].value = data[j];
                    alert(data);
               }  
               }
       }
       input[i].onpaste = function(){
           var tag = this;
           setTimeout(function(){fpaste(tag.value)},100);
       }
       input[i].onkeydown = function(e){
    //left arrow key code 
    if (e.keyCode == 37) { 
       var intag = Number(sessionStorage.getItem("ifocus"));
         if(intag <= 0){
              input[5].focus();
             sessionStorage.setItem("ifocus",6);
         }
         else{
             --intag;
         input[intag].focus();
              sessionStorage.setItem("ifocus",intag);
         }
    }
    //left arrow key code
    else if (e.keyCode == 39) { 
       var intag = Number(sessionStorage.getItem("ifocus"));
         if(intag >= 6){
              input[0].focus();
             sessionStorage.setItem("ifocus",1);
         }
         else{
         input[intag].focus();
             ++intag;
              sessionStorage.setItem("ifocus",intag);
         }
    }
    else if(e.keyCode == 13){
         // enter key code
         var intag = Number(sessionStorage.getItem("ifocus"));
         if(intag >= 6){
              btn.click();
         }
         else{
         input[intag].focus();
             ++intag;
              sessionStorage.setItem("ifocus",intag);
         }
     }
    else if(e.keyCode == 8){
       var intag = Number(sessionStorage.getItem("ifocus"));
        if(intag == 6){
            -- intag;
           }
         if(input[intag].value == ""){
             --intag;
         input[intag].focus();
              sessionStorage.setItem("ifocus",intag);
         }
    }
    else if(e.ctrlKey && e.keyCode == 86){
       // alert(this.value);
    }
    else{
        autococus(this);
    }
           
}
     input[i].onclick = function(){
         var ind = this.getAttribute("dindex");
          sessionStorage.setItem("ifocus",ind);
      } 
   
};
    
} 


// start auto focus input code
function autococus(tag){
    var ind = Number(tag.getAttribute("dindex"));
    sessionStorage.setItem("ifocus",ind);
           if(tag.value.length >= 1){
            if(ind != 6){
               input[ind].focus();
            }
       }
}




   infunn();
// confirm code
function confirm(){
    sessionStorage.removeItem("ifocus");
    var alert = document.getElementById("alert");
      btn.focus();
    alert.style.display = "block";
    setTimeout(function(){alert.style.display = "none";},4000);
}

//paste otp
function fpaste(tag){
      for(var j=0;j<6;++j){
       input[j].value = tag[j];
     }
}
    // end paste code