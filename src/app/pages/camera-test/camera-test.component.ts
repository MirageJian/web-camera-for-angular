import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-camera-test',
  templateUrl: './camera-test.component.html',
  styleUrls: ['./camera-test.component.css']
})
export class CameraTestComponent implements OnInit {
  blob = 'web-camera';
  base64 = '';

  constructor() { }

  ngOnInit() {
  }

}
