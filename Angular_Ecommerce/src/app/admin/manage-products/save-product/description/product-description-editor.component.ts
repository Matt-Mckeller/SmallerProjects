import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-product-description-editor',
  templateUrl: './product-description-editor.component.html',
  styleUrls: ['./product-description-editor.component.css']
})
export class ProductDescriptionEditorComponent implements OnInit {
  @Input() description: any;
  @Output() descriptionChange = new EventEmitter<any>();
  @Output() onReadyChange = new EventEmitter<boolean>();
  @Input() form: FormGroup;
  @Input() productControlName: string;
  editorConfig: {uiColor: '#99000'};

  constructor() { }

  ngOnInit() {}

  onChange(event) {
    this.descriptionChange.emit(event);
  }

  onReady(event) {
    this.onReadyChange.emit(event);
  }

  onFocus(event) {
    // console.log('product description focus', event);
  }

  onBlur(event) {
    // console.log('product description blur', event);
  }

}
