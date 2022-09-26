const products = document.querySelector('.products')
const price = document.querySelector('#price')
var Lsum = 0;
const productData = [{
    img: 'images/坎蒂斯.png',
    style: 'color:#ff1000;font-weight:bold;',
    name: '坎蒂斯',
    price: 25,
    amount: 0
}, {
    img: 'images/阿貝多.png',
    style: 'color:#ff1000;font-weight:bold;',
    name: '阿貝多',
    price: 50,
    amount: 0
}, {
    img: 'images/溫迪.png',
    style: 'color:#ff1000;font-weight:bold;',
    name: '溫迪',
    price: 100,
    amount: 0
}, {
    img: 'images/賽諾.png',
    style: 'color:#ff1000;font-weight:bold;',
    name: '賽諾',
    price: 2000,
    amount: 0
}, {
    img: 'images/妮露.png',
    style: 'color:#ff1000;font-weight:bold;',
    name: '妮露',
    price: 6480,
    amount: 0
}]

productData.forEach((data, i) => {
    // console.log(i)
    products.innerHTML += (`
    <div class='container'>
        <img src="${data.img}" alt="" class="images">
        <p class='productName'>${data.name}</p>
        <p style='${data.style}'>NT$${data.price}</p>
        <div class="buy">
            <input type="button" value="-" onclick="add(${i}, -1)" class='btn'>
            <input type="text" value='${data.amount}' name='${data.name}' class="price" >
            <input type="button" value="+" onclick="add(${i}, 1)" class='btn'>       
        `)
})

function add(i, n) {
    buySum = document.querySelector('.buySum')
    buyminSum = document.querySelector('.buyminSum')
    Lsum += n * productData[i].price
    if (Lsum < '0') {
        Lsum = 0;
        return '';
    }
    productData[i].amount += n

    document.querySelectorAll('.price')[i].setAttribute('value', productData[i].amount)
    console.log('price', document.querySelectorAll('.price')[i].value)
    console.log('-------')

    document.querySelectorAll('.price')[i].value = productData[i].amount
    console.log('price', document.querySelectorAll('.price')[i].value)
    console.log('-------')


    buyminSum.innerHTML = '小計$' + Lsum + '元'
    buySum.innerHTML = '總計$' + (Lsum + 60) + '元'

    // document.querySelector('[name="buyminSum"]').value = Lsum
    // document.querySelector('[name="buySum"]').value = Lsum + 60
}

function f_show() {
    // console.log(i)
    var Lname = '';
    var buyminSum = Lsum + 60 + "\n";
    var buySum = Lsum;

    productData.forEach((data, i) => {
        Lname += data.name + ':' + data.amount + "\n"
    })
    alert(Lname + buyminSum + buySum);
}