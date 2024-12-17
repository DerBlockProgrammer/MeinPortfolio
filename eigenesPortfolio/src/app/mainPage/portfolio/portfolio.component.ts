import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  portfolioProjects = [
    {
      img: './assets/portfolio/join.png',
      title: 'Join',
      technologies: 'Angular | TypeScript | HTML | CSS | Firebase',
      description:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag-and-drop functions, assign users and categories.',
      liveLink: '#',
      githubLink: '#'
    },
    {
      img: './assets/portfolio/Sharkie.png',
      title: 'Sharkie',
      technologies: 'JavaScript | HTML | CSS',
      description:
        'A simple Jump-and-Run game based on an object-oriented approach. Help Sharkie find coins and poison bottles to fight against the killer whale.',
      liveLink: '#',
      githubLink: '#'
    },
    {
      img: './assets/portfolio/SimpleCRM.png',
      title: 'Simple CRM',
      technologies: 'Angular | Firebase',
      description:
        'A very simple Customer Relationship Management system working with CRUD functionality.',
      liveLink: '#',
      githubLink: '#'
    }
  ];
}
