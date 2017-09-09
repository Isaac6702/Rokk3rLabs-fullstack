import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../environments/environment';

@Injectable()
export class TaskService {
  private api: string;

  constructor(
    private http: Http

  ) {
    this.api = environment.apiUrl;
  }

  private success(success: any): any {
    return Promise.resolve(success.json());
  }

  tasks(status: any) {
    let url = this.api + "/v1/tasks";
    if (status) {
      url = this.api + "/v1/tasks?status=" + status;
    }
    return this.http.get(url)
      .toPromise()
      .then(this.success)
      .catch(error => {
        if (error.status === 0) {
          return Promise.reject({ description: 'Connection denied' });
        }
        return Promise.reject(JSON.parse(error._body));
      });
  }

  remove(id) {
    const url = this.api + "/v1/tasks/" + id;
    return this.http.delete(url)
      .toPromise()
      .then(() => Promise.resolve())
      .catch(error => {
        if (error.status === 0) {
          return Promise.reject({ description: 'Connection denied' });
        }
        return Promise.reject(JSON.parse(error._body));
      });
  }


  update(id, data) {
    const url = this.api + "/v1/tasks/" + id;
    return this.http.put(url, data)
      .toPromise()
      .catch(error => {
        if (error.status === 0) {
          return Promise.reject({ description: 'Connection denied' });
        }
        return Promise.reject(JSON.parse(error._body));
      });
  }

  create(task) {
    const url = this.api + "/v1/tasks";
    return this.http.post(url, task)
      .toPromise()
      .then(this.success)
      .catch(error => {
        if (error.status === 0) {
          return Promise.reject({ description: 'Connection denied' });
        }
        return Promise.reject(JSON.parse(error._body));
      });
  }

  completed(id) {
    const url = this.api + "/v1/tasks/" + id;
    return this.http.patch(url, {})
      .toPromise()
      .catch(error => {
        if (error.status === 0) {
          return Promise.reject({ description: 'Connection denied' });
        }
        return Promise.reject(JSON.parse(error._body));
      });
  }
}