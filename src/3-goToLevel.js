/*
This function simulates an elevator system.

The elevator starts at floor 0.
Based on the starting floor and the destination floor,
it should move up or down accordingly.

The function should determine the direction of movement
and simulate the elevator reaching the desired floor.

For example: 
const start = 0
const end = 3
goToLevel(startFloor, FinalPosition) => return 3

const start = 3
const end = 0
goToLevel(startFloor, FinalPosition) => return -3
*/

// On exporte la fonction goToLevel qui prend 2 paramètres :
// - startFloor : l'étage de départ de l'ascenseur
// - FinalPosition : l'étage d'arrivée souhaité
export const goToLevel = (startFloor, FinalPosition) => {
    // Si l'étage de départ est inférieur à l'étage d'arrivée (l'ascenseur monte)
    // On retourne la différence : résultat positif (ex: 0 → 3 = +3)
    if (startFloor < FinalPosition) {
        return FinalPosition - startFloor;
    // Si l'étage de départ est supérieur à l'étage d'arrivée (l'ascenseur descend)
    // On retourne la différence : résultat négatif (ex: 3 → 0 = -3)
    } else if (startFloor > FinalPosition) {
        return FinalPosition - startFloor;
    // Sinon les deux étages sont égaux (l'ascenseur ne bouge pas)
    // On retourne 0 (pas de déplacement)
    } else {
        return FinalPosition - startFloor;
    }
};
