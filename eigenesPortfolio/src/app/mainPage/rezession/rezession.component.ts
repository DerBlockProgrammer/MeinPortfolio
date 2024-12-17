import { Component } from '@angular/core';

interface Testimonial {
  quote: string;
  author: string;
  position: string;
  profileImage: string;
}

@Component({
  selector: 'app-rezession',
  templateUrl: './rezession.component.html',
  styleUrls: ['./rezession.component.scss']
})
export class RezessionComponent {
  testimonials: Testimonial[] = [
    {
      quote: "Michael really kept the team together with his great organization and clear communication.",
      author: "V. Schuster",
      position: "Team Partner",
      profileImage: "assets/images/kopf.png"
    },
    {
      quote: "A great leader with excellent communication skills.",
      author: "A. Müller",
      position: "Senior Developer",
      profileImage: "assets/images/profile2.png"
    },
    {
      quote: "An exceptional leader who always brings the team together.",
      author: "S. Thompson",
      position: "Project Manager",
      profileImage: "assets/images/profile3.png"
    }
  ];

  currentIndex: number = 0;


  changeTestimonial(event: MouseEvent): void {
    const clickPosition = event.offsetX / (event.currentTarget as HTMLElement).clientWidth;
    if (clickPosition < 0.5) {
    
        this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
    } else {
       
        this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
    }
}



  get currentTestimonial(): Testimonial {
    return this.testimonials[this.currentIndex];
  }
}
