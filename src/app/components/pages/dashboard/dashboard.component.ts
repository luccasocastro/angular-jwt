import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit{
  users: any[] = [];

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.http
      .get('https://freeapi.miniprojectideas.com/api/User/GetAllUsers')
      .subscribe((res: any) => {
        this.users = res.data;
      });
  }
}
