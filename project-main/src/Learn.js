import { makeStyles } from '@material-ui/core';
import React from 'react'
import Footer from './components/Footer';
import Header from './components/Header';

const useStyles = makeStyles((theme) => ({
main:{
    backgroundColor:"#020c0f",
    color:"white",
    textAlign:"center",
    paddingBottom :"10%",

    '& p':{
        paddingTop:"2%",
        fontSize:"18px",
        padding:'0% 10%',
        lineHeight:"30px"


    },
    '& h2':{
        paddingTop:"8%",
        fontSize:"40px",
        color: "#095c71",


    }
}
}));

export default function Learn() {
    const classes = useStyles();

    return (
        <div>
        <div className={classes.main}>
            <Header/>
            <div>
                <h2>An Introduction</h2>
                <p>Achieving integration and diversity in the practice of activities within the school enables the student to advance to creativity as it provides many fields for students and gives opportunities to choose from multiple activities according to inclinations and desires. A gesture of student creativity.
                The second stage of the diversity of the clubs' activities comes to expand to allow the diversification of the fields of activities and allow the practice of all types and fields of student activities, so that it is agreed to amend the name of these clubs to be science and technology clubs to be compatible with experimental education.
</p>
<h2>Definition of clubs</h2>
<p>A club is an association of people united by a common interest or goal. A service club, for example, exists for voluntary or charitable activities. There are clubs devoted to hobbies and sports, social activities clubs, political and religious clubs, and so forth.</p>
          <h2>Benefits of joining college clubs</h2>
          <p>The university is a place for learning, but learning itself is not limited to lectures, research, libraries and seasonal activities. Rather, there are greater opportunities for different lessons that build your personality, through non-seasonal activities, perhaps the most prominent of which are university clubs, according to a report from the Times Higher Education website. These clubs have several benefits, the report reviews three of them as follows:
          </p>
          <p>1- You can make friends and meet new people: Whether you are participating in your favorite sport or your favorite social activity or trying a new activity, you are likely to see a change in your social life. The times you will spend in this or that activity are very important to get to know people who are like you in thinking, and to make new friends, which can have a positive effect, as these activities are usually outside the scientific specialization or the usual seminar, or even the place of residence.
          </p>
          <p>2- Promote mental health: the university can cause negative effects, especially intensive lessons, exams, competition, and the relationship with professors. You may feel lonely, or lost, and you can go through a period of great stress and stress. But joining a sports, intellectual, or social club helps reduce stress and promote mental health.</p>
           <p>3- Future career opportunities? Perhaps: One of the less obvious benefits of participating in one of the social or sports clubs at university is the positive impact that this can have on the level of subsequent career opportunities. Job interviews usually require proof of various skills. Time management is an essential skill in many jobs, so if you can tell the employer that you have managed to achieve a balance between your university studies and what you require from academic tasks on the one hand, and participating in the basketball team, for example, on the other hand, then this matter is very beneficial to you on the other hand. This level. However, the issue goes further than that, if you want a long-term job, joining a club in your university reveals your passion for it, which should be reflected in your future career choice as well.</p>
           <p>The report concludes by emphasizing that it is not always easy to get out of your comfort zone, or the isolation area, even if it includes some usual people, but joining a team and trying what is new has its advantages, and some may even remember it as the best thing that happened to him during a period University study.</p>
            <h2>Clubs goals</h2>
            <p>1. The establishment of activities that highlight the efforts of the club members in the areas in which they excel.</p>
           <p>2. Discover student talents and nurture the gifted.</p>
           <p> 3. Create an appropriate environment for students to develop their capabilities and skills, exchange experiences between them, and work to encourage, support and honor them.</p>
            <p>4. Participation in various events, internally and externally, for friction and exchange of experiences.</p>
            <p>5. Documenting student production and creating a database of student talents in various fields.</p>
            <h2>Membership conditions</h2>
            <p>The student must be a regular at the university.</p>
            <p>Fill out the membership application form.</p>
            <p>It is a condition that no judgments (inside or outside the university) have been issued against the membership applicant that prejudice honor, trust, or misconduct.</p>
            <p>Membership is renewed annually.</p>
            </div>
        </div>
        <Footer/>

        </div>

    );
}


