var faces = [6];

function preload(){
    faces[0] = new Image(); faces[0].src = "images/dice-1.png";
    faces[0] = new Image(); faces[1].src = "images/dice-2.png";
    faces[0] = new Image(); faces[2].src = "images/dice-3.png";
    faces[0] = new Image(); faces[3].src = "images/dice-4.png";
    faces[0] = new Image(); faces[4].src = "images/dice-5.png";
    faces[0] = new Image(); faces[5].src = "images/dice-6.png";
}

function roll(imgElement){
    let number = Math.floor(Math.random() * 6)
    imgElement.src = face
}