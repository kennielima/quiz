const rightbut = document.getElementsByClassName("rightbut");
let wrongbut = document.getElementsByClassName("wrongbut");
let rightdiv = document.getElementsByClassName("rightdiv");
let wrongdiv = document.getElementsByClassName("wrongdiv");
let divs = document.getElementsByClassName("divs");
const q = document.getElementsByClassName("q");
const q1 = document.getElementById("q1");
const q2 = document.getElementById("q2");
const next = document.getElementById("next");
const buttons = document.getElementsByTagName("button");
q2.style.display = "none";

// right answers
for (let right of rightbut){
right.addEventListener('click', () => {
right.disabled = true;
for (let wrong of wrongbut){wrong.disabled = true;}
    // let ans = document.createElement('span');
    // ans.textContent = "CORRECT!";
        // right.parentNode.appendChild(ans);
        for (let right of rightdiv){
            let ans = document.createElement('span');
            ans.textContent = "✅";  
            right.appendChild(ans);
        }
    
    for (let wrongs of wrongbut){
            let ans = document.createElement('span');
            ans.textContent = "❌";
            // for (let wrong of wrongdiv){
            wrongs.parentNode.appendChild(ans);
        // }
    }
})
}
// wrong answers
for (let wrongs of wrongbut){
    wrongs.addEventListener('click', () => {
        for (let right of rightbut){right.disabled = true;}
        for (let wrong of wrongbut){wrong.disabled = true;}
        // let ans = document.createElement('span');
        // ans.textContent = "WRONG!";
        for (let wrong of wrongdiv){
            let ans = document.createElement('span');
            ans.textContent = "❌";
        wrong.appendChild(ans);
    }
    for (let right of rightdiv){
        let ans = document.createElement('span');
        ans.textContent = "✅";  
        right.appendChild(ans);
    }
    })
}

next.addEventListener('click', (e) =>{
    console.log(e.target.parentNode);
    e.target.parentNode.style.display = "none";
    // q[0].innerHTML = "";
    let nextQ = q[0].nextElementSibling;
    nextQ.style.display = "block";

    // q1.style.display = "none";
    // q2.style.display = "block";
    for (let button of buttons){
        button.disabled = false;
    }
    for(let div of divs){
    div.lastChild.remove();
    }
})


