const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const result = document.getElementById("result");
const savedWords = document.getElementById("savedWords");


searchBtn.addEventListener("click", function () {
     const word = searchInput.value;

     searchBtn.addEventListener("click", function () {
       const word = searchInput.value;

              fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
         .then((response) => response.json())
        .then((data) => {
           console.log(data);
         });
     });

});