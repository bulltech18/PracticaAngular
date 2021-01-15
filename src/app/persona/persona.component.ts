import { Component, OnInit } from '@angular/core';
import { Persona } from './clases/persona';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  public nombre: string;
  public apellido: string;
  public sexo: string;
  public edad: number;
  public persona: Persona;

  constructor() { 
    this.persona = new Persona()
    this.nombre = this.persona.getNombre("Angel");
    this.apellido = this.persona.getApellido("Del Toro");
    this.sexo = this.persona.getSexo("Masculino");
    this.edad = this.persona.getEdad(18);
  }

  ngOnInit(): void {
  
  }
  

}
