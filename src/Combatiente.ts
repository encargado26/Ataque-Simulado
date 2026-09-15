export interface Combatiente {
    disparar(): void;
    recibirDisparo(danio: number): void;
    estaVivo(): boolean;
}