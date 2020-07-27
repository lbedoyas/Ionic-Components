import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {

  titulo: string ="Infinite Scroll";

  data: any = Array(20);

  constructor() { }

  ngOnInit() {
  }

}
