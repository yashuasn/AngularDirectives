import { Directive, ElementRef, inject, input } from "@angular/core";

@Directive({
    selector: 'a[appSafeLink]',
    standalone: true,
    host: {
        '(click)': 'onConfirmLeavePage($event)'
    }

})
export class SafeLinkDirective {

    queryParam = input('myapp')
    private hostElementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef)
    constructor() {
        console.log("ASN YASH");
    }


    onConfirmLeavePage(e: MouseEvent) {
        const wantsToLeave = window.confirm("Are you sure");

        if (wantsToLeave) {
            const address = this.hostElementRef.nativeElement.href;
            this.hostElementRef.nativeElement.href = address + '?from=' + this.queryParam()

            return
        }
        e.preventDefault()
    }
}