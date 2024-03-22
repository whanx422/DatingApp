import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Observable, of } from 'rxjs';
import { User } from '../_models/user';
import { Router } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit {
  model: any = {}
  loggedIn = false;
  currentUsers$:Observable<User|null> = of(null)

  constructor(public accountService : AccountService, 
    private router: Router,
    private toastr: ToastrService){}

  ngOnInit(): void {
    this.currentUsers$ = this.accountService.currentUsers$;
  }

  getCurrentUser(){
    this.accountService.currentUsers$.subscribe({
      next: user => this.loggedIn = !!user,
      error: error => console.log(error)
    })
  }

  login() {
    this.accountService.login(this.model).subscribe({
        next : response => {
          this.router.navigateByUrl('/members')
          this.loggedIn = true;
      },
      error : error => this.toastr.error(error.error)
    })
  }

  logout(){
    this.accountService.logout()
    this.loggedIn = false;
    this.router.navigateByUrl('/')
  }
}