import React from 'react';
import Container from './container/BillingContainer';

class App extends React.Component {
  render(){
    return (
        <div className="container-fluid pt-3 bg-primary text-white">
          <h1 className="text-center">Billing System</h1>
          <Container></Container>
        </div>
      );
  }
}

export default App;
