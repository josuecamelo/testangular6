import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' //já é registrado automagicamente, nao precisa adicionar no app.module.ts
})
export class MyServiceService {
  variavel = 'teste';
  constructor() { }
}
