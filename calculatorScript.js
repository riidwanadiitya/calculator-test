//function that display value
function clickNumber(val) {
  document.getElementById("result").value += val;
}

//function that evaluates the digit and return result
function results() {
  let x = document.getElementById("result").value;
  let y = eval(x);
  document.getElementById("result").value = y;
}

//function that clear the display
function clearData() {
  document.getElementById("result").value = "";
}
