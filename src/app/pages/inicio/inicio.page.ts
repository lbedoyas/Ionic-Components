import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [
    {
      icon: 'football',
      name: 'Action Sheet',
      reDirectTo: '/action-sheet'
    },
    {
      icon: 'alert-outline',
      name: 'Alert',
      reDirectTo: '/alert'
    },
    {
      icon: 'person-outline',
      name: 'Avatar',
      reDirectTo: '/avatar'
    },
    {
      icon: 'cube-outline',
      name: 'Botones',
      reDirectTo: '/botones'
    },
    {
      icon: 'newspaper-outline',
      name: 'Card',
      reDirectTo: '/card'
    },
    {
      icon: 'checkbox-outline',
      name: 'Check Box',
      reDirectTo: '/check'
    }
    ,
    {
      icon: 'calendar-outline',
      name: 'Fechas',
      reDirectTo: '/date-time'
    },
    {
      icon: 'bookmarks-outline',
      name: 'Fab',
      reDirectTo: '/fab'
    },
    {
      icon: 'grid-outline',
      name: 'Grid',
      reDirectTo: '/grid'
    },
    {
      icon: 'grid-outline',
      name: 'infinite-outline',
      reDirectTo: '/infinite-scroll'
    },
    {
      icon: 'copy-outline',
      name: 'input - forms',
      reDirectTo: '/input'
    },
    {
      icon: 'list-outline',
      name: 'Listas',
      reDirectTo: '/list'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}

interface Componente{
  icon: string;
  name: string;
  reDirectTo: string;
}
