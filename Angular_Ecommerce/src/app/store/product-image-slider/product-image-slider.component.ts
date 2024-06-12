import {Component, Input, OnInit} from '@angular/core';
import {SwiperConfigInterface} from 'ngx-swiper-wrapper';
import {Product} from '@models/product';
import {ProductImageService} from '@app/shared/services/product-image.service';
import {ProductImage} from '@models/product-image';

@Component({
  selector: 'product-image-slider',
  templateUrl: './product-image-slider.component.html',
  styleUrls: ['./product-image-slider.component.css']
})
export class ProductImageSliderComponent implements OnInit {
  @Input() product: Product;
  @Input() height = '100%';
  productImages: Array<ProductImage> = [];
  get imgHeight(): string {
    return parseInt(this.height) - 100 + 'px';
  }

  swiperConfig: SwiperConfigInterface = {
    direction: 'horizontal',
    effect: 'slide',
    centeredSlides: true,
    threshold: 50,
    spaceBetween: 5,
    slidesPerView: 1,
    keyboardControl: true,

    pagination: '.swiper-pagination',
    paginationClickable: true,

    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',

    loop: true,
    // autoplay: 10000,
    speed: 700,
  };

  constructor(
    private productImageService: ProductImageService
  ) { }

  ngOnInit() {
    const _this = this;
    const product = this.product;
    this.productImageService.getProductImages(product).then(
      (productImageHrefs) => {
        _this.productImages = productImageHrefs;
      });
  }


  /**
   * Retrieve product iamge hrefs from api. Stores urls in thumbnail variable.
   */
  fetchThumbnails(){
    const _this = this;
    const product = this.product;
    this.productImageService.getProductImages(product).then(
      (productImageHrefs) => {
        _this.productImages = productImageHrefs;
      });
  }

}
