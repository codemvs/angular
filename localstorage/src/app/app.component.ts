import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    //this.grabarLocalStorage();
    this.obtenerLocalStorage();
    this.deleteLocalStorage();
  }
  obtenerLocalStorage(){
    let nombre=localStorage.getItem("nombre");
    let persona=localStorage.getItem("persona");

    console.log(nombre);
    console.log(JSON.parse(persona));

  }
  grabarLocalStorage() {

    let nombre:string = "Salvador";
    let persona = {
      nombre:"Juan",
      edad: 18,
      coordenadas: {
        lat:10,
        lng:-10
      }
    }

    localStorage.setItem("nombre",nombre);
    localStorage.setItem("persona",JSON.stringify(persona));
  }

  deleteLocalStorage() {
    localStorage.removeItem("nombre");
    localStorage.removeItem("persona");
  }

}
