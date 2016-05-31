const React = require('react');
const ReactDOM = require('react-dom');
import { connect } from 'react-redux'
const Provider = require('react-redux').Provider;

const store = require('./store');
const actions = require('./actions');


// PRESENTATIONAL

class Counter extends React.Component {
    constructor(props) {
        super(props);
        var that = this;
        this.onClick = function () {
            console.log('onClick with count', that.props.count);
            return that.props.onIncrement()
        };
    }
    render() {
        const count = this.props.count;
        var text = this.props.loading ? 'Loading' : count + '';
        return <div>
            <h1>{text}</h1>
            <button onClick={this.onClick}>Increment</button>
        </div>
    }
}

// CONTAINER

const mapDispatchToProps = (dispatch) => {
    return {
        // PROBLEM we need to pass count down
        onIncrement: () => {
            dispatch(actions.increment())
        }
    }
};

const mapStateToProps = (state) => {
    return state;
};

const CounterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);

// MAIN
function renderMain() {
    ReactDOM.render(
        <Provider store={store}>
            <CounterContainer/>
        </Provider>,
        document.getElementById('target')
    )
}

renderMain();
store.subscribe(renderMain);
