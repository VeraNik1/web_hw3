function callMeByYourName() {

    let n = prompt("Enter You name, please");
    while (n.length == 0) {
        n = prompt("You need to introduce yourself");
    }
    alert(`Hello, ${n}! Nice to meet You`);
    let result = confirm("Are you older than 18?");
    if (result) {

        alert(`Dear ${n}, now we can try somthing special`);
        let ask = confirm("You sure You wanna try it?");
        if (ask) {
            alert("Lets figure out XXXX task");
            alert("I'll try to find the intersection of two line segments\n (X1, X2) and (X3, X4) placed on the same line ")
            getIntersection();
            changeBgImg();
        }
        else {
            alert("Have a good day! Bye!");
            changeBgImg2();
        }

    }
    else {
        alert("You need to ask Your parents' permission first!");
        alert("Good luck!");
    }

}

var block = document.getElementById('block');

function changeBgImg() {
    block.style.backgroundImage = "url('https://weareoddia.com/c/47-category_default/bdsm-harnesses.jpg')";
    block.style.backgroundSize = cover;
}

function changeBgImg2() {
    block.style.backgroundImage = "url('https://argumenti.ru/images/arhnews/605188.jpg')";
    block.style.backgroundSize = cover;
}

function putCorrectNumber(index){
    while(true){
        try {
            let num = parseFloat(prompt(`Please enter X${index}`));
            return num;
        } catch (error) {
            alert("Incorrect imput. Try again!")
            
        }

    }
}

function getIntersection() {
    let x1 = putCorrectNumber(1);
    let x2 = putCorrectNumber(2);
    let x3 = putCorrectNumber(3);
    let x4 = putCorrectNumber(4);
    if(x2<x3 || x4<x1){
        alert(`Segments (${x1}, ${x2}) and (${x3}, ${x4}) have no intersection`);
    }
    else if (x2==x3) {
        alert(`Segments (${x1}, ${x2}) and (${x3}, ${x4})  intersect in a single point ${x2}`);}
    else if (x4==x1) {
        alert(`Segments (${x1}, ${x2}) and (${x3}, ${x4})  intersect in a single point ${x1}`);
    } 
    else if (x1 <= x3 && x4 <= x2) {
        alert(`Segments (${x1}, ${x2}) and (${x3}, ${x4})  intersect on the line segment (${x3}, ${x4})`);
    }
    else if (x1 <= x3 && x4 > x2) {
        alert(`Segments (${x1}, ${x2}) and (${x3}, ${x4})  intersect on the line segment (${x3}, ${x2})`);
    }
    else if (x3 <= x1 && x4 >= x2) {
        alert(`Segments (${x1}, ${x2}) and (${x3}, ${x4})  intersect on the line segment (${x1}, ${x2})`);
    }
    else {
        alert(`Segments (${x1}, ${x2}) and (${x3}, ${x4})  intersect on the line segment (${x1}, ${x4})`);
    }     

}

callMeByYourName()

