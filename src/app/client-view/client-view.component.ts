import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-view',
  templateUrl: './client-view.component.html',
  styleUrls: ['./client-view.component.css']
})
export class ClientViewComponent {
  constructor(private router:Router){
    
    this.router.navigate(['client-view/home']);
  }
}
