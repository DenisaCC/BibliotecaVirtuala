import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/auth';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:3000';
  currentUser: User | null = null;

  constructor(private http: HttpClient, private router: Router) { }

  registerUser(userDetails: User): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/users`, userDetails);
  }

  getUserByEmail(email: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/users?email=${email}`);
  }

  setCurrentUser(user: User): void {
    this.currentUser = user;
  }

  getCurrentUserId(): string | null {
    return this.currentUser ? this.currentUser.id : null;
  }

  getUserById(userId: string): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/users/${userId}`);
  }
  
  getCurrentUsername(): string | null {
    return this.currentUser ? this.currentUser.fullName : null; 
  }

  logout(): void {
    console.log('ID-ul utilizatorului la delogare:', this.currentUser?.id);
    this.currentUser = null;
    this.router.navigate(['/login']); 
  }

}
