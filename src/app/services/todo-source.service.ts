import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Todo } from '../entities/todo.entity'
import { BehaviorSubject, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TodoSourceService {
  private _todos$ = new BehaviorSubject<Todo[]>([])
  todos$ = this._todos$.asObservable()

  constructor(private http: HttpClient) {
    this.fetch().subscribe((todos) => this._todos$.next(todos))
  }

  fetch(): Observable<Todo[]> {
    return this.http.get<Todo[]>('/api/todos')
  }

  check(id: string, checked: boolean) {
    if (checked) {
      this.http.patch<Todo>(`/api/todos/${id}/check`, { completed: checked }).subscribe()
    } else {
      this.http.patch<Todo>(`/api/todos/${id}/uncheck`, { completed: checked }).subscribe()
    }
  }
}
