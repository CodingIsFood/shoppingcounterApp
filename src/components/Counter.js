import React, { Component } from "react";

class Counter extends Component {  
    
    
    //imageUrl: "https://picsum.photos/200"
    
	
	render() {
		/*
		let classes="badge m-3 badge-";
		classes+= this.state.value === 0 ? "warning" : "primary";
		*/

	return (
	<div>
		<span className={this.getBadgeClasses()}>{this.formatValue()}</span>
		<button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm m-2">+</button>
		<button onClick={() => this.props.onDecrement(this.props.counter)} className="btn btn-secondary btn-sm" disabled={this.props.counter.value<1}>-</button>
		<button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-sm btn-danger m-3">Delete</button>
	</div>
	 )
	}

	formatValue() {
		const { value } = this.props.counter;
		return value === 0 ? "Zero" : value;
	}

   getBadgeClasses() {
	let classes="badge m-3 badge-";
	classes+= this.props.counter.value === 0 ? "warning" : "primary";
	return classes
}
	
}

export default Counter