import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.css']
})
export class PostListComponentComponent implements OnInit {

  @Input() title: string;
  @Input() content: string
  @Input() loveIts: number
  @Input() created_at: Date

  constructor() { }

  calcSucc(){
    return this.loveIts>0?true:false;
  }

  calcdang(){
    return this.loveIts<0?true:false;
  }

  ngOnInit() {
  }

  onLove(){
    this.loveIts++;
  }

  onHate(){
    this.loveIts--;
  }
}
