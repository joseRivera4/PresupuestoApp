import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrl: './cabecero.component.css'
})
export class CabeceroComponent implements OnInit{

  @Input() presupuestoTotal:number;
  @Input()  IngresoTotal: number;
  @Input()  egresoTotal:number
  @Input()  porcentageTotal: number;


  constructor(){

  }
  ngOnInit(): void {
    
  }

}
