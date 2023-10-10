<SCRIPTLanguage ="JavaScript">
     function tot() 
     { 
     var x = parseInt(document.Simple.first.value)
      var y = parseInt(document.forms[0].elements[1].value)
       document.Simple.sum.value = x + y
        }
         </SCRIPT>
          <FORM NAME="Simple"> 
          <INPUTTYPE ="TEXT" SIZE="4" NAME="first" VALUE=" "><BR> 
          <INPUTTYPE ="TEXT" SIZE="4" NAME="second" VALUE=" "><BR> 
          <INPUTTYPE ="BUTTON" VALUE="Click" onClick="tot();"><BR>
           <INPUTTYPE ="TEXT" NAME="sum"VALUE=" "><BR> 
           </FORM>