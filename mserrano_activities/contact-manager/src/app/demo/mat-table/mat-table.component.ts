import { Component, OnInit, ViewChild } from '@angular/core';
import { PeriodicElement } from 'src/app/core/models/periodic-element';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Products } from 'src/app/core/models/products';

const products: Products[] = [
  {id: 1, name: 'Beach ball', price: 4},
  {id: 2, name: 'Towel', price: 5},
  {id: 3, name: 'Frisbee', price: 2},
  {id: 4, name: 'Sunscreen', price: 4},
  {id: 5, name: 'Cooler', price: 25},
  {id: 6, name: 'Swim suit', price: 15},
  {id: 7, name: 'Umbrella', price: 25},
  {id: 8, name: 'Sunglasses', price: 30},
  {id: 9, name: 'Strawhat', price: 6},
];

@Component({
  selector: 'app-mat-table',
  templateUrl: './mat-table.component.html',
  styleUrls: ['./mat-table.component.scss']
})
export class MatTableComponent implements OnInit {
  
  displayedColumns: string[] = ['id', 'name', 'price'];
  dataSource = new MatTableDataSource<Products>(products);

  constructor() { }
  
  getTotalPrice() {
    return products.map(t => t.price).reduce((acc, value) => acc + value, 0);
  }

  applyFilter(event : Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  
  
  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

 

}
