import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { APIResponseFullList, List } from 'src/app/models';
import { BookDataService } from 'src/app/service/book-data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  private routeSub?: Subscription;
  private listSub?: Subscription;
  public listName?: string;
  public list?: List;

  constructor(
    private activatedRoute: ActivatedRoute,
    private bookDataService: BookDataService
  ) { }

  ngOnInit(): void {
    this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
      this.listName = params['list-name'];
      this.getFullList(this.listName);
    });
  }

  getFullList(listName?: string) {
    this.listSub = this.bookDataService
    .getFullList(listName)
    .subscribe((bestsellersList: APIResponseFullList) => {
      this.list = bestsellersList.results;
      console.log(bestsellersList);
    });
  }
}
