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
      Authorization: 'Bearer BQCg8qE6krMfZ1K69zYJbfg-CGEd9XFyxjIogOQdD1529hb4qgT004LuNu0tgUWg7RFhELQN2IhYiKLzfoA'
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
