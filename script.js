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
           const wordFound = data[0].word;
           const phonetic = data[0].phonetic;
           const partOfSpeech = data[0].meanings[0].partOfSpeech;
           const definition = data[0].meanings[0].definitions[0].definition;
           const example = data[0].meanings[0].definitions[0].example;
           
            result.innerHTML = `
                <h2>${wordFound}</h2>
                <p><strong>Pronunciation:</strong> ${phonetic}</p>
                <p><strong>Part of Speech:</strong> ${partOfSpeech}</p>
                <p><strong>Definition:</strong> ${definition}</p>
                <p><strong>Example:</strong> ${example || "No example available."}</p>
            `;
            
            
         });
     });

});