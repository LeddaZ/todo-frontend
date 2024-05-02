import { Component, EventEmitter, Output } from '@angular/core'

@Component({
  selector: 'app-todo-modal',
  templateUrl: './todo-modal.component.html'
})
export class TodoModalComponent {
  minDate = Date()
  title!: string
  date!: string

  @Output() addTodo = new EventEmitter<[string, string]>()

  add() {
    this.addTodo.emit([this.title, this.date])
  }

  onDateChange(date: string) {
    this.date = date
  }

  reset() {
    this.title = ''
  }
}
