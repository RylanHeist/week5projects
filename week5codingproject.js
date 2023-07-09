class CharacterClass {
    constructor(name, role)
        this.name = name;
        this.role = role

}

description() {
    return `The ${this.name} can play the ${this.role} role.`
}

class Faction {
    constructor(name, factionNumber){
        this.name = name
        this.characterNumber = []
    }

    addCharacter(character) {
        if (character instanceof Character) {
            this.character.push(character)
        } else {
            throw new Error(`Certain roles can only play on certaion factions. You cannot choose this character: ${character}`)
        }
    }


    description() {
        return `${this.name} has ${this.factionNumber.length} created characters.`
    }
}

class Menu {
    constructor() {
        this.factions = []
        this.selectedFaction = null
    }

    start() {
        let selected = this.showMainMenuOptions()
        while (selection != 0){
            switch (selection) {
                case '1':
                    this.createFaction()
                    break
                case '2'
                    this.viewFaction()
                    break
                case '3'
                    this.deleteFaction()
                    break
                case '4'
                    this.displayFactions()
                    break
                default:
                    selection = 0
            }
            selection = this.showMainMenuOptions()
        }
        alert('See ya pal!')
    }

    showMainMenuOptions() {
        return prompt(`
        0) Exit
        1) Create a new Faction
        2) View a Faction
        3) Delete a Faction
        4) Display all Factions
        `)
    }

    showFactionMenuOptions(factionInfo) {
        return prompt(`
        0) Back
        1) Create a Character
        2) Delete a Character
        -----------------------
        ${factionInfo}
        `)
    }

    displayFactions() {
        let factionString = ``
        for(let i = 0; i < this.factions.length; i++) {
            factionString += i + `) ` + this.factions[i].name + `\n`
        }
            alert(factionString)
    }

    createFaction() {
        let name = prompt(`Enter name for new Faction:`)
        this.factions.push(new Faction(name))
    }

    viewTeam() {
        let index = prompt(`Enter the index of the Faction you want to view:`)
        if (index > -1 && index < this.factions.length) {
            this.selectedFaction = this.factions[index]
            let description = `Team Name: ` + this.selectedFaction.name + `\n`

            for (let i = 0; i < this.selectedFaction.characters.length; i++){
                description += i = `) ` + this.selectedFaction.characters[i].name + ` - ` + this.selectedFaction.characters[i].role + `\n`
            }

            let selection = this.showFactionMenuOptions(description)
            switch (selection) {
                case `1`:
                    this.createCharacter()
                    break
                case `2`:
                    this.createCharacter()
            }
        }
    }
}

let menu = new Menu()
menu.start