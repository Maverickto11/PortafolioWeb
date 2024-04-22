import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavegadorComponent } from "./navegador/navegador.component";
import { HomeComponent } from "./home/home.component";
import { SkillComponent } from "./skill/skill.component";
import { ProjectComponent } from "./project/project.component";
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavegadorComponent, HomeComponent, SkillComponent, ProjectComponent]
})
export class AppComponent {
  title = 'PortafolioWeb';
}
