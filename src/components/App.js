import React, { Component } from 'react';
import NewTransaction from './NewTransaction'

export default class App extends Component {
	constructor(){
		super();
		
		this.state = {
			transactions: []
		}
	}
	newTransaction(newTransaction){

	}
	removeTransaction(removeTransaction){

	}
	render() {
    	return (
    		<div>
    			<h1 className="text-center">Welcome to Banking!</h1>
    			<NewTransaction/>
    		</div>
    )
  }
}
