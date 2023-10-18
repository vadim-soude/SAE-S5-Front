import {Directive, ElementRef} from '@angular/core';
import {Router, RouterLink} from "@angular/router";

@Directive({
    selector: '[active]',
    standalone: true
})
export class ActiveDirective {
    constructor(private router : Router,private root : RouterLink,private elementRef: ElementRef) {
        // console.log(this.elementRef.nativeElement.route)
        //console.log(this.root["commands"][0])
        //this.elementRef.nativeElement.style.color = "red";
    }

}
