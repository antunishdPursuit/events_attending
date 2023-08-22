import "../../Css/AboutCss.css"
import React from 'react';
import image from './HomePageEventPlanner.png'
export default function About() {
    
  return (
    <article>
        <div class="centering">
            <h2>My Event Planner Website Journey</h2>
            <div className="paragraph-box">
            <p>I'm excited to share my journey of creating my very own event planner website! 🎉 After spending weeks diving into web development, I've successfully built a simple yet effective event planner app that helps me manage events effortlessly.</p>
            </div>
            <div className="event-box">
                <img className="event-image"src={image} alt="Event Planner Screenshot"/>
                <div className="paragraph-box">
                <h3 className="event-header">The Inspiration</h3>
                <p className="event-paragraph">The idea for this project came to me when I realized the need for a versatile event planning tool. I wanted to create an application that seamlessly integrates event searching, user management, and event tracking.</p>
                </div>
            </div>
            <h3>The Tech Stack</h3>
            <p>I leveraged the following technologies to build this application:</p>
            <ul>
                <li>Frontend: HTML, CSS, JavaScript, React</li>
                <li>Backend: Node.js with Express.js</li>
                <li>Database: PSQL for efficient data storage</li>
                <li>External APIs: Ticketmaster API for event searching</li>
                <li>Deployment: Hosted the backend on Render and frontend on Netlify</li>
            </ul>
            <h3>Features Implemented</h3>
            <p>I started with the basics and gradually added more features:</p>
            <ul>
                <li>Schedule management: Plan event schedules and share them with attendees.</li>
                <li>Responsive design: A user-friendly interface that works across devices.</li>
            </ul>
            <h3>Challenges Faced</h3>
            <p>While developing the app, I encountered challenges that led to valuable insights:</p>
            <ul>
                <li>API Integration: Learning to work with external APIs and handling responses.</li>
                <li>State Management: Effectively managing state using React's hooks.</li>
                <li>Backend Development: Creating API endpoints and handling CRUD operations.</li>
            
                <li>Deployment: Configuring the backend and frontend for a seamless deployment.</li>
            </ul>
            <h3>What I Learned</h3>
            <p>This project was a fantastic learning experience:</p>
            <ul>
                <li>Improved my coding skills, especially in JavaScript, Node.js, React,and Express</li>
                <li>Gained a deeper understanding of REST APIs and backend development.</li>
                <li>Learned how to deploy a full-stack application on Netlify and Render.</li>
            </ul>
            <h3>Sharing on GitHub</h3>
            <div className="paragraph-box">
            <p>I've just pushed my event planner app to GitHub, and you can find the repository <a href="https://github.com/antunishdPursuit/events_attending">here</a>. Feel free to explore the code, provide feedback, or even contribute if you're interested!</p>
            <p>Thank you for joining me on this journey. I'm thrilled to have created a functional event planner website, and I'm excited to see how it evolves in the future. 🚀</p>
            </div>
        </div>
    </article>
  );
}
