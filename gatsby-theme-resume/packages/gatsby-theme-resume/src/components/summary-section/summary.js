/** @jsx jsx */
import { jsx } from "theme-ui";
import React from 'react';
import SectionHeader from './../section-header';

const Summary = ({summary}) => {
  return (
      <>
        <SectionHeader>Summary</SectionHeader>
        <div
        sx={{
            display: 'flex',
            justifyContent: 'center',
            fontFamily: 'heading',
            color: "text"
        }}
        >
        {summary}
        </div>
    </>
  );
};

export default Summary;