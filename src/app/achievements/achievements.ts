import { Component, HostListener, inject } from '@angular/core';
import { CountUpDirective } from 'ngx-countup';
import { ScrollService } from '../core/service/scroll.service';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-achievements',
  imports: [CountUpDirective],
  templateUrl: './achievements.html',
  styleUrl: './achievements.sass',
})
export class Achievements {

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
