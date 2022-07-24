import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


type Props = {
  startYear: number,
  endYear: number,
  schoolName: string,
  schoolDescription: any,
  companyName?: string,
}

const Education = (props: Props) => {
  return (
    <Grid>
      <Cell col={4}>
        <p>{props.startYear} - {props.endYear}</p>
      </Cell>
      <Cell col={8}>
        <h4 style={{ marginTop: '0px' }}>{props.schoolName}</h4>
        <h6 style={{ marginTop: '0px' }}><i>{props.companyName}</i></h6>
        <p>{props.schoolDescription}</p>
      </Cell>
    </Grid>
  )
}

export default Education;
