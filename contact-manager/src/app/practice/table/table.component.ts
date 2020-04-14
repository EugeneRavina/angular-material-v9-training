import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table'
import { MatSort } from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';

export interface Transaction {
  item: string;
  cost: number;
}

const  transactions: Transaction[] = [
    {item: 'Beach ball', cost: 4},
    {item: 'Towel', cost: 5},
    {item: 'Frisbee', cost: 2},
    {item: 'Sunscreen', cost: 4},
    {item: 'Cooler', cost: 25},
    {item: 'Swim suit', cost: 15},
    {item: 'Sun Glasses', cost: 50},
    {item: 'Watermelon', cost: 15},
    {item: 'Umbrella', cost: 10},
    {item: 'Floaters', cost: 9},
    {item: 'Sun Hat', cost: 5}
  ];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['item', 'cost'];
  dataSource = new MatTableDataSource(transactions);
  tran = transactions;
  constructor(){}
  
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit(): void { 
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getTotalCost(){
    return this.tran.map(t => t.cost).reduce((acc, value) => acc + value, 0);
  }
  
}
