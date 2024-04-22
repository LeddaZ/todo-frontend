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

  @Output() checked = new EventEmitter<[string, boolean]>()

  isChecked: boolean = false

  onChange(id: string, event: any) {
    const checked = (event.target as HTMLInputElement).checked
    this.checked.emit([id, checked])
  }
}
