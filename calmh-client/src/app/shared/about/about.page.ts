import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  LICENSES = [
    'Icons made by <a href="https://www.flaticon.com/authors/srip" title="srip">srip</a> from ' +
    '<a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by ' +
    '<a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>'
  ];

  constructor() { }

  ngOnInit() {
  }

}
