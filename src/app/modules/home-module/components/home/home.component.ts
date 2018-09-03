import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../../../services/users.service";
import { User } from "../../models/User";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users: User[];
  num: number[] = [1, 5, 4];
  timestamp = new Date();
  styles = {'background':'lightblue', 'text-transform':'uppercase'};
  condition = {'btn-primary': true};
  constructor(
    public userService: UsersService,
  ) { }

  ngOnInit() {
    this.userService.getUsers().subscribe((data:User[])=>{
      this.users = data;
    });
    setTimeout(()=>{
      this.num.push(15);
    },3000);
  }

  onDelete(id: number){
    this.users.forEach((user:User , index)=>{
      if(user.id === id ) this.users.splice(index,1)
    } )
 }

}
