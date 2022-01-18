import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})

export class LargeStablishmentsService {

  constructor(private router:Router,
              private http: HttpClient) {
  }

}
