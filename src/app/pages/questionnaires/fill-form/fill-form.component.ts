import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-fill-form',
  templateUrl: './fill-form.component.html',
  styleUrls: ['./fill-form.component.scss']
})
export class FillFormComponent implements OnInit {
  questionnaire_id: string | null;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.questionnaire_id = this.route.snapshot.paramMap.get('questionnaire');
    console.log("filling out questionnaire: " + this.questionnaire_id)
    if (this.questionnaire_id === null) {
      this.router.navigate(['/not-found']);
    } 
  }

}
