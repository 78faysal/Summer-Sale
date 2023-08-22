// get all clicked card/items 
const selectedCards = document.querySelectorAll('#myCard');
selectedCards.forEach(card => {
    card.addEventListener('click', function () {
        const cardName = card.querySelector('.cardName').innerText;
        const cardPriceElement = card.querySelector('.cardPrice').textContent;
        const cardPrice = parseFloat(cardPriceElement);

        // pass clicked items data to cart
        handleAddToCart(cardName, cardPrice);
    })
})


function handleAddToCart(name, price) {
    // get elements 
    const totalPriceElement = document.getElementsByClassName('totalPrice')[0];
    const itemListElement = document.getElementById('itemList');

    // add new element 
    const listItem = document.createElement('li');
    listItem.classList.add('font-semibold')
    listItem.setAttribute('type', '1');
    listItem.textContent = name;
    itemListElement.appendChild(listItem);

    const previousTotalPrice = parseFloat(totalPriceElement.textContent);
    const newTotalPrice = previousTotalPrice + price;
    totalPriceElement.textContent = newTotalPrice;
}



function handleCoupon() {
    // get elements
    const myInput = document.getElementsByTagName('input')[0].value;
    const totalPriceElement = document.getElementsByClassName('totalPrice')[0];
    const discountElement = document.getElementsByClassName('discount')[0];
    const totalElement = document.getElementsByClassName('total')[0];
    const couponBtn = document.getElementById('applyBtn');
    const couponDiv = document.getElementById('couponDiv');

    // convert to number type 
    let totalPrice = parseFloat(totalPriceElement.textContent);
    let discount = parseFloat(discountElement.textContent);
    let total = parseFloat(totalElement.textContent);

    // condition check
    if(myInput === 'SELL200' && totalPrice >= 200){
        discount = totalPrice * 0.2;
        total = totalPrice - discount;
        
        discountElement.textContent = discount;
        totalElement.textContent = total;

        couponBtn.disabled = true;
    }
    else{
        discount = 0;
        total = totalPrice;

        const addPTag = document.createElement('p');
        addPTag.classList.add('font-semibold')
        addPTag.textContent = 'Coupon not found';
        couponDiv.appendChild(addPTag);
    }
}