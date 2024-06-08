import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'signals';
  counter=signal(1)
  constructor(){
    console.log(this.counter())
    this.counter.set(4)
    this.counter.update(value => value + 1);
    console.log(this.counter())
  }
}
