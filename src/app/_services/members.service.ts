import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Member } from '../models/member';
import { map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  baseUrl = environment.apiUrl;
  members: Member[] = [];

  constructor(private http: HttpClient) { }

  getMembers() {
    if (this.members.length > 0) return of(this.members);
    return this.http.get<Member[]>(this.baseUrl + 'users/GestUsers').pipe(
      map(members => {
        this.members = members;
        return members;
      })
    )
  }

  getMember(id: number) {
    const member = this.members.find(x => x.id == id);
    if (member) return of(member);
    return this.http.get<Member>(this.baseUrl + 'users/GetDetail/' + id)
  }

  updateMember(id: number, member: Member) {
    return this.http.patch(this.baseUrl + 'users/EditUserData/' + id, member);
  }

  deletePhoto(photoId: number) {
    return this.http.delete(this.baseUrl + 'users/DeletePhoto/' + photoId);
  }

}
