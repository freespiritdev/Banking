import React, { Component } from 'react'
import { render } from 'react-dom';


class Transactions extends React.Component {
   render() {
      return (
         <div>
          <div className="table">
            <div className="col-md-5">Amount</div>
            <div className="col-md-5">Description</div>
            <div className="col-md-5">Remove</div>
         	</div>
          <div className="table">
            <div className="col-md-5">Transactions</div>
          </div>
        </div>
      );
   }
}

export default Transactions;

