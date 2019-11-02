const render = (state) => {
    const counterDOM = document.getElementById('counterValue');
    counterDOM.innerHTML = state.value;
    const counterButtons = document.getElementsByTagName("button")
    for (let index = 0; index < counterButtons.length; index++) {
        counterButtons[index].style.background = state.color
    }

}