import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { TodoItemComponent } from './components/todo-item/todo-item.component'
import { TodoListComponent } from './pages/todo-list/todo-list.component'
import { HttpClientModule } from '@angular/common/http'
import { TodoSourceService } from './services/todo-source.service'
import { FormsModule } from '@angular/forms'
import { HeaderComponent } from './components/header/header.component'
import { FooterComponent } from './components/footer/footer.component'
import { TodoModalComponent } from './components/todo-modal/todo-modal.component'
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap'
import { DatepickerComponent } from './components/datepicker/datepicker.component'

@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    TodoListComponent,
    HeaderComponent,
    FooterComponent,
    TodoModalComponent,
    DatepickerComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, NgbDatepickerModule],
  providers: [TodoSourceService],
  bootstrap: [AppComponent]
})
export class AppModule {}