import { Component, Input } from '@angular/core'

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    standalone: false
})
export class FooterComponent {
  @Input()
  footerText!: string
}
