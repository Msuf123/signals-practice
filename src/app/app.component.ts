import { AsyncPipe, CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Injector, computed, effect, signal, untracked } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterOutlet } from '@angular/router';

      
;
import { interval,take, single,delay } from 'rxjs';



    
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'signals';
  counter=signal(1)
  counter_two=signal(2)
  siganlCounter?:any
  timmer=interval(500).pipe(take(50),delay(2000))
  showCounter=signal(false)
    doubleCounter=computed(()=>{
    
    return this.showCounter()?this.counter()*2:'None'
  
  })
  constructor(private injector:Injector,private http:HttpClient){
    this.counter.set(3)
    console.log(this.doubleCounter())
    this.counter.set(9)
    this.showCounter.set(true)
    console.log(this.doubleCounter())
    const a=effect(()=>{console.log('I changed'+untracked(this.counter),this.doubleCounter())})       
    this.siganlCounter=toSignal(this.timmer,{initialValue:20,injector:this.injector})
    
  }
  customEffect(){
    this.counter.update((a)=>++a)
    this.siganlCounter=toSignal(this.timmer,{initialValue:20,injector:this.injector})
    
  }
  cookie(){
    this.http.get('http://localhost:3000/oo',{responseType:'text',withCredentials:true,observe:'body'}).subscribe((a)=>{console.log(a)})
  }
  sendCookie(){
    this.http.get('http://localhost:3000/kk',{withCredentials:true,responseType:'text',observe:'body'}).subscribe((a)=>console.log(a))
  }
}
