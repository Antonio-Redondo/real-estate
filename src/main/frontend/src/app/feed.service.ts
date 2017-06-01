import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { Tweet } from './tweet';

@Injectable()
export class FeedService {

  constructor(private userService : UserService) { }

tweets = [
      new Tweet('Antonio Body','antonio', new Date(),['Firoz'],['Firoz', 'Jose', 'Rosa']),
      new Tweet('Firoz Body','firoz', new Date(),['Antonio'],['Antonio', 'Juanma', 'Roberto']),
       new Tweet('Glen Body','glen', new Date(),['Javier'],['Jesus', 'Margarita', 'Ramesh'])
  ]

  tweetText = '';
  
   getCurrentFeed() : Array<Tweet> {

    return this.tweets;

   }

  isUserInCollection(collection: String[], userId: String) : boolean  {
    return collection.indexOf(userId) != -1;
  }

  OnFavorite(tweet){
    if(!this.isUserInCollection(tweet.favorites, this.userService.getCurrentUser())){
        tweet.favorites.push( this.userService.getCurrentUser());
    }
   
  }

  OnRetweet(tweet){
    if(!this.isUserInCollection(tweet.retweets,  this.userService.getCurrentUser())){
        tweet.retweets.push( this.userService.getCurrentUser());
    }
 
 }

 OnNewTweet(tweetText : string){
    this.tweets.unshift(
     new Tweet(tweetText, this.userService.getCurrentUser(),new Date(), [], []) 
    );
    this.tweetText ='';

 }  

}
