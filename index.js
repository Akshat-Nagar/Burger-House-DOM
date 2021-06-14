const r1 = document.getElementById('r1');
const r2 = document.getElementById('r2');
const r3 = document.getElementById('r3');
const d1 = document.getElementById('d1');
const d2 = document.getElementById('d2');
const d3 = document.getElementById('d3');
const j1 = document.getElementById('j1');
const j2 = document.getElementById('j2');
const j3 = document.getElementById('j3');
const list = document.getElementById('list');
const total = document.getElementById('total');
const clear = document.getElementById('clear');
let bill = [];

r1.addEventListener('click',function(e){
    let data = {
        name: "Baked Beamer",
        price: 59
    };

    bill.push(data);
    add();
})

r2.addEventListener('click',function(e){
    let data = {
        name: "Fried Patty",
        price: 59
    };

    bill.push(data);
    add();
})

r3.addEventListener('click',function(e){
    let data = {
        name: "Crispy Nugget",
        price: 65
    };

    bill.push(data);
    add();
})

d1.addEventListener('click',function(e){
    let data = {
        name: "Patty Twisted",
        price: 85
    };

    bill.push(data);
    add();
})

d2.addEventListener('click',function(e){
    let data = {
        name: "Crunch Beam",
        price: 85
    };

    bill.push(data);
    add();
})

d3.addEventListener('click',function(e){
    let data = {
        name: "Double Patty",
        price: 85
    };

    bill.push(data);
    add();
})

j1.addEventListener('click',function(e){
    let data = {
        name: "Big Jumbo",
        price: 115
    };

    bill.push(data);
    add();
})

j2.addEventListener('click',function(e){
    let data = {
        name: "Center Crunch",
        price: 115
    };

    bill.push(data);
    add();
})

j3.addEventListener('click',function(e){
    let data = {
        name: "Center Beam",
        price: 115
    };

    bill.push(data);
    add();
})

function add(){
    list.innerHTML = null;
    for(let i = 0;i < bill.length;i++){
        let li = document.createElement('li');
        li.style.display = "flex";
        li.style.justifyContent = "space-between";
        li.style.alignItems = "center";

        let no = document.createElement('p');
        no.innerText = i + 1 + ".";

        let n = document.createElement('p');
        n.innerText = bill[i].name;

        let p = document.createElement('p');
        p.innerText = bill[i].price + "/-";

        let button = document.createElement('button');
        button.innerText = "X";
        button.style.cursor = "pointer";

        button.addEventListener('click',function(e){
            console.log(bill[i],bill,i);
            bill.splice(i,1);
            console.log(bill[i],bill,i);
            total.innerText = " /- ";
            add();
        })

        li.appendChild(no);
        li.appendChild(n);
        li.appendChild(p);
        li.appendChild(button);
        list.appendChild(li);

        let sum = 0;
        for(let j = 0;j < bill.length;j++){
            sum += bill[j].price;
        }
        total.innerText = sum + "/-";
    }
}
clear.addEventListener('click',function(e){
    list.innerHTML = null;
    bill = [];
    total.innerText = " /- ";
})