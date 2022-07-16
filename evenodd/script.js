let check = function () {
  let number = Math.floor(document.getElementById("numb").value);
  if (number % 2 == 0) {
    return (document.getElementById("resultado").innerHTML =
      "The number " + number + " is Even");
  } else if (number % 2 != 0) {
    return (document.getElementById("resultado").innerHTML =
      "The number " + number + " is Odd");
  } else {
    return (document.getElementById("resultado").innerHTML = "Invalid Number");
  }
};