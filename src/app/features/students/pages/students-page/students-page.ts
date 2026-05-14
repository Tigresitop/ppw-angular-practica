import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-students-page',
  imports: [RouterLink],
  templateUrl: './students-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudentsPage {
  readonly students = signal([
    { id: 1, name: 'John Doe'},
    { id: 2, name: 'Jane Smith'},
    { id: 3, name: 'Alice Johnson'},
    { id: 4, name: 'Pepito Alvarado'}
  ])

}
