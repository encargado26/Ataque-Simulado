import { _Combatiente } from "./Combatiente";

export class _Tanque implements _Combatiente {
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