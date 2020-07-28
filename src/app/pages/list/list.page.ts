import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Usuario } from '../../../../../../Angular/AngularServicesHomeWorks/src/app/Models/usuario';
import { Observable, observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  listas: string = "Listas";
  Usuarios: Observable<any>;


  constructor(
     private ds: DataService
    ) { }

  ngOnInit() {

    // this.ds.getUsers().subscribe((elemento)=>{
    //   console.log(elemento);
    // });

    this.Usuarios = this.ds.getUsers();

  }

}
