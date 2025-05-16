import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageTemplateComponent } from '../../../shared/page-template/page-template.component';
import { TaskListComponent } from '../task-list/task-list.component';

@Component({
  selector: 'app-project',
  imports: [CommonModule, RouterLink, PageTemplateComponent, TaskListComponent],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
})
export class ProjectComponent implements AfterViewInit {
  titleHeader: string = 'Direct Access Using @ViewChild';
  @ViewChild(TaskListComponent) taskList!: TaskListComponent;
  @ViewChild('projectCounter') projectCounter!: ElementRef;

  ngAfterViewInit(): void {
    if (this.projectCounter && this.projectCounter.nativeElement) {
      this.projectCounter.nativeElement.textContent = this.taskList.taskCount;
    }
  }
}
