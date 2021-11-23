import { getPets, getWalkers } from "./database.js"

// Get copy of state for use in this module
let pets = getPets()
let walkers = getWalkers()


// Function whose responsibility is to find the walker assigned to a pet
const findWalker = (pet, allWalkers) => {
    let petWalker = null

    for (const walker of allWalkers) {
        if (walker.id === pet.walkerId) {
            petWalker = walker
        }
    }

    return petWalker
}

export const Assignments = () => {
    let assignmentHTML = ""
    assignmentHTML += "<ul>"

    for (const currentPet of pets) {
        let currentPetWalker = getWalkers(currentPet, walkers)
        
        assignmentHTML += `
            <li>
                ${currentPet.name} is being walked by
                ${currentPetWalker.name} in ${currentPetWalker.city}
            </li>
        `
    }

    assignmentHTML += "</ul>"

    return assignmentHTML
}

