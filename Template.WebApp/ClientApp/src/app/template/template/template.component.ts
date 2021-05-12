import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Template } from '../models/template';
import { TemplateService } from '../services/template.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  private id: number = 0;
  private isEdit: boolean = false;
  private template: Template = null;
  public registerTemplateForm: FormGroup;
  public submitted = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private templateService: TemplateService, private formBuilder: FormBuilder) {
    const id = this.activatedRoute.snapshot.paramMap.get("id");
    if (id) {
      this.isEdit = true;
      this.id = +id;
    }
  }

  ngOnInit() {
    if (this.id) {
      this.templateService.getTemplateById(this.id).subscribe(data => {
        this.template = data;
        this.template.dateField = new Date(this.template.dateField);
        this.initForm();
      },
        (error) => {
          console.log(error);
        });

    } else {
      this.template = {
        id: 0,
        dateField: new Date(),
        integerField: 0,
        stringField: ""
      };
      this.initForm();
    }
  }

  initForm(){
    this.registerTemplateForm = this.formBuilder.group({
      dateField: [this.template.dateField.toISOString().substr(0, 10), Validators.required],
      integerField: [this.template.integerField, Validators.required],
      stringField: [this.template.stringField, Validators.required]
    });
  }

  get f() { return this.registerTemplateForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.registerTemplateForm.invalid) {
      return;
    }
    const form = this.registerTemplateForm.value;

    this.template = {
      id: this.template.id,
      stringField: form.stringField,
      dateField: new Date(form.dateField),
      integerField: form.integerField
    }

    const observe = this.isEdit ? this.templateService.updateTemplate(this.template) : this.templateService.insertTemplate(this.template);

    observe.subscribe(() => {
      this.router.navigate(["template"]);
    }, (error) => {
      console.log(error);
    });


  }

  onCancel() {
    this.router.navigate(["template"]);
  }
}
