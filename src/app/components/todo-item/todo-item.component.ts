import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Todo } from '../../entities/todo.entity'

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  @Input()
  todo: Todo | null = null

  @Output() checked = new EventEmitter<[string, boolean, string]>()

  onChange(id: string, event: Event, dueDate: string) {
    const checked = (event.target as HTMLInputElement).checked
    this.checked.emit([id, checked, dueDate])
  }
}
