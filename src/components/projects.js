import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import javaLogo from "../img/java-logo-wide.jpg";
import nodeLogo from "../img/nodejs-logo.png";
import phpLogo from "../img/PHPLogo.svg";
import reactLogo from "../img/react-logo.jpg";


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/* Node Project 1 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: `url(${nodeLogo}) center / cover` }} >Weather Forecast</CardTitle>
            <CardText>
              Weather forcast app is about visualization of weather data in SPA using Node.js, AJAX, jQuery, HTML, CSS, and XSLT.
            </CardText>
            <CardActions border>
              <Button href="https://github.com/rijan-chapagain/weather-forecast" target="_blank" colored>GitHub</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Node Project 2 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: `url(${nodeLogo}) center / cover` }} >Student Record System</CardTitle>
            <CardText>
              Student Record System (SRS) is Web client and server architecture- based application, where the server is implemented using Node.js. The client will be a Web browser & communication between the client and server will be via the HTTP protocol.
            </CardText>
            <CardActions border>
              <Button href="https://github.com/rijan-chapagain/studentRecordSystem" target="_blank" colored>GitHub</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Node Project 3 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: `url(${nodeLogo}) center / cover` }}>Food Tracker</CardTitle>
            <CardText>
              Food Tracker app stores the list of items which can be tracked in future.
            </CardText>
            <CardActions border>
              <Button href="https://github.com/rijan-chapagain/foodTracker" target="_blank" colored>GitHub</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          {/* React Project 1 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: `url(${reactLogo}) center / cover` }} >Restaurent reactApp</CardTitle>
            <CardText>
              Restaurant application developed using React. This app allows restaurants to display insights to customers by allowing table reservation, menu, and gallery of food.
            </CardText>
            <CardActions border>
              <Button href="https://github.com/rijan-chapagain/Restaurant-reactApp" target="_blank" colored>GitHub</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* React Project 2 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: `url(${reactLogo}) center / cover` }} >Personal portfolio</CardTitle>
            <CardText>
              Personal portfolio application developed using React. This app include resume, information about projects and contact details.
            </CardText>
            <CardActions border>
              <Button href="https://github.com/rijan-chapagain/react" target="_blank" colored>GitHub</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    } else if (this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          {/* PHP Project 1 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ height: '176px', background: `url(${phpLogo}) center / cover` }} >Hiring Website</CardTitle>
            <CardText>
              Hiring website is created using PHP, CSS and JavaScript.
            </CardText>
            <CardActions border>
              <Button href="https://github.com/rijan-chapagain/hiring_website" target="_blank" colored>GitHub</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* PHP Project 2 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ height: '176px', background: `url(${phpLogo}) center / cover` }} >Sales Web</CardTitle>
            <CardText>
              Sales Web website  is a part of student project of unit ICT286. It uses PHP, SQL, JS, HTML and CSS.
            </CardText>
            <CardActions border>
              <Button href="https://github.com/rijan-chapagain/salesWeb" target="_blank" colored>GitHub</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* PHP Project 3 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ height: '176px', background: `url(${phpLogo}) center / cover` }} >Visit Nepal</CardTitle>
            <CardText>
              VisitNepal collects nepal visitors data. It uses PHP, JavaScript, SQL, HTML and CSS.
            </CardText>
            <CardActions border>
              <Button href="https://github.com/rijan-chapagain/VisitNepal" target="_blank" colored>GitHub</Button>
              <Button href="https://rijan-chapagain.github.io/VisitNepal/" target="_blank" colored>Website</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    } else if (this.state.activeTab === 3) {
      return (
        <div className="projects-grid">
          {/* JAVA Project 1 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: `url(${javaLogo}) center / cover` }} >Parking Management System</CardTitle>
            <CardText>
              Parking Management System application is a student project of unit ICT167. It designed completely in GUI using JAVA.
            </CardText>
            <CardActions border>
              <Button href="https://github.com/rijan-chapagain/Parking-Management-System" target="_blank" colored>GitHub</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* JAVA Project 2 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#000', height: '176px', background: `url(${javaLogo}) center/cover` }} >Hangman Game</CardTitle>
            <CardText>
              Hangman game is a student project of unit ICT167, created in JAVA using file I/O.
            </CardText>
            <CardActions border>
              <Button href="https://github.com/rijan-chapagain/Hangman-Game" target="_blank" colored>GitHub</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>NodeJs</Tab>
          <Tab>React</Tab>
          <Tab>PHP</Tab>
          <Tab>JAVA</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Projects;
