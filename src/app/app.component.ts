import { Component } from '@angular/core';
import {MyServiceService} from "./my-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private myService: MyServiceService){
    console.log(myService.variavel);
  }
}
