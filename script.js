const http = new XMLHttpRequest();
http.open("GET", "data.json", true);
http.send();
http.addEventListener("load", function () {
    resultDataObj = JSON.parse(this.responseText);
    let output = '';
    for (x of resultDataObj) {
        output +=
            `
        <div class="${x.category.toLowerCase()} result">
        <span class="left-stat">
        <img src="${x.icon}">
        <p>${x.category}</p>
    </span>
        <span class="right-stat">
        <p><span class="obtain-marks">${x.score}</span><span class="total-marks">/100</span></p>
    </span>
          </div>
    `
    }
    document.querySelector(".results").innerHTML = output;
})