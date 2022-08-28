import React, { useState } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import { GenericProjectComponent } from '../common/genericProjectComponent';

const toggleCategories = (activeTab: number) => {
  switch (true) {
    case (activeTab === 0): return (
      <div className="projects-grid">
        {/* Node Project 1, Weather Forecast */}
        <GenericProjectComponent
          background='/img/nodejs_logo.png'
          title='Weather Forecast'
          text='Weather forcast app is about visualization of weather data in SPA using Node.js, AJAX, jQuery, HTML, CSS, and XSLT.'
          githubLink='https://github.com/rijan-chapagain/weather-forecast'
        />

        {/* Node Project 2, Student Record System */}
        <GenericProjectComponent
          background='/img/nodejs_logo.png'
          title='Student Record System'
          text='Student Record System (SRS) is Web client and server architecture- based application, where the server is implemented using Node.js. The client will be a Web browser & communication between the client and server will be via the HTTP protocol.'
          githubLink='https://github.com/rijan-chapagain/studentRecordSystem' />

        {/* Node Project 3, Food Tracker */}
        <GenericProjectComponent
          background='/img/nodejs_logo.png'
          title='Food Tracker'
          text='Food Tracker is a web application that helps users to track their food intake and calories intake. The application is developed using Node.js, Express.js, MongoDB, and React.js.'
          githubLink='https://github.com/rijan-chapagain/foodTracker'
        />
      </div>
    )
      break;
    case (activeTab === 1): return (
      <div className="projects-grid">
        {/* React Project 1, Restaurent reactApp */}
        <GenericProjectComponent
          background='/img/react_logo.png'
          title='Restaurent React App'
          text='Restaurant application developed using React. This app allows resturants to display insights to customers by allowing table reservation, menu, and gallery of food.'
          githubLink='https://github.com/rijan-chapagain/Restaurant-reactApp'
        />

        {/* React Project 2, Personal Portfolio */}
        <GenericProjectComponent
          background='/img/react_logo.png'
          title='Personal Portfolio'
          text='Personal portfolio application developed using React. This app include resume, information about projects and contact details.'
          githubLink='https://github.com/rijan-chapagain/my-portfolio'
        />
      </div>
    );
      break;
    case (activeTab === 2): return (
      <div className="projects-grid">
        {/* PHP Project 1, Hiring Website */}
        <GenericProjectComponent
          background='/img/php_logo.png'
          title='Hiring Website'
          text='Hiring website is created using PHP, CSS and JavaScript.'
          githubLink='https://github.com/rijan-chapagain/hiring_website'
        />

        {/* PHP Project 2, Sales Web */}
        <GenericProjectComponent
          background='/img/php_logo.png'
          title='Sales Web'
          text='Sales Web website  is a part of student project of unit ICT286. It uses PHP, SQL, JS, HTML and CSS.          '
          githubLink='https://github.com/rijan-chapagain/salesWeb'
        />
        {/* PHP Project 3, Visit Nepal */}
        <GenericProjectComponent
          background='/img/php_logo.png'
          title='Visit Nepal'
          text='VisitNepal collects nepal visitors data. It uses PHP, JavaScript, SQL, HTML and CSS.'
          githubLink='https://github.com/rijan-chapagain/VisitNepal'
          website={true}
          websiteLink='https://rijan-chapagain.github.io/VisitNepal/'
        />
      </div>
    );
      break;
    case (activeTab === 3): return (
      <div className="projects-grid">
        {/* JAVA Project 1, Parking Management System */}
        <GenericProjectComponent
          background='/img/java_logo.png'
          title='Parking Management System'
          text='Parking Management System application is a student project of unit ICT167. It designed completely in GUI using JAVA.'
          githubLink='https://github.com/rijan-chapagain/Parking-Management-System'
        />

        {/* JAVA Project 2, Hangman Game */}
        <GenericProjectComponent
          background='/img/java_logo.png'
          title='Hangman Game'
          text='Hangman game is a student project of unit ICT167, created in JAVA using file I/O.'
          githubLink='https://github.com/rijan-chapagain/Hangman-Game'
        />
      </div>
    )
      break;
    default: return <></>;
  }
}


export const Projects = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  return (
    <div>
      <Tabs activeTab={activeTab} onChange={(tabId) => setActiveTab(tabId)} ripple>
        <Tab>NodeJs</Tab>
        <Tab>React</Tab>
        <Tab>PHP</Tab>
        <Tab>JAVA</Tab>
      </Tabs>

      <Grid>
        <Cell col={12}>
          <div className="content">{toggleCategories(activeTab)}</div>
        </Cell>
      </Grid>
    </div>
  )
}

export default Projects;
