function reducer(state, action) {
  switch (action.type) {
    case "INCREASE":
      const currentVal = state.counter;
      return {
        ...state,
        counter: currentVal + 1,
      };
    default:
      return state;
  }
}

function renderCounter(store) {
    const val = store.getState();
    console.log(`SS: ${val.counter}`);
    const span = document.getElementById('counterVal');
    span.innerHTML = val.counter;
}

function handleButtonClick(store) {
    const button = document.getElementById('counterButton');
    button.addEventListener('click', () => {
        store.dispatch({type: 'INCREASE'});
    })
}

function init() {
  const store = createStore(reducer, { counter: 0});
  store.subscribe(renderCounter);
  handleButtonClick(store);
  renderCounter(store);
}

init();
