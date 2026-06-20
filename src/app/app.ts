import { Component, signal, HostListener  } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive  } from '@angular/router';
import { Header } from './header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  templateUrl: './app.html',
  styleUrl: './app.sass'
})
export class App {
  protected readonly title = signal('shikhabhatt14');

  isScrolled = false;

@HostListener('window:scroll', [])
onWindowScroll(): void {
    this.isScrolled = window.scrollY > 50;
  }

}
