import React from 'react';
import { Tooltip } from 'react-tooltip'

const Tooltips = ({ id, message }) => (
  <Tooltip id={id} type="error" effect="solid">
    {message}
  </Tooltip>
);

export default Tooltips;
