import { AfterViewInit, Component, ElementRef, ViewChild, HostListener, inject } from '@angular/core';
import Typed from 'typed.js';
import { ScrollService } from '../core/service/scroll.service';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-overview',
  imports: [],
  templateUrl: './overview.html',
  styleUrl: './overview.sass',
})
export class Overview implements AfterViewInit {

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


@ViewChild('typedElement', { static: true })
typedElement!: ElementRef;

ngAfterViewInit(): void {
    new Typed(this.typedElement.nativeElement, {
      strings: ['Software Engineer'],
      typeSpeed: 80,
      backSpeed: 40,
      loop: true,
      showCursor: true,
      cursorChar: '|'
    });
  }
}
