import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


@Injectable()
export class GlobalService {
  private name:String ;
  constructor(private httpModule : HttpClientModule) {
    console.log("hello somdatt");
  }

  postRequest(data:Object) {
    
  }
  getRequest(param : String) {
   
  }

}
