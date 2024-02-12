import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBasicCss]'
})
export class BasicCssDirective {

  constructor(private eleref : ElementRef,
    private renderer : Renderer2){}

ngOnInit(): void {
console.log(this.eleref.nativeElement);
this.eleref.nativeElement.style.color='red';
this.eleref.nativeElement.style.padding = '10px';

//to sanitize the data renderer is used

this.renderer.setStyle(this.eleref.nativeElement,'background-color','blueviolet');
this.renderer.addClass(this.eleref.nativeElement,'alert')
}

}
