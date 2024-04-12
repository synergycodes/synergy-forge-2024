import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../interfaces/user.interface';
import { UserComponent } from '../../components/user/user.component';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-lab-1',
  standalone: true,
  imports: [UserComponent, AsyncPipe],
  templateUrl: './lab-1.component.html',
  styleUrl: './lab-1.component.scss'
})
export class Lab1Component implements OnInit {
  private readonly http = inject(HttpClient);

  // Pozostaw bez zmian :)
  userOne$?: Observable<User>;

  // Pozostaw bez zmian :)
  userTwo?: User;
  
  ngOnInit(): void {
    // Część 1 Async Pipe
    // Wskazówka: this.http.get<User>('https://jsonplaceholder.typicode.com/users/1') 
    // Oczekiwany użytkownik: Leanne Graham
    
    this.userOne$ = this.http.get<User>('https://jsonplaceholder.typicode.com/users/1');

    // Część 2 subscribe()
    // Wskazówka: this.http.get<User>('https://jsonplaceholder.typicode.com/users/2') 
    // Oczekiwany użytkownik: Ervin Howell
    
    this.http.get<User>('https://jsonplaceholder.typicode.com/users/2')
      .subscribe((user) => {
        this.userTwo = user;
      })
  }
}
