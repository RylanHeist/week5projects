class Character {
    constructor(name, role) {
        this.name = name
        this.role = role
    }
//creating the Character class

    description() {
        return '${this.name} chooses the role of ${this.role} when playing dungeons and raids.'
    }
}

class Guild {
    constructor(name) {
        this.name = name
        this.characters = []
    }
//creating the Guild class

    addCharacter(character) {
        if (character instanceof Character) {
            this.characters.push(character)
        } else {
          throw new Error('You can only create characters. This is not a character: ${character}')
        }
    }

    describe() {
        return '${this.name} has ${this.characters.length} characters fighting for them.'
    }
}

class Menu {
    constructor() {
        this.guilds = []
        this.selectedGuild = null
    }
// starting the Menu class that will hold all the selection and function information

    start() {
        let selection = this.showMainMenuOptions()
        while (selection != 0) {
            switch (selection) {
                case `1`:
                    this.createGuild()
                    break
                case `2`:
                    this.viewGuild()
                    break
                case `3`:
                    this.deleteGuild()
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
        1) Create new Guild
        2) View Guild
        3) Delete Guild
        `)
    }
//this give all the options for the starting prompt window

    showGuildMenuOptions(guildInfo) {
        return prompt(`
        0) Back
        1) Create Character
        2) Delete Character
        --------------------
        ${guildInfo}
        `)
    }
// creating the next window for the guild options
    createGuild() {
        let name = prompt('Enter name of your guild:')
        this.guilds.push(new Guild(name))
    }

    viewGuild() {
        let index = prompt('Enter the index of the guild you wish to view:')
        if (index > -1 && index < this.guilds.length) {
            this.selectedGuild = this.guilds[index]
            let description = 'Guild Name: ' + this.selectedGuild.name + '\n'

            for (let i = 0; i < this.selectedGuild.characters.length; i++) {
                description += i + ') ' + this.selectedGuild.characters[i].name
                 + ' - ' + this.selectedGuild.players[i].role + '\n'              
            }
            let selection = this.showGuildMenuOptions(description)
            switch (selection) {
                case '1':
                    this.createCharacter()
                    break
                case '2':
                    this.deleteCharacter()
            }
        } 
    }
// created the view guild option to find the index of the guild you want to see

    deleteGuild() {
        let index = prompt('Enter the index of the Guild you wish to delete: ')
        if (index > -1 && index < this.guilds.length) {
            this.guilds.splice(index, 1)
        }
    }

    createCharacter() {
        let name = prompt('Enter name for new character:')
        let role = prompt('Enter the role of the new character:')
        this.selectedGuild.characters.push(new Character(name, role))
    }

    deleteCharacter() {
        let index = prompt('Enter the index of the player you want to delete:')
        if (index > -1 && index < this.selectedGuild.characters.length) {
            this.selectedGuild.characters.splice(index, 1)
        }
    }
}
// created the options on the view guild page to create and delete characters and guilds
 
let menu = new Menu()
menu.start()