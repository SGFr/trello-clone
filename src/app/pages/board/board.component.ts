import { Component } from '@angular/core';
import {
  CdkDragDrop,
  DragDropModule,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Dialog, DialogModule } from '@angular/cdk/dialog';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { Column, ToDo } from '../../models/todo.model';
import { TodoDialogComponent } from '../../components/todo-dialog/todo-dialog.component';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [DragDropModule, NavbarComponent, DialogModule],
  templateUrl: './board.component.html',
  styles: [
    `
      .todo-item {
        font-size: 0.875rem;
      }

      .cdk-drag-preview {
        box-sizing: border-box;
        border-radius: 4px;
        box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),
          0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);
      }

      .cdk-drag-placeholder {
        opacity: 0;
      }

      .cdk-drag-animating {
        transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
      }

      .todo-item:last-child {
        border: none;
      }

      .todo-list.cdk-drop-list-dragging .todo-item:not(.cdk-drag-placeholder) {
        transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
      }
    `,
  ],
})
export class BoardComponent {
  constructor(private dialog: Dialog) {}
  columns: Column[] = [
    {
      title: 'ToDo',
      todos: [
        {
          id: '1',
          title: 'Estudiar Angular',
        },
        {
          id: '2',
          title: 'Estudiar Inglés',
        },
        {
          id: '3',
          title: 'Realizar proyecto',
        },
      ],
    },
    {
      title: 'Doing',
      todos: [
        {
          id: '4',
          title: 'Solicitar equipo',
        },
      ],
    },
    {
      title: 'Done',
      todos: [
        {
          id: '5',
          title: 'Entrenar',
        },
      ],
    },
  ];

  drop(event: CdkDragDrop<ToDo[]>) {
    if (event.previousContainer === event.container)
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    else
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
  }

  addColumn() {
    this.columns.push({
      title: 'New Column',
      todos: [],
    });
  }

  openDialog(todo: ToDo) {
    const dialogRef = this.dialog.open(TodoDialogComponent, {
      minWidth: '300px',
      maxWidth: '50%',
      autoFocus: false,
      data: { todo }
    });
    dialogRef.closed.subscribe(output => {
      console.log(output);
    })
  }
}
