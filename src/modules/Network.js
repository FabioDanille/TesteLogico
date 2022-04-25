import {Node} from './Node.js';

export class Network{
    _elementos = []

    constructor(tam){
        for(let i = 0; i < tam; i++){
            this._elementos[i] = new Node();
            this._elementos[i].setPosicao(i+1);
        }
        if(tam > 8 || tam <= 0 || typeof tam !== 'number'){ /* typeof sempre retorna string */
            throw new Error('Número de elementos inválido'); /*primeira excecao*/
        }
    }

    connect(posicao, vinculos){
        if(posicao > this._elementos.length || posicao <= 0 || typeof posicao !== 'number'){ 
            throw new Error('Posição inexistente'); /*segunda excecao*/
        }        
        this._elementos[posicao-1].setVinculos(vinculos);
    }

    getElementos(){
        return this._elementos
    }

    query(posicao, vinculoBuscado){

        //VALIDACOES
        if(posicao > this._elementos.length || posicao <= 0 || typeof posicao !== 'number'){
            throw new Error('Posição inexistente');
        }

        if(vinculoBuscado > this._elementos.length || vinculoBuscado <= 0 || typeof vinculoBuscado !== 'number'){
            throw new Error('Vínculo buscado inexistente');
        }

        let vinculos = this._elementos[posicao-1].getVinculos();

        //BUSCA DIRETA
        for(let i = 0; i < vinculos.length; i++){
            if(vinculos[i] === vinculoBuscado){
                console.log('Conectado diretamente');
                return true;
            }
        }
        
        //BUSCA INDIRETA
        for(let j = 0; j < vinculos.length; j++){
            let vinculoIndireto = this._elementos[vinculos[j]-1].getVinculos();
            for(let k = 0; k < vinculoIndireto.length; k++){
                if(vinculoIndireto[k] === vinculoBuscado){
                    console.log('Conectado indiretamente');
                    return true;
                }
            }
        }
        console.log('Não conectado');
        return false;
    }  
}
