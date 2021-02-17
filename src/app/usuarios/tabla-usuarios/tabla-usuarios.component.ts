import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.css']
})
export class TablaUsuariosComponent implements OnInit {

  public users:any;

  constructor(
    private userService: UsersService
  ) { 
    this.userService.getUsers().subscribe(
      data => {
        let users = data as any;
        this.users = users.users;
      }
    );
  }

  ngOnInit(): void {
  }

}
