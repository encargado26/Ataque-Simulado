export interface _Combatiente {
    disparar(): void;
    recibirDisparo(danio: number): void;
    estaVivo(): boolean;
}