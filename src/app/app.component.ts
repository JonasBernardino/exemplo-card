import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from "./components/footer/footer.component";
import { CardComponent } from "./components/card/card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Front-end';

  products = [
    {
      image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      description: 'Produto 1',
      value: 'R$ 100,00'
    },
    {
      image: 'https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Produto 2',
      value: 'R$ 200,00'
    },
    {
      image: 'https://images.pexels.com/photos/965324/pexels-photo-965324.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Produto 3',
      value: 'R$ 300,00'
    },
    {
      image: 'https://images.pexels.com/photos/794062/pexels-photo-794062.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Produto 4',
      value: 'R$ 400,00'
    },
    {
      image: 'https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Produto 5',
      value: 'R$ 500,00'
    },
    {
      image: 'https://images.pexels.com/photos/1721558/pexels-photo-1721558.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Produto 6',
      value: 'R$ 600,00'
    },
    {
      image: 'https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Produto 7',
      value: 'R$ 700,00'
    },
    {
      image: 'https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Produto 8',
      value: 'R$ 800,00'
    },
    {
      image: 'https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Produto 9',
      value: 'R$ 900,00'
    },
    {
      image: 'https://images.pexels.com/photos/2065195/pexels-photo-2065195.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Produto 10',
      value: 'R$ 1.000,00'
    }
  ];
}
