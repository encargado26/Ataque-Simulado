import { _Arma } from "./Arma";
import { _Combatiente } from "./Combatiente";

export class Pistola implements _Arma {
  private municiones: number;

  constructor(municiones: number = 6) {
    this.municiones = municiones;
  }

  disparar(objetivo: _Combatiente): void {
    // Solo dispara si hay municiones, usando &&
    this.municiones > 0 && (
      objetivo.recibirDisparo(1),
      this.municiones--
    );

    // Si no hay municiones, mostramos mensaje
    this.municiones <= 0 && console.log("La pistola no tiene municiones");
  }

  tieneMuniciones(): boolean {
    return this.municiones > 0;
  }
}