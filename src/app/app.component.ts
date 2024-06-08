import { Component, computed, signal } from '@angular/core';
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
  doubleCounter=computed(()=>this.counter()*2)
  constructor(){
    console.log(this.counter.set(3))
    console.log(this.doubleCounter())
    
  }
}
