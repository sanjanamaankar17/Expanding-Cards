/*let name = "sanJana";
document.writeln(name);
document.writeln(typeof name);
let msg = "Hello Ms. ${name}!";
document.writeln(msg);
document.writeln(name.charAt(0).toUpperCase() + name.toLowerCase().slice(1));
document.writeln(name.length);
let arr = [ 10, 20, 30, 40];
arr.forEach(element => {
    document.writeln(element);
});

map = new Map();
let b = [];
arr.map(ele => {
    b.push(ele * 2);
});

document.writeln(b.join(' '));

const date = new Date();
document.writeln("    ");
document.writeln(date.getFullYear());

let a = [1, 2, 2, 3, 4, 4, 5, 5, 6];
a = [...new Set(a)]; //spread operator
document.writeln(a);*/


const panels = document.querySelectorAll(".panel")

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActive();
        panel.classList.add("active");
    })
});
const removeActive = () => {
    panels.forEach(panel => {
        panel.classList.remove("active");
    });
}