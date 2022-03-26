import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-warning-dialog',
  templateUrl: './warning-dialog.component.html',
  styleUrls: ['./warning-dialog.component.css']
})
export class WarningDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<WarningDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  close(){
    console.log("dishonor detected")
    this.dialogRef.close();
  }
  sendToApplication(){
    window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSeCo1qDg-VReeDH2xV2XRRKgqw8bfhtGQ8XO4EUS8YigpDA1w/viewform?usp=sf_link"
  }
}
