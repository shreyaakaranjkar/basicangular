import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCreditCard]'
})
export class CreditCardDirective {

  constructor(private eleref : ElementRef) { }

@HostListener("input", ['$event'])
onInput(eve : Event){
  let inputCOntrol = eve.target as HTMLInputElement;
  let inputval = inputCOntrol.value;

  inputval = inputval.replace(/\s+/g,'')
  if(inputval.length>16){
    inputval = inputval.substring(0,16);
    // this.createmsgalert()
  }
    // console.log(inputval)
    inputval = this.chunkArr(inputval)
    console.log(inputval);    
 
  inputCOntrol.value = inputval;
  if(/[^\d]/.test(inputval)){
    inputCOntrol.nextElementSibling?.classList.remove('d-none')
  }
  else{
    inputCOntrol.nextElementSibling?.classList.add('d-none')
    this.createmsgalert()
  }
}

private chunkArr(num:string){
  let arr: Array<string>=[];

  for(let i=0;i<num.length;i+=4){
    arr.push(num.slice(i,i+4))
  }

  return arr.join(" ")

}

private createmsgalert(){
  let p = document.createElement("p");
  p.className = 'alert alert-danger';
  p.innerHTML = 'Please enter a valid card Number'
  this.eleref.nativeElement.parentNode.append(p)
}


}
