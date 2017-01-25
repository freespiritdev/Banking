import React, { Component } from 'react'
import { render } from 'react-dom';

const uuid = require('uuid');

class NewTransaction extends React.Component {
   render() {
      return (
         <form onSubmit={this.submitForm}>
         	<div className="form-group">
	            <label htmlFor="newAmount">Amount</label>
	            <input ref='amount' type='number' className='form-control' id='newAmount' min='0' step='0.01' required/>
          	</div>
         	<div className="form-group">
            	<label htmlFor="newDescription">Description</label>
            	<input ref='description' type='text' className='form-control' id='newDescription' required/>
          	</div>
          	<button className="btn btn-success">Add</button>
        </form>
      );
   }
}

export default NewTransaction;

