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

    else if (type === 'DISPLAY_COLOR') {
        return {
            value: state.value,
            color: action.color
        }
    }

    else if (type === 'SET_COUNTERNUM') {
        return {
            value: action.num
        }
    }
    
    return state
}

function getNumInput(){
    let inputVal = document.getElementById("counterNumber").value
    let num = parseInt(inputVal)
    if (typeof num === "number") {
      
        dispatch({
          type: "SET_COUNTERNUM",
          num: num
        });
      }
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