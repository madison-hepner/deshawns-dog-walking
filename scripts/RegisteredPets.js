import { getPets } from "./database.js"

let pets = getPets()

export const RegisteredPets = () => {
    let petHTML = "<ul>"

    for (const pet of pets) {
        petHTML += `<li>${pet.name}</li>`
    }

    petHTML += "</ul>"
    return petHTML
}

