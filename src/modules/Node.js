export class Node{  
    _vinculos = [];
    _posicao;

    getPosicao(){
        return this._posicao
    }
    
    setPosicao(posicao){
        this._posicao = posicao
    }

    getVinculos(){
        return this._vinculos
    }

    setVinculos(vinculos){
        this._vinculos.push(vinculos) 
    }
}
