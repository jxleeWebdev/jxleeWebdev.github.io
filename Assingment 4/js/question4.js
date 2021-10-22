function palindrome() {
        var a= document.getElementById("pa").value;  
        var b = "";  
        for (i = a.length-1; i >= 0; i--)  {  
        b = b + a[i]  
        }  
        if (a == b) {
            document.getElementById("pa2"). value = b + " is a Palindrome String "; 
        } else {
            document.getElementById("pa2"). value = b + " is not a Palindrome String";
        } 
        
} 