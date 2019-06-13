import Responsive from 'react-responsive';
import React from 'react'

const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;

export default Tablet
