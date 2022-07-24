import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';

type Props = {
  skill: string,
  progress: number
}

const Skills = (props: Props) => {
    return(
      <Grid>
        <Cell col={12}>
          <div style={{display: 'flex'}}>{props.skill} <ProgressBar style={{margin: 'auto', width: '75%'}} progress={props.progress} /> </div>
        </Cell>
      </Grid>
    )
  }

export default Skills;
