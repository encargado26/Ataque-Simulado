import { _Escudo } from "./Escudo";

export class _EscudoConPorcentaje implements _Escudo {
  private porcentaje: number;

  constructor(porcentaje: number) {
    this.porcentaje = porcentaje;
  }

  reducirDanio(danio: number): number {
    const danioReducido = danio * (1 - this.porcentaje / 100);
    // Cada disparo reduce 25% de efectividad
    this.porcentaje = Math.max(0, this.porcentaje - 25);
    return danioReducido;
  }

  proteger(danio: number): number {
    return this.reducirDanio(danio);
  }
}