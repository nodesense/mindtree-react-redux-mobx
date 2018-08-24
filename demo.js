function wrapper() {
    console.log(arguments)
}

function wrapper2(...args) {
    console.log(args)
}


const increment = (value) => (
    {
        type: 'INCREMENT',
        payload:  {value: value} // value: value
    }
)

 const reset = () => (
    {
        type: 'RESET'
    }
)

function bindActionCreators(actionCreator, dispatch) {
    return function wrapper(...args) {
            let action = actionCreator.apply(undefined, args)
            console.log("ACTION", action)
            dispatch(action)
    }
}
wrapper()
wrapper(1,2)
wrapper.apply({}, [10,20])

function dispatch(action) {
    console.log("DISPATCH **", action)
}

wrapper2 = bindActionCreators(increment, dispatch)
wrapper2(1)
wrapper2(100)

wrapperReset =  bindActionCreators(reset, dispatch)
wrapperReset()