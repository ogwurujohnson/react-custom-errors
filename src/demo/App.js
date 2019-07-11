import React from "react";
import ErrorPage from '../lib/components/ErrorPage';


const App = () => (
  <div>
    <ErrorPage
      code={503}
      customMessage=""
      link="/yejhhhh"
      backgroundColor=""
    />
  </div>
);



export default App;
