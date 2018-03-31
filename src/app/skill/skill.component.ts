import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {

  constructor() { }

  imageUrlArray:any = [
    'assets/skill-angular.png',
    'assets/skill-chatbot.png',
    'assets/skill-ionic.png',
    // 'assets/skill-cloud-computing.png',
    'assets/skill-firebase.png',
    'assets/skill-google-gsuite.png',
    'assets/skill-microsoft-azure.png',
  ];

  ngOnInit() {
  }

}
