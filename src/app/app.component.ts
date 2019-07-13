import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  postsArray=[
    new Post("MOn premier post", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, consectetur temporibus. Odit ipsum ad temporibus corrupti atque a impedit, error aperiam eveniet consequatur non blanditiis nemo tenetur similique modi porro."
    ,10),
    new Post("MOn deuxiéme post", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, consectetur temporibus. Odit ipsum ad temporibus corrupti atque a impedit, error aperiam eveniet consequatur non blanditiis nemo tenetur similique modi porro."
    ,-2),
    new Post("Encore un post", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, consectetur temporibus. Odit ipsum ad temporibus corrupti atque a impedit, error aperiam eveniet consequatur non blanditiis nemo tenetur similique modi porro."
    ,0)
  ]
}

class Post{
  title: string;
  content: string;
  loveIts: number;
  created_at: Date;

  constructor(title: string, content: string, loveIts: number){
    this.title= title;
    this.content=content;
    this.loveIts=loveIts;
    this.created_at= new Date();
  }
}