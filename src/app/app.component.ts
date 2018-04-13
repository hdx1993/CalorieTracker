import { Component } from '@angular/core';

@Component({
  selector: 'racing-app',
  template: `
<header class="container">
  <h1 class="cal">{{heading}}</h1>
</header>
<my-foods></my-foods>
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  heading = "Calculate Your Calories"
}
