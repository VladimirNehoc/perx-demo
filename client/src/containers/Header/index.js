import React from 'react';
import PropTypes from 'prop-types';

import './style.less';

const Header = ({
  title,
  children,
}) => (
  <div className="page-header">
    <div
      className="page-header_title"
      title={title}
    >
      <span>{title}</span>
    </div>

    <div className="page-header_additional">
      {children}
    </div>
  </div>
);

Header.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
};

Header.defaultProps = {
  title: '',
  children: null,
};

export default Header;
