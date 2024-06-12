import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
  selector: 'remove-image-dialog',
  templateUrl: './remove-image-dialog.component.html',
  styleUrls: ['./remove-image-dialog.component.css']
})
export class RemoveImageDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<RemoveImageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close({'confirmed': false});
  }

  onYesClick(): void {
    this.dialogRef.close({'confirmed': true});
  }
}
