import { Component, OnInit, Inject } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material'
import { ServiceService} from '../../service.service';

@Component({
  selector: 'app-shearch',
  templateUrl: './shearch.component.html',
  styleUrls: ['./shearch.component.scss']
})
export class ShearchComponent implements OnInit {

  public dataSource: any;
  card :any = [];
  constructor(public dialog: MatDialog, private service: ServiceService) { }

  ngOnInit() {
      this.service.getMovies('any').subscribe(res => {
        this.card = res;
      });
  }

   
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(movies, {
      width: '250px',
      // data: {name: this.name, animal: this.animal}
    });
  }


}

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'movies.component',
  templateUrl: 'movies.component.html',
})
export class movies {

  constructor(
    public dialogRef: MatDialogRef<movies>,
    @Inject (MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}