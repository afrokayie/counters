//First step is to set initial Count which will be later changed by Javacsript

let count = 0;

//Secondly select value and  buttons

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn")

//Iterate over each button using forEach

btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
       const styles = e.currentTarget.classList;
       if (styles.contains('decrease')){
        count--;
       } else if (styles.contains('increase')){
        count++;
       } else {
        count = 0;
       }

    if (count > 0) {
        value.style.color ="#228C22";
    }

    if (count < 0) {
        value.style.color ="red";
    }

    if (count === 0) {
        value.style.color ="#222";
    }

    value.textContent = count;

    })
})