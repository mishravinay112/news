import React from 'react';

// Import can't be in conditional so use require.
if (process.env.WEBPACK) {
  require('../css/components/loader.css'); // eslint-disable-line global-require
}
const Loader = () => (
  <div className="text-center">
    <span className="fa fa-circle-o-notch fa-spin loader loader" />
  </div>
);

export default Loader;
