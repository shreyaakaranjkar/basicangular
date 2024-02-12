import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appAdvancesCss]'
})
export class AdvancesCssDirective {

  constructor(private eleRef:ElementRef) { }
  @HostListener('mouseover') onMouseOver(){
    this.eleRef.nativeElement.style.backgroundColor='pink'
}
@HostListener('mouseout') onMouseOut(){
    this.eleRef.nativeElement.style.backgroundColor='greenyellow'
}

}

