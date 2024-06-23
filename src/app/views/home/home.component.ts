import { Component } from '@angular/core';
import { SkillsComponent } from '../../components/skills/skills.component';
import { ProjectsComponent } from '../../components/projects/projects.component';
import { ExperienciaComponent } from '../../components/experiencia/experiencia.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SkillsComponent, ProjectsComponent, ExperienciaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  lenguaje = "Otros"
}
