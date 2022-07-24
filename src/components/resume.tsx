import React, { Component } from 'react';
import { Grid, Cell, List, ListItem } from 'react-mdl';
import Education from './education';
import Skills from './skills';


class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <h2 style={{ paddingTop: '2em' }}>Rijan Chapagain</h2>
            <h4 style={{ color: 'grey' }}>Programmer</h4>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            <p>Jnr. Mobile and Web app developer using NodeJS, React, jQuery.
              Common libraries of use: fs, node-formidable, Redux, body-parser.
              Common use of UI libraries: Bootstrap 4, React-Bootstrap, CSS, canvasJs, jQuery table.</p>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            <h5>Address</h5>
            <p>Perth, Western Australia (6150)</p>
            <h5>Phone</h5>
            <p>+61 452 659 223</p>
            <h5>Email</h5>
            <p>hrijon.chp@gmail.com</p>
            <h5>Web</h5>
            <p>https://rijan-chapagain.github.io/pp/</p>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>

            <Education
              startYear={2019}
              endYear={2021}
              schoolName="Murdoch University"
              schoolDescription="Bachelor of Science in Mobile and Web Application Development"
            />

            <Education
              startYear={2018}
              endYear={2019}
              schoolName="Murdoch Institute of Technology"
              schoolDescription="Diploma of Information and Communication Technology (DICT)"
            />
            <hr style={{ borderTop: '3px solid #e22947' }} />

            <h2>Experience</h2>
            <Education
              startYear={2020}
              endYear={2021}
              schoolName="Junior Software Developer Intern"
              companyName="HeadStart Careers"
              schoolDescription={
                <ul>
                  <li typeof="point">
                    Developing Web application for HeadStart application using React, typescript and node.
                  </li>
                  <li>
                    Building schema, entities, resolvers, and API using Graphql, and TypeOrm.
                  </li>
                  <li>
                    Creating a database using postgres.
                  </li>
                  <li>
                    Writing documentation about each project component.
                  </li>
                  <li>
                    Working from home, daily stand up with the team.
                  </li>
                </ul>



                // Building schema, entities, resolvers, and API using Graphql, and TypeOrm.
                // 
                // Writing documentation about each project component.
                // Working from home, daily stand up with the team.
              }
            />
            <Education
              startYear={2018}
              endYear={2019}
              schoolName="Student Council memebr"
              companyName="Murdoch Institute of technology (MIT)"
              schoolDescription="Attained weekly meeting and discuss about problems and solutions that might help MIT students.
                  Volunteered in 2 international student orientation programs held at MIT and organized a program ‘talent show'."
            />
            <h2>Skills</h2>
            <Skills
              skill="javascript"
              progress={100}
            />
            <Skills
              skill="HTML/CSS"
              progress={100}
            />
            <Skills
              skill="NodeJS"
              progress={90}
            />
            <Skills
              skill="React"
              progress={60}
            />
            <Skills
              skill="PHP"
              progress={50}
            />
            <Skills
              skill="Tableau"
              progress={80}
            />
            <Skills
              skill="Power BI"
              progress={70}
            />
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
