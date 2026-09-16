import { Combatiente } from "./Combatiente";

export class Tanque implements Combatiente {
	private vida: number = 2;

	disparar(): void {
		console.log("Tanque dispara");
	}

	recibirDisparo(danio: number): void {
		this.vida -= danio;
	}

	estaVivo(): boolean {
		return this.vida > 0;
	}
}