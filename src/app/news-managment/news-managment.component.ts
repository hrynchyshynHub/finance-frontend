import { Component, OnInit } from '@angular/core';
import {NewsService} from './news.service';
import {News} from '../models/news';

@Component({
  selector: 'app-news-managment',
  templateUrl: './news-managment.component.html',
  styleUrls: ['./news-managment.component.css']
})
export class NewsManagmentComponent implements OnInit {

  date = new Date();
  news: News[];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.getNews();
    let new1 = new News();
    // new1.content = 'asdadadasdasd';
    // new1.description = 'asdadadasdasd';
    // new1.title = 'asdadadasdDSASasasd';
    // new1.urlToImage = 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fpngimage.net%2Fwp-content%2Fuploads%2F2018%2F06%2Fnews-png-3.png&imgrefurl=https%3A%2F%2Fpngimage.net%2Fnews-png-3%2F&docid=sngJiG8jO5HuQM&tbnid=Nrxd6hjn1bCnAM%3A&vet=10ahUKEwjqy8iC-_fgAhV566YKHRmqCxwQMwhCKAMwAw..i&w=1499&h=796&bih=884&biw=1658&q=news%20png&ved=0ahUKEwjqy8iC-_fgAhV566YKHRmqCxwQMwhCKAMwAw&iact=mrc&uact=8';
    // this.news.push(new1);
    //
    // let new2 = new News();
    // new2.content = 'asdadadasdasd';
    // new2.description = 'asdadadasdasd';
    // new2.title = 'asdadadasdDSASasasd';
    // new2.urlToImage = 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fpngimage.net%2Fwp-content%2Fuploads%2F2018%2F06%2Fnews-png-3.png&imgrefurl=https%3A%2F%2Fpngimage.net%2Fnews-png-3%2F&docid=sngJiG8jO5HuQM&tbnid=Nrxd6hjn1bCnAM%3A&vet=10ahUKEwjqy8iC-_fgAhV566YKHRmqCxwQMwhCKAMwAw..i&w=1499&h=796&bih=884&biw=1658&q=news%20png&ved=0ahUKEwjqy8iC-_fgAhV566YKHRmqCxwQMwhCKAMwAw&iact=mrc&uact=8';
    // this.news.push(new2);
  }

  getNews(){
    this.newsService.getNews()
      .subscribe(data => this.news = data);
  }

  getRandomSpan():number{
    return Math.floor((Math.random()*6)+1);
  }


}
