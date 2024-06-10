import { Component, Injector, computed, effect, signal, untracked } from '@angular/core';
import { RouterOutlet } from '@angular/router';
      
import _ from 'lodash';
import { single } from 'rxjs';
const data = signal(['test'], {equal: _.isEqual});
// Even though this is a different array instance, the deep equality
// function will consider the values to be equal, and the signal won't
// trigger any updates.
data.set(['test']);

    
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
  counter_two=signal(2)
  showCounter=signal(false)
  doubleCounter=computed(()=>{
    
    return this.showCounter()?untracked(this.counter)*2:'None'
  
  })
  constructor(private injector: Injector){
    this.counter.set(3)
    console.log(this.doubleCounter())
    this.counter.set(9)
    this.showCounter.set(true)
    console.log(this.doubleCounter())
    const a=effect(()=>{console.log('I changed'+untracked(this.counter),this.doubleCounter())})       
  
  }
  customEffect(){
    this.counter.update((a)=>++a)
    //effect(()=>{console.log('I changed'+this.counter())},{injector:this.injector}) 
  }
  
}
