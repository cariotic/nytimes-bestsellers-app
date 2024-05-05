import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { APIResponseOverview, List } from 'src/app/models';
import { BookDataService } from 'src/app/service/book-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  public lists?: Array<List>;
  public publicationDate?: string;
  private routeSub?: Subscription;
  private listSub?: Subscription;
  
  constructor(
    private bookDataService: BookDataService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.getBestsellers();
  }

  getBestsellers(): void {
    this.listSub = this.bookDataService
    .getBestsellersOverview()
    .subscribe((bestsellersLists: APIResponseOverview) => {
      this.lists = bestsellersLists.results.lists;
      this.publicationDate = bestsellersLists.results.bestsellers_date;
      console.log(bestsellersLists);
    });
  }

  viewFullList(listName: string): void {
    this.router.navigate(['lists', listName]);
  }

  ngOnDestroy(): void {
    if(this.listSub) {
      this.listSub.unsubscribe();
    }
    if(this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }
}
