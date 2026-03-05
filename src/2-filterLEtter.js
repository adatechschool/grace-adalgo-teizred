/*
This function checks whether a given argument is a letter or not.

The function takes three parameters:

- arg: the value to check
- call: a callback function executed if the argument is a letter
- call2: a callback function executed if the argument is NOT a letter

If the argument is not a number, the function should execute the first callback.
If the argument is a number, the function should execute the second callback.

The function should return the result of the executed callback.

For example:

filterLetter("a", callback1, callback2)
// should execute callback1

filterLetter("8", callback1, callback2)
// should execute callback2
*/

// On exporte la fonction filterLetter qui prend 3 paramètres :
// - arg : la valeur à vérifier (lettre ou chiffre)
// - call : le callback à exécuter si c'est une lettre
// - call2 : le callback à exécuter si c'est un chiffre

export const filterLetter = (arg, call, call2) => {
    // isNaN(arg) retourne true si arg n'est PAS un nombre
    // (= c'est une lettre ou un caractère spécial)
    if (isNaN(arg)) {
         // si c'est une lettre/caractère,
         //  on appelle le 1er callback avec arg et on retourne le résultat
        return call(arg);
    }else{
       // Sinon (c'est un chiffre), on appelle le 2ème callback avec arg et on retourne le résultat
        return call2(arg);
    }
};
