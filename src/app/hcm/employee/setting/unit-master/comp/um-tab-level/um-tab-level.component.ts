import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-um-tab-level',
  templateUrl: './um-tab-level.component.html',
  styleUrls: ['./um-tab-level.component.scss']
})
export class UmTabLevelComponent implements OnInit {
  
  public parameter: string;
  public levelTot=0;
  constructor(private route: Router,private activeRouter: ActivatedRoute) {
    this.parameter = this.activeRouter.snapshot.paramMap.get("id_master_unit");
    this.levelTot = Number(this.activeRouter.snapshot.paramMap.get("level"));
  }
  ngOnInit() {
  
  }
  
  getStatusLevel(level:number) {
    return (level<=this.levelTot);
  }
  
  public goBack() {
    this.route.navigate(["hcm/employee/setting/unit-master"]);
  }
  
  

}
