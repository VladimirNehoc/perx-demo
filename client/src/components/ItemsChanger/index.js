import React from 'react';
import PropTypes from 'prop-types';

import './style.less';

const ItemsChanger = ({
  count,
  onAdd,
  onRemove,
  disableAdd,
  disableRemove,
}) => (
  <div className="items-changer">
    <button
      type="button"
      className="items-changer_remove-button"
      onClick={onRemove}
      disabled={disableRemove}
    >
      -
    </button>

    <div className="items-changer_count">{count}</div>

    <button
      type="button"
      className="items-changer_add-button"
      onClick={onAdd}
      disabled={disableAdd}
    >
      +
    </button>
  </div>
);

ItemsChanger.propTypes = {
  count: PropTypes.number,
  onAdd: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  disableAdd: PropTypes.bool,
  disableRemove: PropTypes.bool,
};

ItemsChanger.defaultProps = {
  count: 0,
  disableAdd: false,
  disableRemove: false,
};

export default ItemsChanger;
