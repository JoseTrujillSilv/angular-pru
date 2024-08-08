import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  result:number = 0;


  sum(p:HTMLElement){
    this.result++;
    this.colorParrafo(p);
  }

  rest(p:HTMLElement){
    this.result--;
    this.colorParrafo(p);
  }

  zero(p:HTMLElement){
    this.result=0;
    this.colorParrafo(p);
  }


  colorParrafo(p:HTMLElement){
      switch (true) {
        case this.result<0:
          p.style.color='red';
          break;
          case this.result===0:
            p.style.color='black';
            break;
            case this.result>0:
              p.style.color='green';
              break;
      }
  }

  
}
