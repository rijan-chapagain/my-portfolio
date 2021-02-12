import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Home extends Component {
  render() {

    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="Home-grid">
          <Cell col={12}>
            <div className="banner-text">
              <h1>Mobile and Web App Developer</h1>

              <hr/>

              <p>NodeJS | JavaScript | React | jQuery | JSON | HTML/CSS | Bootstrap | PHP | SQL | Tableau | Power BI</p>

              <div className="social-links">

                {/* Github */}
                <a href="https://github.com/rijan-chapagain/" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>

                {/* LinkedIn */}
                <a href="http://linkedin.com/in/rijan-chapagain/" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/* envelope */}
                <a href="mailto:hrijon.chp@gmail.com" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-envelope-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>

          <Cell col={12}>
            <div className="home-card">
            {/* <Link to="/aboutme">About Me</Link> */}
              <h1>About Me</h1>

              <hr/>
              <h2> Rijan Chapagain </h2>
              <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>
                Jnr. Mobile and Web app developer using NodeJS, React, jQuery. 
                Common libraries of use: fs, node-formidable, Axios, Redux, body-parser. 
                Common use of UI libraries: Bootstrap 4, React-Bootstrap, CSS, canvasJs, jQuery table.
              </p> <br/>
            </div>
          </Cell>

          <Cell col={12} >
            <div className="home-card">
              {/* <Link to="/aboutme">About Me</Link> */}
                <h1>Projects</h1>
                {/* <ImageGallery items={images} /> */}
                <p>
                  <div id="weather">
                    <h4>Weather Forcast</h4>
                      Weather Forecast is an web application written in Nodejs, jQuery, JavaScript, HTML and style with css.
                  </div>
                  <div id="tableau">
                    <h4>Tableau visulization</h4>
                    Tableau visulization is about reporting the cases of COVID-19 pandemic cases in australian jurisdiction(state & territory) using visulization. 
                  </div>
            
                  <div id="foodTracker">
                    <h4>Food tracker</h4>
                      Food tracker is an web application written in Nodejs, HTML and style with css.
                  </div>
                  <div id="studentRecord">
                    <h4>Student Record System (SRS)</h4>
                      SRS is an web application written in Nodejs, HTML and style with css.
                  </div>
                  <div id="hiring">
                    <h4>Hiring Website</h4>
                      This is a hiring website written in JavaScript,Php, html and style with css and bootstrap components.
                  </div>
                </p>
                <hr/>
              </div>
            </Cell>
        </Grid>
      </div>
    )
  }
}


export default Home;
