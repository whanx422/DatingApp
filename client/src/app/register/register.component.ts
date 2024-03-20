import { Component, Input, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{
  @Input() userFromHomeComponent:any
  model:any = {}
  users: any


  constructor(){
  }

  ngOnInit(): void {
      
  }

  register(){
    console.log(this.model)
  }

  cancel(){
    console.log('cancelled.')
  }
}