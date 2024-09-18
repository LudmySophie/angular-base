import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'Iroman';
  public age: number = 45;

  get capitalizadName():string{
    return this.name.toUpperCase()
  }
  getHeroeDescripcion():string{
    return `${this.name} - ${this.age}`

  }
  cambiarNombre(): void {
    this.name='spiderman'



  }
  cambiarAge() {
    this.age = 25

  }

  resetForm():void{
    this.name='iroman';
    this.age=45

  }
}
