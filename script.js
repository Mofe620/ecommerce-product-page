var toggle = document.querySelector('#toggler');
var close = document.querySelector('#closeNav');
var nav = document.querySelector('.nav-box');
var overcast = document.querySelector('.overcast');
var body = document.querySelector('body');

//NAV TOGGLE
toggle.addEventListener("click", function(){
    nav.classList.toggle("show");
    overcast.classList.toggle("show");
})
close.addEventListener("click", function(){
    nav.classList.toggle("show");
    overcast.classList.toggle("show");
})

// MODAL 
var cartIcon = document.querySelector('.cart');
var modal = document.querySelector('.cart-modal');
var closeModal = document.querySelector('.close-modal');
var cartHeader = document.querySelector('.cart-header');
var cartBody = document.querySelector('.cart-body');

cartIcon.addEventListener("click", function(){
    modal.style.display = 'flex';
})
closeModal.addEventListener("click", function(){
    modal.style.display = 'none';
})
window.onclick = function(event){
    if(event.target == modal){
        modal.style.display = 'none'; //closes the modal when window outside modal is clicked
        console.log(event.target);
    }
} 

//CART QTY
var add = document.querySelector('#add');
var remove = document.querySelector('#subtract');
var num = document.querySelector('#num');
var badge = document.querySelector('.badge');
qty = 0;
num.textContent = 0;


add.addEventListener("click", function(){
    qty +=1 ;
    num.textContent = qty;
    renderCart();
})

remove.addEventListener("click", function(){
    if (qty > 0) {
        qty -= 1 ;
        num.textContent = qty;
        renderCart();
    }
})

function renderCart(){
    var cartRow = document.createElement('div');
    var desc = "Autumn Limited Edition..."
    thumbnail = 'images/image-product-1-thumbnail.jpg'
    price = parseInt(document.getElementById('price').innerText);
    cartRow.classList.add('cart-row');

    var CartRowContent =    `<div class="cart-item">
                                <img src="${thumbnail}" class="thumbnail" width="50" height="50" alt="">
                                <div class="cart-item-info">
                                    <span class="">${desc}</span>
                                    <p class="">$${price}.00 x ${qty} <span class="cart-price">$${price * qty}.00</span></p>
                                </div>
                                <img id="delete-btn" src="images/icon-delete.svg" alt="">
                            </div>
                            <button>Checkout</button>`;
    cartBody.innerHTML = CartRowContent;
    badge.style.opacity = '1';
    badge.textContent = qty;

    var del = document.querySelector('#delete-btn');
    del.addEventListener("click", function(){
        cartBody.textContent = "Your cart is empty.";
        qty = 0;
        badge.textContent = qty;
        num.textContent = qty;
    })
}

//THUMBNAIL REEL 
var thumbnails = document.getElementsByClassName("reel-image"); //creates a HTMLCollection
var displayImage = document.querySelector('.product');
var boxDisplay = document.querySelector('#lightboxDisplay');
    //convert HTMLCollection to Array
    var images = [].slice.call(thumbnails);
    images.forEach(element => {
        element.addEventListener("click", function(){
            element.setAttribute("id", "active");
            var choice = element.getAttribute('src');
            let otherImages = images.filter(function(value){
                return value != element;
            })
            otherImages.forEach(item => {
                item.setAttribute("id", "");
            })
            let active = choice.replace("-thumbnail.jpg", ".jpg");
            displayImage.setAttribute('src', active);
            boxDisplay.setAttribute('src', active);
        })

    })
    
//IMAGE LIGHTBOX
var lightBox = document.querySelector('.lightbox');
var closeBox = document.querySelector('.closeBox');
displayImage.addEventListener("click", function(){
    lightBox.style.display = 'flex';
})
closeBox.addEventListener("click", function(){
    lightBox.style.display = 'none';
})
var btnPrev = document.querySelector('#prev');
var btnNext = document.querySelector('#next');

var imageIndex = 0;
btnPrev.addEventListener("click", function(){
    changePic(-1);
});
btnNext.addEventListener("click", function(){
    changePic(1);
});

showPic(imageIndex);

function changePic(n){
    showPic(imageIndex += n);
    console.log(n);
}

function showPic(imageIndex){
    var reel = document.getElementsByClassName('box reel-image');
    var reels = [].slice.call(reel);
    if (imageIndex >= reels.length) {
        imageIndex = 0;
    }
    else if (imageIndex < 1) {
        imageIndex = reels.length;
    } 
    for (let i = 0; i < reels.length; i++) {
        var thumbDisplay = reels[imageIndex].getAttribute('src');
        let newDisplay = thumbDisplay.replace("-thumbnail.jpg", ".jpg");
        boxDisplay.setAttribute('src', newDisplay);
    } 
    console.log(imageIndex);

}
