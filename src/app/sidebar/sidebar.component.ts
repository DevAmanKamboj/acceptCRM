import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  // icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Professionals', class: '' },
  { path: '/churches', title: 'Churches', class: '' },
  { path: '/user', title: 'User Profile', class: '' },
  { path: '/table', title: 'Table List', class: '' },
  { path: '/typography', title: 'Typography', class: '' },
  { path: '/icons', title: 'Icons', class: '' },
  { path: '/maps', title: 'Maps', class: '' },
  { path: '/notifications', title: 'Notifications', class: '' },
  { path: '/upgrade', title: 'Upgrade to PRO', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  };
}
