import { Component, Input, OnInit } from '@angular/core';
import { IList } from 'src/app/interfaces/ilist';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  standalone: false,
})
export class ListComponent  implements OnInit {

    listLinks: IList[] = [
      {
        name: 'top headlines',
        url: '/home/top-headlines',
      },
      {
        name:'business',
        url: '/home/business'
      },
      {
        name: 'entertainment',
        url: '/home/entertainment'
      },
      {
        name: 'general',
        url: '/home/general'
      },
      {
        name: 'health',
        url: '/home/health'
      },
      {
        name: 'science',
        url: '/home/science'
      },
      {
        name: 'sports',
        url: '/home/sports'
      },
      {
        name: 'technology',
        url: '/home/technology'
      }
    ];

  constructor() { }

  ngOnInit() {}

}
