import { Combatiente } from "./Combatiente";
import { Escudo } from "./Escudo";
import { EscudoConPorcentaje } from "./Escudoconporcentaje";

export class Soldado implements Combatiente {
    private vida: number = 1;
    private escudo: Escudo;

    constructor(escudo: Escudo = new EscudoConPorcentaje(100)) {
        this.escudo = escudo;
    }

    disparar(): void {
        console.log("Soldado dispara");
    }

    recibirDisparo(danio: number): void {
        const danioReal = this.escudo.proteger(danio) as number;
        this.vida -= danioReal;
    }

    estaVivo(): boolean {
        return this.vida > 0;
    }
}