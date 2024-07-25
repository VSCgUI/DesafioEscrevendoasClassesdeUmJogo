class hero{
    constructor(nome, idade, tipo){
        this.nome = nome,
        this.idade = idade,
        this.tipo = tipo
    }

    atacar(){
        let ataque
    
        switch(this.tipo){
            case 'Mago':
                ataque = 'Magia'
                break
            case 'Guerreiro':
                ataque = 'Espada'
                break
            case 'Monge':
                ataque = 'Artes Marciais'
                break
            case 'Ninja':
                ataque = 'Shuriken'
                break
            default:
                ataque = 'Mãos vazias'
        }
    
        console.log(`O ${this.tipo} atacou usando ${ataque}`)
    }


}

function atacar(){
    let ataque

    switch(novoHeroi.tipo){
        case 'Mago':
            ataque = 'Magia'
            break
        case 'Guerreiro':
            ataque = 'Espada'
            break
        case 'Monge':
            ataque = 'Artes Marciais'
            break
        case 'Ninja':
            ataque = 'Shuriken'
            break
        default:
            ataque = 'Mãos vazias'
    }

    console.log(`O ${novoHeroi.tipo} atacou usando ${ataque}`)
}

let novoHeroi = new hero('Ziggthy', '25 anos', 'Ninja')
console.log(novoHeroi.nome, novoHeroi.idade, novoHeroi.tipo)

atacar()







