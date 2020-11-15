import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-comp',
  templateUrl: './test-comp.component.html',
  styleUrls: ['./test-comp.component.scss']
})
export class TestCompComponent implements OnInit {

  gridData: any = [
      {
          "ProductID": 1,
          "ProductName": "Chai",
          "SupplierID": 1,
          "CategoryID": 1,
          "QuantityPerUnit": "10 boxes x 20 bags",
          "UnitPrice": 18,
          "UnitsInStock": 39,
          "UnitsOnOrder": 0,
          "ReorderLevel": 10,
          "Discontinued": false,
          "Category": {
              "CategoryID": 1,
              "CategoryName": "Beverages",
              "Description": "Soft drinks, coffees, teas, beers, and ales"
          },
          "FirstOrderedOn": new Date(1996, 8, 20)
      },
      {
          "ProductID": 2,
          "ProductName": "Chang",
          "SupplierID": 1,
          "CategoryID": 1,
          "QuantityPerUnit": "24 - 12 oz bottles",
          "UnitPrice": 19,
          "UnitsInStock": 17,
          "UnitsOnOrder": 40,
          "ReorderLevel": 25,
          "Discontinued": false,
          "Category": {
              "CategoryID": 1,
              "CategoryName": "Beverages",
              "Description": "Soft drinks, coffees, teas, beers, and ales"
          },
          "FirstOrderedOn": new Date(1996, 7, 12)
      },
      {
          "ProductID": 3,
          "ProductName": "Aniseed Syrup",
          "SupplierID": 1,
          "CategoryID": 2,
          "QuantityPerUnit": "12 - 550 ml bottles",
          "UnitPrice": 10,
          "UnitsInStock": 13,
          "UnitsOnOrder": 70,
          "ReorderLevel": 25,
          "Discontinued": false,
          "Category": {
              "CategoryID": 2,
              "CategoryName": "Condiments",
              "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
          },
          "FirstOrderedOn": new Date(1996, 8, 26)
      }];

  constructor() { }

  ngOnInit() {
  }

}
