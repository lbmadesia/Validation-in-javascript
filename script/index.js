const allinput = document.getElementsByClassName("otp");

for(var i=0;i<allinput.length;++i){
    allinput[i].onkeyup = function(e){
        if(e.keyCode == 8){
            back(this);
        }
        else if (e.keyCode == 37) { 
            back(this);
        }
        else if (e.keyCode == 39) {
            jump(this);
        }
        else if(e.ctrlKey && e.keyCode == 86){
            pasteData(this.value);
         }
         else{
            jump(this);
        }
    }
}
// code to move focus to another input
    function jump(tag){
             var index = Number(tag.getAttribute("dindex"));
            if(index == 6){
                confirm();
            }
            else{
                allinput[index].focus();
            }
    }
 
 //===========================================================================================================

 // code to delete value and jump focus in previous input when press backspace
function back(tag){
        var index = Number(tag.getAttribute("dindex"));
         if(index != 1){
            index -=2;
            allinput[index].focus();
         }
}
// ===================================================================
// start paste data from clipboard
function pasteData(tag){
     for(var i=0;i<tag.length && i<6;++i){
        allinput[i].value = tag[i];
      }
}
//=================================================================

    // start submit here
    function confirm(){
        alert("confirm");
    }