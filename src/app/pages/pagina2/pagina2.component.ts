import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-pagina2',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './pagina2.component.html',
  styleUrl: './pagina2.component.css'
})
export class Pagina2Component {
  constructor(private router: Router){

  }
  home(){
    this.router.navigate(['home'])

  }

}
