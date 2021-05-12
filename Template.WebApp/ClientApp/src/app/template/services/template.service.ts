import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Template } from '../models/template';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {

  private templateList: Template[] = [{
    id: 1,
    stringField: "serdar",
    dateField: new Date(),
    integerField: 1
  },
  {
    id: 2,
    stringField: "serdar",
    dateField: new Date(),
    integerField: 2
  }, {
    id: 3,
    stringField: "serdar",
    dateField: new Date(),
    integerField: 3
  }]

  private _baseUrl: string;

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this._baseUrl = `${baseUrl}api/template`;
  }

  getTemplateList(): Observable<Template[]> {
    return this.http.get<Template[]>(this._baseUrl);
  }

  getTemplateById(id: number): Observable<Template> {
    return this.http.get<Template>(`${this._baseUrl}/${id}`);
  }
  insertTemplate(data: Template) {
    return this.http.post(this._baseUrl,data);
  }

  updateTemplate(data: Template) {
    return this.http.put(this._baseUrl,data);
  }
}
