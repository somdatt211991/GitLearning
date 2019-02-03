import { Component, EventEmitter, Output, Input} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
 @Output() featureselected = new EventEmitter<string>();
 
 @Input()getName:String ; 
 onSelect(features:string){
   this.featureselected.emit(features);
 }
}
