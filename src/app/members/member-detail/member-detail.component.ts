import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MembersService } from 'src/app/_services/members.service';
import { Member } from 'src/app/models/member';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {
  member: Member | undefined;

  constructor(private memberService: MembersService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.loadMember();
  }

  loadMember() {
    var id = this.route.snapshot.paramMap.get('id');
    if (!id) return;
    var memberId = parseInt(id);
    this.memberService.getMember(memberId).subscribe({
      next: member => {
        this.member = member,
        console.log(this.member)
      }

    });
  }

}
