import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-page',
  templateUrl: './work-page.component.html',
  styleUrls: ['./work-page.component.css']
})
export class WorkPageComponent implements OnInit {
  pdfSrc = '../../../assets/Dimitrije-Mitic-Resume-2020.pdf';
  constructor() { }

  ngOnInit() {
  }

}
