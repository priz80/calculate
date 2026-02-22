document.getElementById("result").innerHTML = 68000;

document.querySelectorAll("input").forEach((input) => {
  input.addEventListener("input", () => {
    sum = +document.getElementById("sum").value;
    year = +document.getElementById("year").value;
    per = +document.getElementById("per").value;
    if (sum >= 0 && year >= 0 && per >= 0) {
      result = (per / 100) * sum * year + sum;
    } else {
      location.reload();
    }
    document.getElementById("result").innerHTML = result;
  });
});
