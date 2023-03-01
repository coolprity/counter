const countValue = document.querySelector("#counter");

const incerement = () => {
    //Take value from UI
    let value = parseInt(countValue.innerText);
    //Update the value
    value = value + 1;
    //set value on UP
    countValue.innerText = value;

};

const decerement = () => {
    //Take value from UI
    let value = parseInt(countValue.innerText);
    //Update the value
    value = value - 1;
    //set value on UP
    countValue.innerText = value;

};