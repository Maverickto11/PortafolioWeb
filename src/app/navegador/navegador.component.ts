import { Component } from '@angular/core';
import { HomeComponent } from "../home/home.component";

@Component({
    selector: 'app-navegador',
    standalone: true,
    templateUrl: './navegador.component.html',
    styleUrl: './navegador.component.css',
    imports: [HomeComponent]
})
export class NavegadorComponent {

}
