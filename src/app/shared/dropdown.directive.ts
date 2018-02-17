import { Directive, ElementRef, Renderer, HostListener  } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
 status= false
  constructor(private elref:ElementRef , private renderer : Renderer) { };
  @HostListener('click') buttonClick(eventData : Event){
    this.status = !this.status; 
    this.renderer.setElementClass(this.elref.nativeElement , 'open' , this.status );
  }
}
