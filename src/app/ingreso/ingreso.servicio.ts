import { Ingreso } from "./ingreso.model";

export class IngresoServicio{

  ingresos: Ingreso[] =[
    new Ingreso("salario", 4000),
    new Ingreso("Venta coche", 500),
    new Ingreso("consultorias",100)
  ]

  eliminar(ingreso: Ingreso){
    const indice : number = this.ingresos.indexOf(ingreso)
    this.ingresos.splice(indice,1);
  }
}