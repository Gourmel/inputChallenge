import { Component } from '@angular/core';
import { Developer } from '../models/developer.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent {

 developer : Developer = {
    lastName: 'Eric',

    firstName: 'Rico',

    age: 50,

    gender: 'Male Fort',

    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    
    skills: [
       { name: 'JavaScript', logo: 'js.png', site:   'https://javascript.com' },
       { name: 'Angular', logo: 'angular.png', site: 'https://angular.io' }
    ]
  }
}
