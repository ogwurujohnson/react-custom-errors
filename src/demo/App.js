import React from "react";
import ErrorPage from 'react-custom-errors';


const App = () => (
  <div>
    <ErrorPage
      code={403}
      customMessage="hfhfh"
      link="/yejhhhh"
      backgroundColor="brown"
    />
  </div>
);



export default App;
