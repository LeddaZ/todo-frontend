import { Component, OnDestroy, OnInit } from '@angular/core'
import { TodoSourceService } from '../../services/todo-source.service'
import { ReplaySubject, Subject, switchMap, takeUntil } from 'rxjs'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html'
})
export class TodoListComponent implements OnInit, OnDestroy {
  protected destroyed$ = new Subject<void>()

  protected _todos$ = new ReplaySubject<void>()
  todos$ = this._todos$.pipe(
    switchMap(() => this.todoSourceService.fetch()),
    takeUntil(this.destroyed$)
  )

  constructor(protected todoSourceService: TodoSourceService) {}

  ngOnInit(): void {
    this._todos$.next()
  }

  ngOnDestroy(): void {
    this.destroyed$.next()
    this.destroyed$.complete()
  }

  onCheckboxChange(todo: [string, boolean, string]) {
    this.todoSourceService.check(todo[0], todo[1], todo[2]).subscribe(() => {
      this._todos$.next()
    })
  }
}
