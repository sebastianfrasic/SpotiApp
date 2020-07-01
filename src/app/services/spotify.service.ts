import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getNewReleases(){
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQDgcQFtaQGnrByMRpFYNxYUmuvPRJsv-cx7JGC2blzhaZVhDv5KK0CGRP8tnsKIzML3O2M2MOxthXBzwaM'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers});

  }
}
