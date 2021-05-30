// BÀI 1
function BT1() {
    let kq = `<tbody>`;
    for (let i = 0; i < 10; i++) {
        let tr = `<tr>`;
        for (let j = 1; j <= 10; j++) {
            tr = tr + `<td>${i * 10 + j}</td>`;
        }
        tr = tr + `</tr>`;
        kq = kq + tr;
    }
    kq = kq + `</tbody>`;
    document.querySelector("#bt1").innerHTML = kq;
}
BT1();

// BÀI 2 
function isPrime(k) {
    if (k <= 1) {
        return false;
    }
    else {
        for (let i = 2; i <= Math.sqrt(k); i++) {
            if (k % i == 0) {
                return false;
            }
        }
    }
    return true;
}
function BT2(arrayList) {
    let kq = `<tbody>`;
    let tr = `<tr>`;
    arrayList.forEach(element => {

        if (isPrime(element)) {
            tr = tr + `<td>${element}</td>`;
        }

    });
    tr = tr + `</tr>`;
    kq = kq + tr + `</tbody>`;
    document.querySelector("#bt2").innerHTML = kq;
}
arrayList = [1, 23, 4, 5, 6, 2, 5, 6, 7, -1, -61, 11];
BT2(arrayList);

//BÀI 3
function BT3(n) {
    let kq = 0;
    for (let i = 2; i <= 3 * n; i++) {
        kq += i;
    }
    return kq;
}
document.querySelector("#btnBt3").addEventListener('click', (e) => {
    e.preventDefault();
    let kq = document.querySelector("#bt3").value;
    document.querySelector("#kqBt3").innerHTML = BT3(kq);
});

//BÀI 4
function BT4(n) {
    let kq = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i == 0) {
            kq += 1;
        }
    }
    return kq;
}
document.querySelector("#btnBt4").addEventListener('click', (e) => {
    e.preventDefault();
    let kq = document.querySelector("#bt4").value;
    document.querySelector("#kqBt4").innerHTML = BT4(kq);
});

//BÀI 5
function BT5(n) {
    let kq = '';
    for (let i = n.length - 1; i >= 0; i--) {
        kq = kq + n[i];
    }
    return kq;
}
document.querySelector("#btnBt5").addEventListener('click', (e) => {
    e.preventDefault();
    let kq = document.querySelector("#bt5").value;
    document.querySelector("#kqBt5").innerHTML = BT5(kq);
});

//BÀI 6
function BT6() {
    let kq = 0, i = 1;
    while (kq <= 100) {
        kq += i;
        if (kq > 100) {
            break;
        }
        i += 1;
    }
    return i - 1;
}

document.querySelector("#kqBt6").innerHTML = BT6();

//BÀI 7
function BT7(n) {
    let kq = `<tbody>`;
    for (let i = 0; i < 11; i++) {
        kq = kq + `<tr><td>${n} x ${i} = ${n * i}</td></tr> `;
    }
    kq = kq + `</tbody>`;
    return kq;
}

document.querySelector("#btnBt7").addEventListener('click', (e) => {
    e.preventDefault();
    let kq = document.querySelector("#bt7").value;
    document.querySelector("#tableBt7").innerHTML = BT7(kq);
});

//BÀI 8
function BT8(cards) {
    let kq = `<tbody>`;
    var players = [[], [], [], []];
    for (let i = 0; i < players.length; i++) {
        let j = i;
        while (j < cards.length) {
            players[i].push(cards[j]);
            j += players.length;
        }
    }
    players.forEach((element, index) => {
        kq = kq + `<tr><td>var player${index+1} = [${element}]</td></tr> `;
        console.log(element);
    });
    kq = kq + `</tbody>`;
    return kq;  
}
var cards = ["4K", "KH", "5C", "KA", "QH", "KD", "2H", "10S", "AS", "7H", "9K", "10D"];
document.querySelector("#tableBt8").innerHTML = BT8(cards);

//BÀI 9
function BT9(m,n){
    let arr=[];
    let ga=(4*m-n)/2;
    let cho=(n-2*m)/2;
    arr.push(ga);
    arr.push(cho);
    return arr;
}
document.querySelector("#btnBt9").addEventListener('click', (e) => {
    e.preventDefault();
    let soConM = document.querySelector("#soConM").value;
    let soChanN=document.querySelector("#soChanN").value;
    let kq=BT9(Number(soConM),Number(soChanN));
    document.querySelector("#kqBt9").innerHTML = `Số gà:${kq[0]}. Số chó: ${kq[1]}`;
});

//BÀI 10
function BT10(h,min){
    return Math.abs(6*min-0.5*(h*60+min));
}
document.querySelector("#btnBt10").addEventListener('click', (e) => {
    e.preventDefault();
    let soGio = document.querySelector("#soGio").value;
    let soPhut=document.querySelector("#soPhut").value;
    let kq=BT10(Number(soGio),Number(soPhut));
    document.querySelector("#kqBt10").innerHTML =kq;
});