import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {nameType} from '../../const/nameType';
import {Location} from '@angular/common';
import {path} from 'd3-path';

@Component({
  selector: 'app-um-tab-level',
  templateUrl: './um-tab-level.component.html',
  styleUrls: ['./um-tab-level.component.scss']
})
export class UmTabLevelComponent implements OnInit {
  
  public parameter: string;
  public levelTot=0;
  public fieldName="";
  public idmasterType = "";
    public masterTypeName = "";
    public nama_level1 ="";
    public nama_level2 ="";
    public nama_level3 ="";
    public nama_level4 ="";
    
    public queryParams:any;
  constructor(private route: Router,
              private activeRoute: ActivatedRoute,
              private location:Location) {
    
    //alert(this.parameter);
    
      this.activeRoute.queryParamMap.subscribe(params => {
        
          this.queryParams = {path:JSON.parse(params.getAll("path").toString())};
          console.log(this.queryParams);
    
          this.parameter = params.get("id_master");
          this.levelTot = Number(params.get("total_level"));
          this.idmasterType= params.get("id_master_type");
          this.masterTypeName= params.get("master_type_name");
          this.nama_level1 = params.get("nama_level1")+" - Lv1";
          this.nama_level2 = params.get("nama_level2")+" - Lv2";
          this.nama_level3 = params.get("nama_level3")+" - Lv3";
          this.nama_level4 = params.get("nama_level4")+" - Lv4";
    
          this.fieldName = this.masterTypeName;
      });
      
  }
  
  convertUrl(url: string) {
      //alert(decodeURIComponent(url));
      //console.log(decodeURIComponent(url));
      return decodeURIComponent(url);
  }
  
  navigateTo(url: string) {
      this.route.navigateByUrl(this.convertUrl(url));
  }
  ngOnInit() {
  
  }
  
  getStatusLevel(level:number) {
    return (level<=this.levelTot);
  }
  
  public goBack() {
    this.location.back();
  }
  
  

}
