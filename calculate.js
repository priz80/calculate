document.getElementById("result").innerHTML = 68000;

document.querySelectorAll("input").forEach((input) => {
    input.addEventListener("input", () => {
        sum = +document.getElementById("sum").value;
        year = +document.getElementById("year").value;
        result = sum * 0.12 * year + sum;
        document.getElementById("result").innerHTML = result;
    });
})