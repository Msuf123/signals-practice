import { Component, computed, effect, signal } from '@angular/core';
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
  showCounter=signal(false)
  doubleCounter=computed(()=>{
    
    return this.showCounter()?this.counter()*2:'None'
  
  })
  constructor(){
    this.counter.set(3)
    console.log(this.doubleCounter())
    this.counter.set(2)
    this.showCounter.set(true)
    console.log(this.doubleCounter())
   effect(()=>{console.log('I changed')})       
  }
  
}
