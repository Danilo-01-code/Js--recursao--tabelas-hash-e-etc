class Grafo {
    constructor() {
        this.adjacencyList = {}; // Objeto para armazenar listas de adjacência
    }

    addVertice(vertice) {
        if (!this.adjacencyList[vertice]) {
            this.adjacencyList[vertice] = []; // Inicializa o vértice com uma lista vazia de adjacências caso já não exista
        }
    }

    addAresta(vertice1, vertice2) {
        if (!this.adjacencyList[vertice1]) {
            this.addVertice(vertice1);
        }
        if (!this.adjacencyList[vertice2]) {
            this.addVertice(vertice2);  //vwerifica se vertice1 e 2 existem, caso não, são adcionados
        }

        // Adiciona vertice2 na lista de adjacência de vertice1 e vice-versa
        if (!this.adjacencyList[vertice1].includes(vertice2)) {
            this.adjacencyList[vertice1].push(vertice2);
        }
        if (!this.adjacencyList[vertice2].includes(vertice1)) {
            this.adjacencyList[vertice2].push(vertice1);
        }
    }

    printGrafo() {
        for (let vertice in this.adjacencyList) {
            console.log(`${vertice} -> ${this.adjacencyList[vertice].join(', ')}`);
        }
    }

    removeAresta(vertice1, vertice2) {
        if (this.adjacencyList[vertice1] && this.adjacencyList[vertice2]) {
            this.adjacencyList[vertice1] = this.adjacencyList[vertice1].filter(v => v !== vertice2);
            this.adjacencyList[vertice2] = this.adjacencyList[vertice2].filter(v => v !== vertice1);
        }
    }

    removeVertice(vertice) {
        if (this.adjacencyList[vertice]) {
            // Remove o vértice de todas as listas de adjacência
            for (let adjVertice of this.adjacencyList[vertice]) {
                this.adjacencyList[adjVertice] = this.adjacencyList[adjVertice].filter(v => v !== vertice);
            }
            // Remove o vértice do adjacencyList
            delete this.adjacencyList[vertice];
        }
    }
}


// Isso tudo foi só pra criar um grafo

let g = new Grafo();

g.addVertice('A')
g.addVertice('B')
g.addVertice('C')

g.addAresta('A', 'B')
g.addAresta('A', 'C')
g.addAresta('B', 'C')
g.removeVertice('A')
g.removeAresta('A','B')


g.printGrafo()
