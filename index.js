const init = () => {
  initClear();
  initButtonActions();
}

const initClear = () => {
    document.onkeydown = function(evt) {
        evt = evt || window.event;
        if (evt.keyCode == 27) {
            document.getElementsByClassName('calculator__screen')[0].innerText = '0';
            console.log('cleared screen');
        }
    };
}

const initButtonActions = () => {

}

