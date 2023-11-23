import { Component, OnInit } from '@angular/core';
import { Api1Service } from '../service/api1.service';
import { Api2Service } from '../service2/api2.service';
import { Api3Service } from '../service3/api3.service';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
data1: { nombre?: string, correo?: string, apellido?: string, id_cliente?:any } = {};
data2: any[] = [];
data3: any[] = [];
selectedOption: string = 'None';
  numeroAngular!: number;
constructor(private apiService: Api1Service, private apiService2: Api2Service, private apiService3: Api3Service ){}


ngOnInit(): void {

}

onIngresarNumeroAngular() {

  console.log('Número angular ingresado:', this.numeroAngular);
  this.llenarData(this.numeroAngular)
}

llenarData(parametro: number){

  this.apiService.getData(parametro).subscribe(data => {

    this.data1 = data;

    this.llenarData3(this.data1.id_cliente)
    this.llenarData2(this.data1.id_cliente)
    console.log(this.data1)
  })
}

llenarData2(parametro: number){

  this.apiService2.getData(parametro).subscribe(data => {

    this.data2 = data;

    console.log(this.data2)
  })
}

llenarData3(parametro: number){

  this.apiService3.getData(parametro).subscribe(data => {

    this.data3 = data;

    console.log(this.data3)
  })
}
onSelect(): void {
  // Lógica a ejecutar cuando se selecciona una opción
  console.log('Opción seleccionada:', this.selectedOption);
}
}
