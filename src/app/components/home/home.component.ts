import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIResponse, List } from 'src/app/models';
import { BookDataService } from 'src/app/service/book-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public lists?: Array<List>;
  
  constructor(
    private bookDataService: BookDataService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getBestsellers();
  }

  getBestsellers(): void {
    this.bookDataService
    .getBestsellersOverview()
    .subscribe((bestsellersLists: APIResponse) => {
      this.lists = bestsellersLists.results.lists;
      console.log(bestsellersLists);
    });
  }
}
