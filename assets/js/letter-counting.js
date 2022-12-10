// Essas duas funções precisam retornar True
// para ser considerada uma palavra
function atLeastTwoCharacter(text) {
    const letters = text.match(/[a-z]/gi) || [];  //Em caso de retonar um null, retorna um array vazio 

        return letters.length >= 2;
}

function abscenceOfThreeConsecutiveCharacters(text) {
    for (const character of text) {
        const occurrences = Array.from(text).filter(v => v == character).length;

        if (occurrences >= 3) {
            return false;
        }        
    }

    return true;
}

const checks = [atLeastTwoCharacter, abscenceOfThreeConsecutiveCharacters];
const textInput = document.querySelector(".text-input");
const wordCountElement = document.querySelector(".word-count");
const letterCountElement = document.querySelector(".letter-count");
const spaceCountElement = document.querySelector(".space-count");

textInput.addEventListener("input", () => {
    const splitted = textInput.value.trim().split(/[\s-]/);
    const letterCount = (textInput.value.match(/[a-z]/gi) || []).length;
    const spaceCount = (textInput.value.match(/\s+/g) || []).length;
    let wordCount = 0;

        outer:
        for (const text of splitted) {
            for (const check of checks) {
                if(!check(text)) {
                    continue outer;
                }
            }
            wordCount++;
        }  
        
    wordCountElement.textContent = wordCount;
    letterCountElement.textContent = letterCount;
    spaceCountElement.textContent = spaceCount;
    
});