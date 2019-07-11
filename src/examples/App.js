import React from "react";
import {ErrorPage} from 'react-custom-errors';

const App = () => (
  <div>
    <ErrorPage code="404" />
  </div>
);

export default App;
