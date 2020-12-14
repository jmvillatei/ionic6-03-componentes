import { Component, OnInit } from '@angular/core';


interface Componente {
  icon:string,
  name: string,
  redirectTo: string
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [
    {
      icon: 'american-football',
      name: 'Action Sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'alert',
      name: 'Alert',
      redirectTo: '/alert'
    },
    {
      icon: 'beaker',
      name: 'Avatar',
      redirectTo: '/avatar'
    },
    {
      icon: 'radio-button-off',
      name: 'Button',
      redirectTo: '/button'
    },
    {
      icon: 'card',
      name: 'Cards',
      redirectTo: '/card'
    },
    {
      icon: 'checkmark',
      name: 'Checks',
      redirectTo: '/check'
    },
    {
      icon: 'calendar',
      name: 'Date',
      redirectTo: '/date-time'
    },
    {
      "icon": "car-outline",
      "name": "Fab",
      "redirectTo": "/fab"
    },
    {
      "icon": "grid-outline",
      "name": "Grid",
      "redirectTo": "/grid"
    },
    {
      "icon": "infinite-outline",
      "name": "Infinite-Scroll",
      "redirectTo": "/infinite"
    },
    {
      "icon": "hammer-outline",
      "name": "Input Forms",
      "redirectTo": "/input"
    },
    {
      "icon": "list-outline",
      "name": "List - Sliding",
      "redirectTo": "/list"
    },
    {
      "icon": "reorder-three-outline",
      "name": "List - Reorder",
      "redirectTo": "/list-reorder"
    },
    {
      "icon": "refresh-circle-outline",
      "name": "Loading",
      "redirectTo": "/loading"
    },
    {
      "icon": "phone-portrait-outline",
      "name": "Modal",
      "redirectTo": "/modal"
    },
    {
      "icon": "tablet-portrait-outline",
      "name": "Popover",
      "redirectTo": "/popover"
    },
    {
      "icon": "code-working-outline",
      "name": "ProgressBar",
      "redirectTo": "/progress"
    },
    {
      "icon": "arrow-down-circle-outline",
      "name": "Refresher",
      "redirectTo": "/refresher"
    },
    {
      "icon": "search-outline",
      "name": "Search",
      "redirectTo": "/search"
    },
    {
      "icon": "copy-outline",
      "name": "Segment",
      "redirectTo": "/segment"
    },
    {
      "icon": "albums-outline",
      "name": "Slides",
      "redirectTo": "/slides"
    },
    {
      "icon": "cog-outline",
      "name": "Tabs",
      "redirectTo": "/tabs"
    },
    {
      "icon": "pricetag-outline",
      "name": "Toast",
      "redirectTo": "/toast"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
