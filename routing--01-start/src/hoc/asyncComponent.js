import React, { Component } from 'react';
// this file helps loading a component asynchronously only when it's needed.
const asyncComponent = (importComponent) => {
    return class extends Component {
        state = {
            component: null
        }
        // importComponent should be a function 
        componentDidMount () {
            importComponent()
                .then(cmp => {
                    this.setState({component: cmp.default});
                });
        }

        render () {
            const C = this.state.component;
            // This component will eventually render some dynamically loaded component
            // and we decide which component it should be with the function we passed to AsyncComponent.
            return C ? <C {...this.props} /> : null;
        }
    }
}

export default asyncComponent;