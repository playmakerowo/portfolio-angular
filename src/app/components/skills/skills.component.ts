import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skills = [
    "html",
    "js",
    "css",
    "scss",
    "docker",
    "angular",
    "mysql",
    "SQLServer",
    "oracle",
    "python",
    "java",
    "typescript",
    "react-native",
    "EFCore",
    "csharp",
    "dotnet",
    "bitbucket",
    "git",
    "postman"
  ]
}
