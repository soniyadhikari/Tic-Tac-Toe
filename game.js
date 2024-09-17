let rst = document.querySelector("#myId");
let btns = document.querySelectorAll(".class2");
let winC = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let player1 = [];
let player2 = [];
let press = 0;
btns.forEach((btn, idx) => {
    btn.addEventListener("click", () => {
        press++;
        if (press % 2 !== 0) {
           btn.style.color="chartreuse";
            btn.innerHTML = "X";
            console.log(idx);
            player1.push(idx);
            console.log(player1);
            if (check(player1)) {
                display("Player 1");
                console.log("Player 1 won");
            }
           
        }
        else {
           btn.style.color="black";
            btn.innerHTML = "O";
            console.log(idx);
            player2.push(idx);
            console.log(player2);
            if (check(player2)) {
                console.log("Player 2 won");
                display("Player 2");
            }
        }
        btn.disabled = true;
    });
  
});
function disable() {
    btns.forEach((btn, idx) => {
        btn.disabled = true;
    });
}

function check(arr) {
    if (arr.length < 3)
        return false;
    for (let i of winC) {
        let count = 0;
        for (let j = 0; j < 3; j++) {
            for (let k of arr) {
                if (i[j] === k)
                    count++;
            }
        }
        if (count === 3) {
            disable();
            return true;
        }
    }
    if(player1.length+player2.length==9){
        abc();
        return;
    }
    return false;
}
rst.addEventListener("click", () => {
    rst.innerHTML="Reset button";
    player1 = [];
    player2 = [];
    btns.forEach((btn, idx) => {
        btn.innerHTML = "";
        btn.disabled = false;
    });
    let P = document.querySelector(".newP");
    P.remove();
    press = 0;
});

function display(str) {
    let newP = document.createElement("p");
    newP.innerHTML = "Congratulations " + str + " won!";
    newP.setAttribute("class", "newP");
    document.querySelector(".myClass").after(newP);
    rst.innerHTML="Start again";
}
function abc(){
    console.log("Draw");
    let newP = document.createElement("p");
    newP.innerHTML ="Draw";
    newP.setAttribute("class", "newP");
    document.querySelector(".myClass").after(newP);
    rst.innerHTML="Start again";
}
