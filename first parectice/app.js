function showData() {
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var data = "my name is " + name + " my age is" + age;


    document.getElementById('show').innerHTML = data;

}

function calculate(operator) {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;

    if (num1 == '') {
        alert("Enter First Number");
    }
    else if (num2 == '') {
        alert("Enter Second Number");
    }
    else {
        num1 = parseInt(num1);
        num2 = parseInt(num2);

        if (operator == '+') {
            var result = num1 + num2;
            showResult(result);
        } else if (operator == '-') {
            var result = num1 - num2;
            showResult(result);

        } else if (operator == '*') {
            var result = num1 * num2;
            showResult(result);


        }

    }

}

function showResult(result) {
    document.getElementById('showAdd').innerHTML = result;
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
}