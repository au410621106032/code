function display() {
     document.write("Name : "+ this.name +  "< BR>")
      document.write("Address  : "+ this.address +  "< BR>") 
    } 
    function person(name,address)  
         {
             this.name  = name
              this.address = address
               this.display = display
         }