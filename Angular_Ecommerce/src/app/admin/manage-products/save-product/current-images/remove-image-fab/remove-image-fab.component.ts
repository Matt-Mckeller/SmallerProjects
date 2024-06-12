import {Component, Input, OnInit} from '@angular/core';
import {ProductImage} from '@models/product-image';
import {MatDialog} from '@angular/material';
import {RemoveImageDialogComponent} from '@app/admin/manage-products/save-product/current-images/remove-image-dialog/remove-image-dialog.component';
import {ProductImageService} from '@services/product-image.service';

@Component({
  selector: 'current-images-remove-image-fab',
  templateUrl: './remove-image-fab.component.html',
  styleUrls: ['./remove-image-fab.component.css']
})
export class RemoveImageFabComponent implements OnInit {
  @Input() productImage: ProductImage;

  constructor(private dialog: MatDialog,
              private productImageService: ProductImageService
  ) {}

  ngOnInit() {
  }

  onDelete() {
    this.openDeleteDialog(
      () => {
        this.productImageService.removeImage(this.productImage).subscribe(
          (v) => console.log('Successfully deleted', v),
          (e) => console.log('An error occurred while deleting the image.', e)
        );
        console.log('Do delete the image.');
      },
      () => {
        console.log('Do not delete the image.');
      });
  }

  openDeleteDialog(onTrue, onFalse): void {
    const dialogRef = this.dialog.open(RemoveImageDialogComponent, {
      width: '250px',
      data: { productImage: this.productImage }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.confirmed === true) {
        onTrue();
      }else {
        onFalse();
      }
    });
  }
}
