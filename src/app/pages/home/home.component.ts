import { Component } from '@angular/core';
import { PrincipalLayoutComponent } from "../../layout/principal-layout/principal-layout.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PrincipalLayoutComponent, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
