import { Component } from '@angular/core'
import { AuthService } from './services/auth.service'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    standalone: false
})
export class AppComponent {
  title = 'todo-frontend'

  currentUser$ = this.authSrv.currentUser$

  constructor(protected authSrv: AuthService) {}

  logout() {
    this.authSrv.logout()
  }
}
