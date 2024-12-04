import { Component } from '@angular/core';
import { TitelViewMeComponent } from "./titel-view-me/titel-view-me.component";
import { GithubLinksComponent } from "./github-links/github-links.component";

@Component({
  selector: 'app-main',
  imports: [TitelViewMeComponent, GithubLinksComponent],
  templateUrl: './mainPage.component.html',
  styleUrl: './mainPage.component.scss'
})
export class MainComponent {

}
