for(let i = 1; i <= 16; i++){
    let div = document.createElement("div");
    div.classList = "square";
    div.id = i;
    document.getElementById('container').appendChild(div);
}

const test = document.getElementsByClassName("square");
for(sq of test){

sq.addEventListener("mouseover", (e)=>{
    e.target.style.backgroundColor = "white";
},false);
}
console.log(test);

function promptMe(){
let maxNum = prompt("How many squares?:");
if (maxNum < 0 && maxNum <= 100) {
drawGrid(maxNum);
}
}

function drawGrid(num) {
    let oldDivs = document.getElementsByClassName("square");

    while (oldDivs.length) {
        console.log(oldDivs[0])
        oldDivs[0].remove();
        
    }
    for (let i = 1; i <= num * num; i++) {
        let div = document.createElement("div");
        div.classList = "square";
        div.id = i;
        let remSize = 40 / num;
        div.style.height = remSize + "rem";
        div.style.width = remSize + "rem";
        div.addEventListener("mouseover", (e) => {
            e.target.style.backgroundColor = "white";
        }, false);
        document.getElementById('container').appendChild(div);
        console.log(i);
    }
}
