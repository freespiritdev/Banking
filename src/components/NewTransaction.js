import React, { Component } from 'react'
import { render } from 'react-dom';

const uuid = require('uuid');

class NewTransaction extends React.Component {
	submitForm(e){
		e.preventDefault();

		let { amount, description } = this.refs;

		let transaction = {
			amount: parseFloat(amount.value),
			description: description.value,
			id: uuid()
		}
		this.props.addTransaction(transaction);
		amount.value = '';
		description.value = '';
	}
   render() {
      return (
         <form onSubmit={this.submitForm}>
         	<div className="form-group col-md-2">
	            <label htmlFor="newAmount">Amount</label>
	            <input ref='amount' type='number' className='form-control' id='newAmount' min='0' step='0.01' required/>
          	</div>
         	<div className="form-group col-md-2">
            	<label htmlFor="newDescription">Description</label>
            	<input ref='description' type='text' className='form-control' id='newDescription' required/>
          	</div>
          	<div className="col-md-2">
          	<button className="btn btn-success">Add</button>
          	  	</div>
          	<br/><br/><br/>
        </form>
      );
   }
}

export default NewTransaction;

