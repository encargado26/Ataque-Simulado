import { Escudo } from "./Escudo";

export class EscudoConPorcentaje implements Escudo {
  private porcentaje: number;

  constructor(porcentaje: number) {
    this.porcentaje = porcentaje;
  }

  reducirDanio(danio: number): number {
    const danioReducido = danio * (1 - this.porcentaje / 100);
    // Cada vez que se usa, el escudo pierde 50% de efectividad
    this.porcentaje = Math.max(0, this.porcentaje - 50);
    return danioReducido;
  }

  proteger(danio: number): unknown {
    return this.reducirDanio(danio);
  }
  }
