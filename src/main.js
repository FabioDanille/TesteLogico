import {Network} from './modules/Network.js';

let network = new Network(8);

/* Realizando as conexoes */
network.connect(1, 2);
network.connect(1, 6);
network.connect(2, 1);
network.connect(2, 4);
network.connect(2, 6);
network.connect(4, 2);
network.connect(5, 8);
network.connect(6, 1);
network.connect(6, 2);
network.connect(8, 5);

/* Listando conexoes */
for(let i = 0; i < network.getElementos().length; i++){
    console.log(network.getElementos()[i]);
}

console.log('');

/* Testando respectivamente: "Nao conectado; Conectado diretamente; Conectado indiretamente" */
network.query(1,3);
network.query(1,2);
network.query(1,4);
