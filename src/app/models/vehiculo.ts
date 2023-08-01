import { Tecnico } from "./tecnico";

export class Vehiculo {
    id!: number;
    patente!: string;
    modelo!: string;
    marca!: string;
    createAt!: string;
    tecnico: Tecnico[] = [];
}
