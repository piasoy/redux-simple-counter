const initialState = {
    value: 0,
    color: ""
}

const reducer = (state = initialState, action) => {
    let { type } = action;
   

    if (type === "INCREMENT_1") {
        return {
            value: state.value + 1
        }
    }

    else if (type === "DECREMENT_1") {
        return {
            value: state.value - 1
        }
    }

    else if (type === "INCREMENT_5") {
        return {
            value: state.value + 5
        }
    }

    else if (type === "DECREMENT_5") {
        return {
            value: state.value - 5
        }
    }

    else if (type === "INCREMENT") {
        return {
            value: state.value + action.num
        }
    }

    else if (type === "DECREMENT") {
        return {
            value: state.value - action.num
        }
    }

    else if (type === 'DISPLAY_RED') {
        return {
            value: state.value,
            color: state.color = "red"
        }
    }

    else if (type === 'DISPLAY_GREEN') {
        return {
            value: state.value,
            color: state.color = "green"
        }
    }

    else if (type === 'DISPLAY_BLUE') {
        return {
            value: state.value,
            color: state.color = "blue"
        }
    }

    
    return state
}

function incrementBy() {
  
    let inputVal = document.getElementById("counterNumber").value
    let num = parseInt(inputVal)
    if (typeof num === "number") {
      
        dispatch({
          type: "INCREMENT",
          num: num
        });
      }
}

function decrementBy() {
  
    let inputVal = document.getElementById("counterNumber").value
    let num = parseInt(inputVal)
    if (typeof num === "number") {
       
        dispatch({
          type: "DECREMENT",
          num: num
        });
      }
}