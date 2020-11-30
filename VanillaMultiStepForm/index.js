let Form1 = document.getElementById("Form1")
let Form2 = document.getElementById("Form2")
let Form3 = document.getElementById("Form3")

let progress = document.getElementById("progress")

let next1 = document.getElementById("next1")
let next2 = document.getElementById("next2")
let back1 = document.getElementById("back1")
let back2 = document.getElementById("back2")

next1.onclick = () => {
    Form1.style.left = "-450px";
    Form2.style.left = "40px";
    progress.style.width = '240px'
}

back1.onclick = () => {
    Form1.style.left = "40px";
    Form2.style.left = "450px";
    progress.style.width = '120px'
}

next2.onclick = () => {
    Form2.style.left = "-450px";
    Form3.style.left = "40px";
    progress.style.width = '360px'
}

back2.onclick = () => {
    Form2.style.left = "40px";
    Form3.style.left = "450px";
    progress.style.width = '240px'
}