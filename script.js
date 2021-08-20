const btnEl = document.getElementById('btn');
const formEl = document.getElementById('form');

btnEl.addEventListener('click', () => {
    var total = [];
    var chosen = [];
    //Getting the input values from DOM
    const avilEl = document.getElementById('from');
    const selEl = document.getElementById('sel');
    const displayEl = document.getElementById('display');


    //converting the input values to Number
    var num1 = parseInt(avilEl.value);
    var num2 = parseInt(selEl.value);

    filler(num1); //filling the total array
    checker(num1, num2) //invoking checker array
    formEl.reset() //Resetting the input values
    display();


    function checker(num, count) {

        //Filling the chosen array with unique values;
        for (var i = 1; i < count + 1; i++) {
            var newValue = randomSelector(num);

            //Checking and removing of duplications
            if (chosen.indexOf(newValue) >= 0) {
                i--;
            } else {
                chosen.push(newValue);
            }
        }
    }

    function randomSelector(num) {
        var value = Math.floor(Math.random() * num);

        return value;
    }

    function filler(num) {

        for (var i = 1; i < num + 1; i++) {
            total.push(i);
        }
    }


    function display() {

        chosen.sort((a, b) => (a - b)); //Sorting chosen values

        for (var i = 0; i < chosen.length; i++) {

            var tag = document.createElement("span");
            var text = document.createTextNode(chosen[i]);
            tag.appendChild(text);

            displayEl.appendChild(tag);
        }
    }
});