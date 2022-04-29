import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/services/loader/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  showLoader: boolean;
  constructor(private loader: LoaderService) { }

  ngOnInit(): void {
    this.loader.showLoader.subscribe((show) => {
      this.showLoader = show;
    })
  }

}
