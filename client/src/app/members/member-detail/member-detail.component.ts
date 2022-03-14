import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Member } from 'src/app/_models/member';
import { Photo } from 'src/app/_models/photo';
import { MembersService } from 'src/app/_services/members.service';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {
  member: Member;
  slides: { image: string; text?: string }[] = [];
  activeSlideIndex = 0;

  constructor(private memberService: MembersService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadMember();
  }

  loadMember() {
    this.memberService.getMember(this.route.snapshot.paramMap.get('username')).subscribe(member => {
      this.member = member;
      this.addPictures(member.photos);
    })
  }

  addPictures(photos: Photo[]) {
    console.log(photos);
    for (let i = 0; i < photos.length; i++) {
      this.slides.push({
        image: `${photos[i].url}`
      });
    }
  }
  
}
