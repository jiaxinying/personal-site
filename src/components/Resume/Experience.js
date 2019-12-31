import React from 'react';
import PropTypes from 'prop-types';

import Job from './Experience/Job';

const Experience = ({ data, id, section }) => (
  <div className="experience">
    <div className="link-to" id={id} />
    <div className="title">
      <h3>{section}</h3>
    </div>
    {data.map((job) => (
      <Job
        data={job}
        key={job.company}
      />
    ))}
  </div>
);

Experience.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    company: PropTypes.string,
    position: PropTypes.string,
    link: PropTypes.string,
    daterange: PropTypes.string,
    points: PropTypes.arrayOf(PropTypes.string),
  })),
  id: PropTypes.string,
  section: PropTypes.string,
};

Experience.defaultProps = {
  data: [],
  id: 'experience',
  section: 'Experience',
};

export default Experience;
