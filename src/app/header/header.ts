import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.sass',
})
export class Header {

isScrolled = false;

@HostListener('window:scroll')
onWindowScroll(): void {
    this.isScrolled = window.scrollY > 50;
  }
}
