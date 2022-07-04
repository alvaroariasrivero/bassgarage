const littlePics = document.getElementsByClassName("little");
const price = document.getElementById('price');
const quantity = document.getElementById('quantity');
const cart = document.getElementById('cart');
const disabled = document.getElementById('disabled');

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
    cart.innerHTML = `<h4>El precio total son ${quantity.value * 2.388}€, muchas gracias por su compra</h4>
                    <div class="purchase">
                        <button class="orange-button return" onclick="continueBuying()">Continuar comprando</button>
                        <button class="orange-button return" onclick="location.href = '#';">Pagar la compra</button>
                    </div>
                    <h4>¡Vuelva pronto!</h4>`;
    disabled.style.display = 'block';
    cart.style.display = 'block';
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    // if any scroll is attempted, set this to the previous value
    window.onscroll = function() {
        window.scrollTo(scrollLeft, scrollTop);
    };
};

const continueBuying = () => {
    disabled.style.display = 'none';
    cart.style.display = 'none';
    //enable scroll
    window.onscroll = function() {};
}

selectPic();