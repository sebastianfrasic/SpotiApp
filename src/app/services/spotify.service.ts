import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery(query: string){
    const URL = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization: 'Bearer BQAGmoeRV_AsqaO-TFnAJkPXIp8D-qphI699zjjo14dOL6sdl7LLsXvO2mbSXH9dZrV4rH38syErX9s98f4'
    });

    return this.http.get(URL, {headers});
  }

  getNewReleases(){


    return this.getQuery('browse/new-releases')
    .pipe(map((data: any) => {
      return data['albums'].items;
  }));
 
  }

  getArtist(termino: string){


    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
      .pipe(map((data: any) => data['artists'].items
      ));
  }
}
