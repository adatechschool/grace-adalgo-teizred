/*
This function modifies a given word based on its ending.

If the word does not end with "ing",
the function should add "ing" to the end of the word.

If the word already ends with "ing",
the function should add "ly" instead.

The function should return the updated word.

For example:

ingly("play") => return "playing"

ingly("playing") => return "playingly"

ingly("swim") => return "swiming"
*/

// On exporte la fonction ingly qui prend un paramètre :
// - word : le mot à modifier
export const ingly = (word) => {
    // Si le mot est une empty string, on retourne simplement "ing"
    if (word === ""){
        return "ing";
    }
    // Si le mot se termine déjà par "ing" (ou "ING" en majuscules)
    // On ajoute "ly" à la fin (ou "LY" si le mot est tout en majuscules)
    // Ex: "playing" → "playingly", "PLAYING" → "PLAYINGLY"
    if (word.endsWith("ing") || word.endsWith("ING")){
        return word + (word === word.toUpperCase() ? "LY" : "ly");
    } else {
        // Sinon, le mot ne se termine pas par "ing"
        // On ajoute "ing" à la fin (ou "ING" si le mot est tout en majuscules)
        // Ex: "play" → "playing", "PLAY" → "PLAYING"
        return word + (word === word.toUpperCase() ? "ING" : "ing");
    }
};