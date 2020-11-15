import { HealthServiceService } from './../../services/health-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from './../../../../apps/core/services/http/http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-approval-health',
  templateUrl: './approval-health.component.html',
  styleUrls: ['./approval-health.component.css']
})
export class ApprovalHealthComponent implements OnInit {

  public selected = null;
  message = '';

  constructor(
    private http: HttpService,
    private route: ActivatedRoute,
    private router: Router,
    private healthServis: HealthServiceService
  ) { }

  ngOnInit(): void {
     this.message = '';
    this.getTutorial(this.route.snapshot.paramMap.get('id'));
  }

  getTutorial(id) {
    this.healthServis.get(id)
      .subscribe(
        data => {
          this.selected = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateHealth() {
    this.healthServis.update(this.selected.id, this.selected)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The tutorial was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

}
