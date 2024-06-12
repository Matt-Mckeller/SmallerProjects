import {Component, Input, OnInit} from '@angular/core';
import {Product} from "@models/product";
import {MatDialog} from "@angular/material";
import {ProductService} from "@services/product.service";
import {DeleteProductDialogComponent} from "@app/admin/manage-products/delete-product-dialog/delete-product-dialog.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-delete-product-button',
  templateUrl: './delete-product-button.component.html',
  styleUrls: ['./delete-product-button.component.css']
})
export class DeleteProductButtonComponent implements OnInit {
  @Input() product: Product;

  constructor(private dialog: MatDialog,
              private productService: ProductService,
              private router: Router
  ) {}

  ngOnInit() {
  }

  onDelete() {
    this.openDeleteDialog(
      () => {
        this.productService.deleteProduct(this.product).subscribe(
          (v) => {
            this.router.navigate(['admin/manage-products'])
          },
          (e) => console.log('An error occurred while deleting the product.', e)
        );
        console.log('Do delete the product.');
      },
      () => {
        console.log('Do not delete the product.');
      });
  }

  openDeleteDialog(onTrue, onFalse): void {
    const dialogRef = this.dialog.open(DeleteProductDialogComponent, {
      width: '250px',
      data: { product: this.product }
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
