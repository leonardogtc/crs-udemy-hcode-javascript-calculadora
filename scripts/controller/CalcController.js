// Classe CalcController - Uma classe é um conjunto de atributos e métodos
class CalcController {
    // Método construtor da classe
    /* O caracter de '_' antes do nome da propriedade indica que o método deveria ser privado. 
       Entretantto não existe uma forma de controlar isso em Javascript, é pura conveção do código.
       O que acontece é que quando o programador vê essa informação sabe que essa informação tem
       que ser tratada como private.
    */
    constructor() {
        this._displayCalc = "0";
        this.currentDate;
        this.initialize();
    }

    // Método para a inicialização de quqlquer coisa
    initialize() {

    }

    get displayCalc() {
        return this._displayCalc;
    }

    set displayCalc(value) {
        this._displayCalc = value;
    }

    get dataAtual() {
        return this.currentDate;
    }

    set dataAtual(value) {
        this.currentDate = data;
    }
}