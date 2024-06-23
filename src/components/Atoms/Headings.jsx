import React from 'react';
import PropTypes from 'prop-types';

function Heading({ level, children, icon, className }) {
  let Tag;

  switch (level) {
    case 1:
      Tag = 'h1';
      break;
    case 2:
      Tag = 'h2';
      break;
    case 3:
      Tag = 'h3';
      break;
    case 4:
      Tag = 'h4';
      break;
    case 5:
      Tag = 'h5';
      break;
    case 6:
      Tag = 'h6';
      break;
    default:
      Tag = 'h1'; // default to h1 if level is not specified or invalid
  }

  return (
    <div>
      <Tag className={className}><div className='text-[rgb(6,187,204)]'>{icon}</div>{children}</Tag>
    </div>
  );
}

Heading.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Heading.defaultProps = {
  className: '',
};

export default Heading;
