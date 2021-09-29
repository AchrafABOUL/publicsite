import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {

  categoryOptions = [
    {
      label: "Development",
      value: 1
    },
    {
      label: "Art",
      value: 2
    },
    {
      label: "Languages",
      value: 3
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }
  handleChange(nameInput : any){
    console.log(nameInput);
  }
  submit(formData : object){
    console.log(formData);
  }
}
