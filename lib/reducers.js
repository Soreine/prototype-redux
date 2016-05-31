const ACTIONS_TYPE = require('./actions').type;

const INITIAL_STATE = {
    loading: false,
    count: 0
};

function counter(state, action) {
    if (state === undefined) {
        state = INITIAL_STATE;
    }

    switch (action.type) {
    case ACTIONS_TYPE.REQUEST_INCREMENT:
        return Object.assign({}, state, {
            loading: true
        });
    case ACTIONS_TYPE.RECEIVED_COUNT:
        return Object.assign({}, state, {
            loading: false,
            count: action.count
        });
    default:
        return state;
    }
}

module.exports = {
    counter: counter
}
