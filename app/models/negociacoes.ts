// Listando as negociacoes 
import { Negociacao } from "./negociacao.js";

// Array tipificado em uma class, genericts 
export class Negociacoes {
    private negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao){
        this.negociacoes.push(negociacao);
    }

    lista(): readonly Negociacao[]{
        return this.negociacoes;
    }
}

const negociacoes = new Negociacoes();
negociacoes.lista().forEach(n =>{
    
});
