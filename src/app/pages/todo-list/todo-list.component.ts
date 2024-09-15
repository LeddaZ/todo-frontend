import { Component, OnDestroy, OnInit } from '@angular/core'
import { TodoSourceService } from '../../services/todo-source.service'
import { ReplaySubject, Subject, switchMap, takeUntil } from 'rxjs'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html'
})
export class TodoListComponent implements OnInit, OnDestroy {
  showCompleted!: boolean

  protected destroyed$ = new Subject<void>()

  protected _todos$ = new ReplaySubject<void>()
  todos$ = this._todos$.pipe(
    switchMap(() => this.todoSrv.fetch(this.showCompleted)),
    takeUntil(this.destroyed$)
  )

  constructor(protected todoSrv: TodoSourceService) {}

  ngOnInit(): void {
    this._todos$.next()
  }

  ngOnDestroy(): void {
    this.destroyed$.next()
    this.destroyed$.complete()
  }

  onCheckboxChange(todo: [string, boolean, string]) {
    this.todoSrv.check(todo[0], todo[1], todo[2]).subscribe(() => {
      this._todos$.next()
    })
  }

  addTodo(data: [string, string, string]) {
    this.todoSrv.add(data[0], data[1], data[2]).subscribe(() => {
      this._todos$.next()
    })
  }

  updateShowCompleted() {
    this.showCompleted = !this.showCompleted
    this._todos$.next()
  }

  onAssign(data: [string, string]) {
    this.todoSrv.assign(data[0], data[1]).subscribe(() => {
      this._todos$.next()
    })
  }
}
