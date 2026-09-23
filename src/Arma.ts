import { _Combatiente } from "./Combatiente";

export interface _Arma {
  disparar(objetivo: _Combatiente): void;
  tieneMuniciones(): boolean;
}