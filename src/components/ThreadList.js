import react , {useState} from 'react';
import Tweet from '../../../../app1/src/components/tweet';

const TweetList = () => {
    const [tweets , setTweet] = useState([
        {
            title : 'Thread name#1',
            content : 'Just trying to create thread',
            UpVote : 0,
            DownVote : 0,
            id : 0
        },
        {
            title : 'Thread name #2',
            content : 'What a bird',
            UpVote : 0,
            DownVote : 0,
            id :1
        },
        {
            title : 'Thread name #2',
            content : 'dafuq',
            UpVote : 0,
            DownVote : 0,
            id :2
        }   
    ])
}