const container = document.querySelector("#container");
let cards = document.querySelectorAll("#container div");
let count = 0;


function add() {
    const s = document.querySelector("#sel");
    var ss = s.value
    while (ss > 0) {
        const d = document.createElement("div")
        container.appendChild(d);

        ss = ss - 1;
    }
    btnn.removeEventListener("click", add)
    cards = document.querySelectorAll("#container div");
    ran();
}


function show(event) {
    if (event.currentTarget == c) {
        c.textContent = "GIFT";
        st = document.querySelector("#status")
        st.textContent = "YOU WIN AFTER " + count + " STEPS";
    } else
        count++;

}
let c

function ran() {
    var index = Math.floor(Math.random() * cards.length);
    c = cards[index];
    cards.forEach(card => card.addEventListener("click", show));

}

function restart() {
    location.reload();
}
const btnn = document.querySelector("#btn");
btnn.addEventListener("click", add)