function f1() {
    document.getElementById('p1').style.backgroundColor='Red';
    document.getElementById('p1').style.color='Yellow';
    document.getElementById('p1').style.fontSize='30px';
}
function add()
{
  var numOne, numTwo, sum;
  numOne = parseInt(document.getElementById("first").value);
  numTwo = parseInt(document.getElementById("second").value);
  sum = numOne + numTwo;
  document.getElementById("answer").value = sum;
}
function sub()
{
  var numOne, numTwo, sum;
  numOne = parseInt(document.getElementById("first").value);
  numTwo = parseInt(document.getElementById("second").value);
  sum = numOne - numTwo;
  document.getElementById("answer").value = sum;
}
function mult()
{
  var numOne, numTwo, sum;
  numOne = parseInt(document.getElementById("first").value);
  numTwo = parseInt(document.getElementById("second").value);
  sum = numOne * numTwo;
  document.getElementById("answer").value = sum;
}
function div()
{
  var numOne, numTwo, sum;
  numOne = parseInt(document.getElementById("first").value);
  numTwo = parseInt(document.getElementById("second").value);
  sum = numOne / numTwo;
  document.getElementById("answer").value = sum;
}