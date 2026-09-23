import { _Combatiente } from "./Combatiente";
import { _Escudo } from "./Escudo";
import { _EscudoConPorcentaje } from "./EscudoConPorcentaje";

export class _Buque implements _Combatiente {
  private vida: number = 3;
  private escudo: _Escudo;

  constructor(escudo: _Escudo = new _EscudoConPorcentaje(0)) {
    this.escudo = escudo;
  }

  disparar(objetivo?: _Combatiente): void {
    console.log("Buque dispara");
    objetivo?.recibirDisparo(1);
  }

  recibirDisparo(danio: number): void {
    const danioReal = this.escudo.proteger(danio) as number;
    this.vida -= danioReal;
  }

  estaVivo(): boolean {
    return this.vida > 0;
  }
}
