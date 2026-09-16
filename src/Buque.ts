import { _Combatiente,} from "./Combatiente";

export class _Buque implements _Combatiente {
	private vida: number = 3;

	disparar(): void {
		console.log("Buque dispara");
	}

	recibirDisparo(danio: number): void {
		this.vida -= danio;
	}

	estaVivo(): boolean {
		return this.vida > 0;
	}
}