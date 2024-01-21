import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../interfaces/books';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class booksService {

  private baseUrl = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  addBook(newBook: Book): Observable<Book> {
    return this.http.post<Book>(`${this.baseUrl}/books`, newBook);
  }

  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.baseUrl}/books`);
  }

  getBookById(id: string): Observable<Book> {
    return this.http.get<Book>(`${this.baseUrl}/books/${id}`);
  }

  deleteBook(id: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/books/${id}`);
  }
}
