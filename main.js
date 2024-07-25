class hero{
    constructor(nome, idade, tipo){
        this.nome = nome,
        this.idade = idade,
        this.tipo = tipo
    }
    
}

let novoHeroi = new hero('Ziggthy', '25 anos', 'Mago')
console.log(novoHeroi.nome, novoHeroi.idade, novoHeroi.tipo)

if(novoHeroi.tipo === 'Mago'){
    console.log(`O ${novoHeroi.tipo} atacou usando Magia!`)
}else if(novoHeroi.tipo === 'Guerreiro'){
    console.log(`O ${novoHeroi.tipo} atacou usando Espada!`)
}else if(novoHeroi.tipo === 'Monge'){
    console.log(`O ${novoHeroi.tipo} atacou usando Artes Marciais!`)
}else if(novoHeroi.tipo === 'Ninja'){
    console.log(`O ${novoHeroi.tipo} atacou usando Shuriken!`)
}







