import { Combatiente } from "./Combatiente";

export class Soldado implements Combatiente {
    private vida: number = 1;

    disparar(): void {
        console.log("Soldado dispara");
    }

    recibirDisparo(danio: number): void {
        this.vida -= danio;
    }

    estaVivo(): boolean {
        return this.vida > 0;
    }
}