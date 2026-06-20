import { Component, HostListener, inject } from '@angular/core';
import { ScrollService } from '../core/service/scroll.service';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.sass',
})
export class Contact {

private scroll = inject(ScrollService);

isScrolled = false;

ngOnInit() {
  AOS.init();
  this.scroll.scrollToTop();
  }

scrollToTop(): void {
  this.scroll.scrollToTop();
}

@HostListener('window:scroll', [])
onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

}
