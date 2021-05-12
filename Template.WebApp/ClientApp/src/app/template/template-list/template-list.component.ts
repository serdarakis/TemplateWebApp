import { Component, OnInit } from '@angular/core';
import { Template } from '../models/template';
import { TemplateService } from '../services/template.service';

@Component({
  selector: 'app-template-list',
  templateUrl: './template-list.component.html',
  styleUrls: ['./template-list.component.css']
})
export class TemplateListComponent implements OnInit {

  public Loading: boolean = false;
  public TemplateList: Template[] = [];

  constructor(private templateService: TemplateService) { }

  ngOnInit() {
    this.Loading = true;
    this.templateService.getTemplateList().subscribe(result => {
      this.TemplateList = result;
    },
      error => {
        this.TemplateList = [];
        console.log(error);
      }, () => {
        this.Loading = false;
      });
    this.Loading = false
  }

}
