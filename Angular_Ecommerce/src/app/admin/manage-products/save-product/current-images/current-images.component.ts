import {Component, Input, OnInit} from '@angular/core';
import {ProductImage} from "@models/product-image";

@Component({
  selector: 'app-current-images',
  templateUrl: './current-images.component.html',
  styleUrls: ['./current-images.component.css']
})
export class CurrentImagesComponent implements OnInit {
  @Input() images: Array<ProductImage>;

  constructor() { }

  ngOnInit() {
  }

}
