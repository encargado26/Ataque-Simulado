import { _Arma } from "./Arma";
import { _Combatiente } from "./Combatiente";

export class Canion implements _Arma {
  private municiones: number;

  constructor(municiones: number = 3) {
    this.municiones = municiones;
  }

  disparar(objetivo: _Combatiente): void {
    // Solo dispara si hay municiones, usando &&
    this.municiones > 0 && (
      objetivo.recibirDisparo(2), // cañón hace más daño
      this.municiones--
    );

    // Si no hay municiones, mostramos mensaje
    this.municiones <= 0 && console.log("El cañón no tiene municiones");
  }

  tieneMuniciones(): boolean {
    return this.municiones > 0;
  }
}
