import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoaderService } from '../loader/loader.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = environment.api.url;
  appkey = environment.api.appkey;


  constructor(private loaderService: LoaderService) {

  }

  post(method: string, obj: object) {
    this.loaderService.showLoader.next(true);
    setTimeout(() => {
      //should call api authentication
      this.loaderService.showLoader.next(false);
    }, 1500);
  }

  put(method: string, obj: object) {
    this.loaderService.showLoader.next(true);
    setTimeout(() => {
      //should call api authentication
      this.loaderService.showLoader.next(false);
    }, 1500);
  }

  delete(method: string, obj: object) {
    this.loaderService.showLoader.next(true);
    setTimeout(() => {
      //should call api authentication
      this.loaderService.showLoader.next(false);
    }, 1500);
  }

  get(method: string) {
    this.loaderService.showLoader.next(true);
    setTimeout(() => {
      //should call api authentication
      this.loaderService.showLoader.next(false);
    }, 1500);
  }
}
