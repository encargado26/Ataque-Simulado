import { Escudo } from "./Escudo";

export class EscudoConPorcentaje implements Escudo {
  private porcentaje: number;

  constructor(porcentaje: number) {
    this.porcentaje = porcentaje;
  }

  proteger(danio: number): number {
    return danio * (1 - this.porcentaje / 100);
  }

    reducirDanio(danio: number): number {
        return danio * (1 - this.porcentaje / 100);
    }
}