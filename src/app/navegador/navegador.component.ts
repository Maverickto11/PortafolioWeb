import { Component } from '@angular/core';
import { SkillComponent } from "../skill/skill.component";

@Component({
    selector: 'app-navegador',
    standalone: true,
    templateUrl: './navegador.component.html',
    styleUrl: './navegador.component.css',
    imports: [SkillComponent]
})
export class NavegadorComponent {

}
