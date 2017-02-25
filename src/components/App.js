import React, { Component } from 'react';
import NewTransaction from './NewTransaction'
import Transactions from './Transactions'

export default class App extends Component {
	constructor(props){
		super(props);
		
		this.state = {
			transactions: []
		}
	}
	addTransaction(newTransaction){
		let { transactions } = this.state;
		this.setState({ 
			transactions: [...transactions, addTransaction]
		})
	}
	removeTransaction(removeTransaction){

	}
	render() {
    	return (
    		<div className="container">
    			<h1 className="text-center">Welcome to Banking!</h1>
    			<NewTransaction className="col-md-3" addTransaction={this.addTransaction}/>
    			<Transactions className="col-md-6"/>
    		</div>
    )
  }
}
