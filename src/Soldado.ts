import { _Combatiente } from "./Combatiente";
import { _Escudo } from "./Escudo";
import { _EscudoConPorcentaje } from "./EscudoConPorcentaje";
import { _Arma } from "./Arma";
import { Pistola } from "./Pistola";

export class Soldado implements _Combatiente {
  private vida: number = 1;
  private escudo: _Escudo;
  private arma: _Arma;

  constructor(
    escudo: _Escudo = new _EscudoConPorcentaje(0),
    arma: _Arma = new Pistola()
  ) {
    this.escudo = escudo;
    this.arma = arma;
  }

  disparar(objetivo?: _Combatiente): void {
    console.log("Soldado dispara");
    objetivo && this.arma.disparar(objetivo);
  }

  recibirDisparo(danio: number): void {
    const danioReal = this.escudo.proteger(danio) as number;
    this.vida -= danioReal;
  }

  estaVivo(): boolean {
    return this.vida > 0;
  }
}