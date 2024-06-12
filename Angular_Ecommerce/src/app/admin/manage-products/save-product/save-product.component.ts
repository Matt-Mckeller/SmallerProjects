import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
import {Product} from '@models/product';
import {CustomRegularExpressions} from '@models/custom-regular-expressions';
import {FileUploader} from 'ng2-file-upload';
import {ProductImage} from '@models/product-image';
import {ProductService} from '@services/product.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

import 'rxjs/add/operator/switchMap';
import {ProductImageService} from '@services/product-image.service';
import {AppSettings} from '@app/app-settings';

@Component({
  selector: 'app-save-product',
  templateUrl: './save-product.component.html',
  styleUrls: ['./save-product.component.css']
})
export class SaveProductComponent implements OnInit {
  @Input() model: Product;
  @Output() imageUpload: EventEmitter<any> = new EventEmitter();
  descriptionIsLoaded: boolean = false;
  saveType: string;
  allProductImages: Array<ProductImage> = [];

  uploader: FileUploader;
  hasBaseDropZoneOver = false;
  uploaderOptions = {
    url: AppSettings.API_BASEURL + 'productImages/addImage',
    maxFileSize: 3 * 1024 * 1024 // 3mb allowed
  };

  form: FormGroup;
  productImagesCtrl: FormControl;
  productDescriptionCtrl: FormControl;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private route: ActivatedRoute,
    private productImageService: ProductImageService
  ) {
    const _thisRef = this;
    this.form = formBuilder.group({
      hideRequired: false,
      floatPlaceholder: 'auto',
    });
    this.uploader = new FileUploader(this.uploaderOptions);
    this.uploader.onSuccessItem =
      (item, response) => {
        const image = <ProductImage>JSON.parse(response);
        this.addProductImage(image);
        this.imageUpload.emit({newImage: image, caller: _thisRef});
      };
  }

  submit() {
    console.log('Should submit product');
    if (this.saveType === 'edit') {
      this.productService.update(this.model);
    }else{
      this.productService.create(this.model);
    }
  }

  get finishedLoading(): boolean {
    return this.descriptionIsLoaded && this.productIsLoaded;
  }

  get productIsLoaded(): boolean {
    return (this.saveType === 'create' || (this.saveType === 'edit' && this.model.id)) ?
      (true) : (false);
  }
  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }


  ngOnInit() {
    if (this.model === undefined) {
      this.model = new Product();
      // Check if an id was provided to see if we are editing or creating
      if (this.route.snapshot.params['id']) {
        this.saveType = 'edit';
      }else{
        this.saveType = 'create';
      }

      if (this.saveType === 'edit') {
        const _thisRef = this;
        this.route.paramMap
          .switchMap((params: ParamMap) => this.productService.getById(+params.get('id')))
          .subscribe(product => {
            _thisRef.model = product;
            _thisRef.productImagesCtrl.reset(_thisRef.model.product_images);
            _thisRef.productImageService
              .getProductImages(product)
              .then((images) => {
                _thisRef.allProductImages = images;
            });
          });

      }
    }

    // Create product images form control separately since it's not a standard form element,
    // and will need to be referenced later in init.
    this.productImagesCtrl = new FormControl(this.model.product_images, [
      Validators.required
    ]);
    this.productDescriptionCtrl = new FormControl(this.model.description, [
      Validators.required,
      Validators.minLength(20)
    ]);
    this.form = new FormGroup({
      'productName': new FormControl(this.model.name, [
        Validators.required,
        Validators.pattern(CustomRegularExpressions.standardCharacters),
        Validators.pattern(CustomRegularExpressions.hasUpper)
      ]),
      'productPrice': new FormControl(this.model.price, [
        Validators.required,
        Validators.pattern(CustomRegularExpressions.usdCurrency),
      ]),
      'productImages': this.productImagesCtrl,
      'productDescription': this.productDescriptionCtrl
    });

    this.imageUpload.subscribe(this.onUpload);

  }

  onUpload(event) {
    event.caller.productImagesCtrl.reset(event.caller.model.product_images);
  }

  addProductImage(productImage: ProductImage) {
    this.model.product_images = this.model.product_images || [];
    this.model.product_images.push(productImage);
  }

  get productName() { return this.form.get('productName'); }
  get productPrice() { return this.form.get('productPrice'); }
  get productImages() { return this.form.get('productImages'); }
  get productDescription() { return this.form.get('productDescription'); }

}
