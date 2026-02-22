document.getElementById("result").innerHTML = 68000;

document.querySelectorAll("input").forEach((input) => {
    input.addEventListener("input", () => {
        sum = +document.getElementById("sum").value;
        year = +document.getElementById("year").value;
        per = +document.getElementById("per").value;
        per = per / 100;
        result = sum * per * year + sum;
        document.getElementById("result").innerHTML = result;
    });
})