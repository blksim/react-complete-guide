import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0,
        results: []
    } // dosen't manage state anymore.

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractCounter}  />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button> 
                <ul>
                    {this.props.storedResults.map(strResult => (
                        <li key={strResult.id} onClick={() => this.props.onDeleteResult(strResult.id)}>{strResult}</li>
                    ))}
                </ul>
            </div>
        );
    }
}
/**
 *  It stores a function which expects the state stored in redux as the input
 *  and returns a js object shich is a map of prop names and *slices* of the state stored in redux. 
 */
const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results
    };
}; 

/**
 * It stores a function which will receive the dispatch function which we can execute as an argument.
 * If we directly access the store, the react-redux package gives us well basically this helper function which will call dispatch() on the store behind the scenes.
 * then here also return a js object where we can define some prop names which will hold a reference to a function which should eventually get executed to dispatch an action
 */
const mapDispatchToProps = dispatch => {
    return { // property holds the ref to this function
        onIncrementCounter: () => dispatch({type: actionTypes.INCREMENT}), // value should be an anonymous function
        onDecrementCounter: () => dispatch({type: actionTypes.DECREMENT}),
        onAddCounter: () => dispatch({type: actionTypes.ADD, number: 5}),
        onSubtractCounter: () => dispatch({type: actionTypes.SUBTRACT, number: 5}),
        onStoreResult: (res) => dispatch({type: actionTypes.STORE_RESULT, result: res}),
        onDeleteResult: (id) => dispatch({type: actionTypes.DELETE_RESULT, dispatchElId: id})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter); // gives us this container with access 