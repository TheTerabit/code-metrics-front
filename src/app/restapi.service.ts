import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {

  constructor(private http: HttpClient, private router: Router) { }

  public login(username: string, password: string): boolean {
    return true;
  }
  public getUser(): Observable<User> {
    return this.http.get<User>('https://paint-my-site-api.herokuapp.com/user');
  }

  public getCategories() {
    return this.http.get<Category[]>('https://paint-my-site-api.herokuapp.com/categories');
  }
  public getProjects() {
    return this.http.get<Project[]>('https://paint-my-site-api.herokuapp.com/projects');
  }
  public getPhotos() {
    return this.http.get<Photo[]>('https://paint-my-site-api.herokuapp.com/photos');
  }
  /*
  const currentTodoList = this.storage.get(STORAGE_KEY);
        
  this.storage.set(STORAGE_KEY, currentTodoList);

  */
}
interface Response {
  login: string;
}

interface User {
  name: string;
  surname: string;
  jobTitle: string;
  aboutMe: string;
  phoneNumber: string;
  email: string;
  profilePictureUrl: string;
}
interface Category {
  id: number;
  name: string;
  description: string;
  photoUrl: string;
  projects: Project[];
}
interface Project {
id: number;
name: string;
description: string;
photos: Photo[];
categoryId: number;
}

interface Photo {
id: number;
url: string;
orderInProject: number;
projectId: number;
}