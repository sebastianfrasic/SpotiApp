import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getNewReleases(){
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQDPfbJV-FSwS3walThJ0Sb3nKnaHalWqG_sUSe96BZyLucgfsrnSPB-JX88ITPzl5TVmXDb-nYLuIWBgW4'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers})
      .pipe(map((data: any) => {
        return data['albums'].items;
    }));
  }

  getArtist(termino: string){
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQDPfbJV-FSwS3walThJ0Sb3nKnaHalWqG_sUSe96BZyLucgfsrnSPB-JX88ITPzl5TVmXDb-nYLuIWBgW4'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, {headers})
      .pipe(map((data: any) => data['artists'].items
      ));
  }
}
