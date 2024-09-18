import { Component, Injectable } from "@angular/core";



@Component({
  selector: 'app-counter',
  template: `
  <p>Counter: {{counter}}</p>
  <button (click)="increaseBy()" >+1</button>
  <button (click)="reseteo()">Reset</button>
  <button (click)="dincreaseBy()">-1</button>`,
})

export class CounterComponent{
  public counter:number = 10;

  increaseBy(): void {
    this.counter += 1;
  }
  dincreaseBy(): void {
    this.counter -= 1;
  }
  reseteo() {
    this.counter = 10;
  }
}
