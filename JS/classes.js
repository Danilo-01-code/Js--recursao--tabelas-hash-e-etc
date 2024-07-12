class Pessoa {
    constructor(nome,idade){ //Método especial chamado ao criar uma nova instância da classe.
        this.nome= nome
        this.idade= idade
    }
    saudacao(){               // Funções definidas dentro da classe que operam sobre as instâncias.
        console.log(`Olá meu nome é ${this.nome} e eu tenho ${this.idade} anos`)
    }
    aniversário(){
        this.idade++
        console.log(`Parabéns para mim, agora eu tenho ${this.idade} anos.`)
    }
}
var pessoa1 = new Pessoa('João',25)

var pessoa2 = new Pessoa('Anny Gabriely',20)

pessoa2.saudacao()
pessoa2.aniversário()