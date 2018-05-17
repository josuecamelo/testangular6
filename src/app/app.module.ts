import { BrowserModule } from '@angular/platform-browser';
import {NgModule, Injector} from '@angular/core';

//import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import {FormsModule} from "@angular/forms";
import {createCustomElement} from  '@angular/elements';

@NgModule({
  declarations: [
    //AppComponent,
    MessageComponent
  ],
  entryComponents:[ //component dinamico
    MessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  //bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector){
    const customElement = createCustomElement(MessageComponent, {injector});
    customElements.define('my-message', customElement);
  }

  ngDoBootstrap(){}
}
