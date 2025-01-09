// const date = new Date();
// const second = date.getHours() / 12 ;
// console.log(second);

//character counting
 const str = "Hello, World!";
 function characterCount (str) {
      let charList = {};
      for (let i = 0; i < str.length; i++) {
         

        let char = str[i].toLowerCase();
        //remove unnecessary character
          if(char === " " || char === '.' || char === ',' || char === '?' || char === '!') {
              console.log(typeof char)
               continue;
          }

        if (charList[char] > 0) {
            charList[char]++;
            } else {
                console.log(charList[char]);
                
                charList[char] = 1;
                }
         }
         return charList;
 }

 console.log(characterCount(str))