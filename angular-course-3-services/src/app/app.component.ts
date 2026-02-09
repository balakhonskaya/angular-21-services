import {AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';
import {CourseCardComponent} from './course-card/course-card.component';
import {HighlightedDirective} from './directives/highlighted.directive';
import {Observable} from 'rxjs';
import { CoursesService } from './services/courses.service';
import { AsyncPipe, CommonModule, NgForOf, NgIf } from '@angular/common';
import { CourseImageComponent } from './course-image/course-image.component';

@Component({
    selector: 'app-root',
    imports: [AsyncPipe, NgIf, NgForOf, CourseCardComponent, CourseImageComponent, CommonModule, HighlightedDirective],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true
})
export class AppComponent implements OnInit {

  courses$ : Observable<Course[]>;

  constructor(private coursesService: CoursesService) {

  }

  ngOnInit() {
    this.courses$ = this.coursesService.loadCourses();

  }

save(course: Course) {
  this.coursesService.saveCourse(course)
  .subscribe(
    () => console.log('course saved')
  );
}
}