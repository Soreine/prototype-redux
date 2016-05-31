function requestIncrement(count) {
    return {
        type: 'REQUEST_INCREMENT'
    };
}

function receivedCount(count) {
    return {
        type: 'RECEIVED_COUNT',
        count: count
    };
}

function increment() {
    return {
        queue: 'COUNTER_QUEUE',
        callback: function (next, dispatch, getState) {
            console.log('GetState', getState());
            console.log('Start request');
            dispatch(requestIncrement());
            setTimeout(function () {
                console.log('End request');
                console.log('GetState', getState());
                var result = getState().count + 1;
                dispatch(receivedCount(result));
                next();
            }, 1000);
        }
    };
}

const TYPE = {
    REQUEST_INCREMENT: 'REQUEST_INCREMENT',
    RECEIVED_COUNT: 'RECEIVED_COUNT'
};

module.exports = {
    type: TYPE,
    increment: increment
};
