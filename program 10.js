function gcd(m,n) 
 {
     return  n > 0   ?  gcd(n,m%n) : m ; 
    } 
    document.write(gcd(92,16))
