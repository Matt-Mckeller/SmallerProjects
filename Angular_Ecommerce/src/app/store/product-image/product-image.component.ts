import {Component, ElementRef, Input, OnChanges, OnInit, ViewChild} from '@angular/core';
import {Product} from '@models/product';
import {ProductImageService} from "@services/product-image.service";
import {ProductImage} from "@models/product-image";
import {Subject} from "rxjs/Subject";

@Component({
  selector: 'product-image',
  templateUrl: './product-image.component.html',
  styleUrls: ['./product-image.component.css']
})
export class ProductImageComponent implements OnInit {
  @Input() product: Product;
  @Input() productImage: ProductImage | null;
  @Input() cursorType = 'pointer';
  @Input() centerHorizontally = true;
  @Input() height = '300px';
  @ViewChild('imageContainer') imageContainer: ElementRef;
  imgStyleSubject = new Subject<any> ();
  imgStyle;
  imgSrc = '';
  observer;

  imgStyleCalculations() {
    this.imgStyleSubject.next({
      'cursor': this.cursorType,
      'max-height': '100%',
      'max-width': '100%',
      'margin': (this.centerHorizontally === true) ? ('0 auto') : ('auto')
    });
  }

  constructor(
    private productImageService: ProductImageService
  ) { }

  ngOnInit() {
    let _thisRef = this;
    this.observer = new MutationObserver(mutations => {
      mutations.forEach(function(mutation) {
        // console.log('width', _thisRef.imageContainer.nativeElement.offsetWidth);
        // console.log(mutation.type);
        _thisRef.imgStyleCalculations();
      });
    });

    let config = { attributes: true, childList: true, characterData: true };
    this.observer.observe(this.imageContainer.nativeElement, config);
    this.imgStyleSubject.subscribe(
      (imgStyleValue) => {
        // console.log('inside subscribe', imgStyleValue);
        this.imgStyle = imgStyleValue;
      }
    );
    this.imgStyleCalculations();
    if (this.productImage) {
      this.imgSrc = this.productImageService.getHref(this.productImage);
    }else {
      let _thisRef = this;
      this.productImageService
        .getThumbnail(this.product)
        .then(
          (productImageSource) => {
            _thisRef.imgSrc = productImageSource

          },
          (rejectionReason) => console.log('Error retrieving image source: ', rejectionReason)
        );
    }
  }
}
