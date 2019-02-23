import React, {Component} from 'react';
import Counter from './Counter.js';

class Counters extends Component {
	

	render() {
		return (
			<div>
			<button onClick={this.props.onReset} className="btn btn-sm btn-danger m-3">Reset</button>

			{this.props.counters.map(count => 
				<Counter key={count.id} counter={count} onDelete={this.props.onDelete} onDecrement={this.props.onDecrement} onIncrement={this.props.onIncrement} />)}
			</div>
			)
	}

}

export default Counters;