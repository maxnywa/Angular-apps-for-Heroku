import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  showLinks:string;
  brand:string = "Routing";
  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.auth.editIsAuthEvent.subscribe((status:string)=>{
      this.showLinks = status;
    })
  }

  onLogout(){
    this.auth.logout().subscribe((status:boolean)=>{
      if(status)this.router.navigate(['/login'])
    },error => {
      console.log(error.status)
    })
  }

}
