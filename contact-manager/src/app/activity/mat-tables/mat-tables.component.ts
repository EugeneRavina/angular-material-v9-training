import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

export interface Transaction {
  item: string;
  cost: number;
}

@Component({
  selector: 'app-mat-tables',
  templateUrl: './mat-tables.component.html',
  styleUrls: ['./mat-tables.component.scss']
})

export class MatTablesComponent implements OnInit {

  displayedColumns: string[] = ['item', 'cost'];
  transactions: Transaction[] = [
    {item: 'Beach ball', cost: 4},
    {item: 'Towel', cost: 5},
    {item: 'Frisbee', cost: 2},
    {item: 'Sunscreen', cost: 4},
    {item: 'Cooler', cost: 25},
    {item: 'Swim suit', cost: 15},
  ];
  dataSource = new MatTableDataSource<Transaction>(this.transactions);
  
  getTotalCost() {
    return this.transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  
  ngOnInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

  }

}
