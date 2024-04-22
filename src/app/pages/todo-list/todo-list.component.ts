import { Component } from '@angular/core'
import { TodoSourceService } from '../../services/todo-source.service'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  todos$ = this.todoSourceService.fetch()

  constructor(private todoSourceService: TodoSourceService) {}

  onCheckboxChange(item: [string, boolean]) {
    this.todoSourceService.check(item[0], item[1])
  }
}
