function count_Vowels()
    {
        //String str = in.nextLine();
        var count_Vowels = 0;
        var i = 0;
        str = document.getElementById("str.length").value;
        for (let i = 0; i < str.length; i++)
        {
            if (str.charAt(i) == 'a' || str.charAt(i) == 'e' || str.charAt(i) == 'i'
                    || str.charAt(i) == 'o' || str.charAt(i) == 'u')
            {
                i++;
            }
        }
        //return count;
        document.getElementById("res").innerHTML = "The number of vowel found in the textbox is:" + count ;
    }



    