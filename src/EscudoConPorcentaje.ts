import { Escudo } from "./Escudo";

export class EscudoConPorcentaje implements Escudo {
  private porcentaje: number;

  constructor(porcentaje: number) {
    this.porcentaje = porcentaje;
  }

  reducirDanio(danio: number): number {
    return danio * (1 - this.porcentaje);
  }
}