const littlePics = document.getElementsByClassName("little");
const price = document.getElementById('price');
const quantity = document.getElementById('quantity');
const cart = document.getElementById('cart');

const selectPic = () => {
    for(let i = 0; i < littlePics.length; i++){
        littlePics[i].addEventListener('click', function(){
            let picSrc = littlePics[i].src;
            document.getElementById('bigPic').src = '.' + picSrc.slice(-18);
        })
    }
};

const totalPrice = () => {
    price.innerText = `Total ${quantity.value * 2.388}€`;
};

const payPurchase = (event) => {
    event.preventDefault();
    cart.innerText = `El precio total son ${quantity.value * 2.388}€, muchas gracias por su compra`;
    // cart.style.position = 'absolute'
    cart.style.display = 'block'
};

selectPic();