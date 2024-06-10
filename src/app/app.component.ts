import { Component, Injector, computed, effect, signal } from '@angular/core';
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
  constructor(private injector: Injector){
    this.counter.set(3)
    console.log(this.doubleCounter())
    this.counter.set(2)
    this.showCounter.set(true)
    console.log(this.doubleCounter())
    const a=effect(()=>{console.log('I changed'+this.counter())})       
    a.destroy()
  }
  customEffect(){
    this.counter.set(9)
    effect(()=>{console.log('I changed'+this.counter())},{injector:this.injector}) 
  }
  
}
