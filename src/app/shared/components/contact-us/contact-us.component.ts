import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  title: string = 'My first AGM project';
  lat: number = 30.2606;
  lng: number = -97.7418;

  ngOnInit() {
    
  }
}
