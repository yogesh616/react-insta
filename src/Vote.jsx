import React, { useState } from 'react';
import './vote.css';
import user from './assets/user.jpg';

function Vote() {
  const [vote, setVote] = useState(399);
    
   const handleVote = () => {
     setVote(prevVote => prevVote + 1);
     if (vote >= 400) {
       alert('You have already voted. Thank you!');
       setVote(400);
     }
   }
    
   
    





  return (
    <>
      <section className="dark">
        <div className="container py-4">
          <h1 className="h1 text-center" id="pageHeaderTitle">Vote For Me</h1>

          <article className="postcard dark blue">
            <a className="postcard__img_link" href="#">
              <img className="postcard__img rounded" src={user} alt="Mr Henryy" />
            </a>
            <div className="postcard__text">
              <h1 className="postcard__title blue"><a href="#">Mr Henryy</a></h1>
              <div className="postcard__subtitle small">
                <time dateTime="2024-07-05 12:00:00">
                  <i className="fas fa-calendar-alt mr-2"></i>Fri, July 12th 2024 - Mon, July 15th 2024
                </time>
              </div>
              <div className="postcard__bar"></div>
              <div className="postcard__preview-txt">
                You need to get maximum votes to get 10,000 capital till 15th July. <br />
                Minimum votes needed: 500. <br />
                Top 10 players will get 10,000 on Tue, 16th July. <br />
                Vote for me today! 😇
                <br /><br /><br />
                Name: Mr Henryy <br />
                Email: Henryy2072@gmail.com <br />
                Phone: +91 9785932072 <br />
                Location: Nagar, Bharatpur, Raj.
              </div>
              <ul className="postcard__tagbox">
                <li className="tag__item"><i className="fas fa-tag mr-2"></i>Votes</li>
                <li className="tag__item"><i className="fas fa-clock mr-2"></i>{vote}</li>
                <li className="tag__item play blue">
                  <button className="btn voteBtn" onClick={handleVote}><i className="fas fa-play mr-2">   </i>Vote</button>
                </li>
              </ul>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}

export default Vote;
