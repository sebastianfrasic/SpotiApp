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
      Authorization: 'Bearer BQCPGSq3y-ItvM_x3uzXnp-oZEDysnBIu3RJ92NZ3mDUhwIOnTk1ZwbmMt3u3n-yZtcU6ynvA2A17a0zUQ0'
    });

    return this.http.get(URL, {headers});
  }

  getNewReleases(){


    return this.getQuery('browse/new-releases')
    .pipe(map((data: any) => {
      return data['albums'].items;
  }));
 
  }

  getArtists(termino: string){
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
      .pipe(map((data: any) => data['artists'].items
      ));
  }

  getArtist(id: string){
    return this.getQuery(`artists/${id}`);
      //.pipe(map((data: any) => data['artists'].items      ));
  }

  getTopTracks(id: string){
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
      .pipe(map((data: any) => data['tracks']));
  }
}
