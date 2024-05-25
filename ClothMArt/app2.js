var parentElement = document.getElementsByClassName('ig1')[0]; // Assuming you want to append it to the first element with class 'ig1'
var container = document.createElement('div');
container.style.position = 'relative';
var imgElement = document.createElement('img');
imgElement.src = 'https://textile-network.com/var/app/storage/images/_aliases/gallery/7/2/8/1/641827-1-eng-GB/Marc-Cain-Store-Miami.jpg'; // Set the image source
imgElement.alt = 'Description of the image'; 
imgElement.style.width = '400px';
imgElement.style.height='250px'
imgElement.onmouseover = function() {
    this.src = 'https://content.jdmagicbox.com/comp/tirunelveli/n1/0462px462.x462.191109202216.w7n1/catalogue/login-mens-exclusive-vannarpettai-tirunelveli-men-readymade-garment-retailers-03juvxaeag.jpg';
};
imgElement.onmouseout = function() {
    this.src = 'https://textile-network.com/var/app/storage/images/_aliases/gallery/7/2/8/1/641827-1-eng-GB/Marc-Cain-Store-Miami.jpg';
};
parentElement.appendChild(imgElement);
var textNode = document.createTextNode('MENZ EXCLUSIVE');
var textElement = document.createElement('div');
textElement.className = 'ig12';
textElement.style.position = 'absolute'; 
textElement.style.bottom = '10px'; 
textElement.style.left = '50%'; 
textElement.style.fontWeight='bolder'
textElement.appendChild(textNode);
container.appendChild(textElement);
parentElement.appendChild(container);

var parentElement = document.getElementsByClassName('ig2')[0]; // Assuming you want to append it to the first element with class 'ig1'
var container = document.createElement('div');
container.style.position = 'relative';
var imgElement = document.createElement('img');
imgElement.src = 'https://content3.jdmagicbox.com/comp/navi_mumbai/q6/022pxx22.xx22.160411165056.q1q6/catalogue/just-little-seawoods-navi-mumbai-toy-shops-c4ff1.jpeg'; // Set the image source
imgElement.alt = 'Description of the image'; 
imgElement.style.width = '400px';
imgElement.style.height='250px'
imgElement.onmouseover = function() {
    this.src = 'https://content.jdmagicbox.com/comp/tirunelveli/n1/0462px462.x462.191109202216.w7n1/catalogue/login-mens-exclusive-vannarpettai-tirunelveli-men-readymade-garment-retailers-03juvxaeag.jpg';
};
imgElement.onmouseout = function() {
    this.src = 'https://content3.jdmagicbox.com/comp/navi_mumbai/q6/022pxx22.xx22.160411165056.q1q6/catalogue/just-little-seawoods-navi-mumbai-toy-shops-c4ff1.jpeg';
};
parentElement.appendChild(imgElement);
var textNode = document.createTextNode('BABY EXCLUSIVE');
var textElement = document.createElement('div');
textElement.className = 'ig13';
textElement.style.position = 'absolute'; 
textElement.style.bottom = '10px'; 
textElement.style.left = '50%'; 
textElement.style.fontWeight='bolder'
textElement.appendChild(textNode);
container.appendChild(textElement);
parentElement.appendChild(container);

var parentElement = document.getElementsByClassName('ig3')[0]; // Assuming you want to append it to the first element with class 'ig1'
var container = document.createElement('div');
container.style.position = 'relative';
var imgElement = document.createElement('img');
imgElement.src = "https://media.istockphoto.com/id/1436136372/photo/shopping-mall-clothing-store.webp?b=1&s=170667a&w=0&k=20&c=UGn7lHgOx0HpCdtsXzGO-5znL12WMlcax07cvXjcn_I="; 
imgElement.alt = 'Description of the image'; 
imgElement.style.width = '400px';
imgElement.style.height='250px'
imgElement.onmouseover = function() {
    this.src = 'https://content.jdmagicbox.com/comp/tirunelveli/n1/0462px462.x462.191109202216.w7n1/catalogue/login-mens-exclusive-vannarpettai-tirunelveli-men-readymade-garment-retailers-03juvxaeag.jpg';
};
imgElement.onmouseout = function() {
    this.src = 'https://media.istockphoto.com/id/1436136372/photo/shopping-mall-clothing-store.webp?b=1&s=170667a&w=0&k=20&c=UGn7lHgOx0HpCdtsXzGO-5znL12WMlcax07cvXjcn_I=';
};
parentElement.appendChild(imgElement);
var textNode = document.createTextNode("Women's EXCLUSIVE");
var textElement = document.createElement('div');
textElement.className = 'ig14';
textElement.style.position = 'absolute'; 
textElement.style.color="white"
textElement.style.bottom = '10px'; 
textElement.style.left = '50%'; 
textElement.style.fontWeight='bolder'
textElement.appendChild(textNode);
container.appendChild(textElement);
parentElement.appendChild(container);

// Function to show variety based on user selection
function showVariety(variety) {
    var cardsContainer = document.getElementById('cardRow');
    cardsContainer.innerHTML = '';

    var varieties = {
      men: [
        { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoD9YA3kqE_Ho-QXOLHJI96OPlFb4pHtGE1YpNtldnNw&s', text: 'Men Item 1', price: '$50.00' },
        { image: 'https://unze.com.pk/cdn/shop/files/MC1929.jpg?v=1712255709', text: 'Men Item 2', price: '$60.00' },
        {image:'https://i.pinimg.com/736x/6c/36/c8/6c36c8d1f0c8fea0ae67cf7810792ceb.jpg',text:"Men Item 3",price:"$60.00"},// Add more items for men variety
        {image:'https://zz.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/04/8493/1.jpg?9346',text:"Men Item 3",price:"$60.00"},
    ],
      women: [
        { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuD8cPoO484u0EMTyeKS1Z4wnilSQ9lN0XF4xX4Jad1w&s', text: 'Ladies Shirts  | Button Down Women Shirts', price: '$40.00' },
        { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQveU1G66GpinQ3maYgQgOPt8u9oZlrAAuZlWZijiSALg&s', text: 'Girls Design Women All Over T-Shirt', price: '$70.00' },
        {image:'https://static-01.daraz.pk/p/2d4cdf1945a813ffecbbd6820ccc3958.jpg_750x750.jpg_.webp',text:" Long Sleeve Polyester Tops Ladies Casual Slim Female Plaid Shirt",price:"$50.00"},
        {image:"https://i.ebayimg.com/images/g/aWQAAOSwiX1i9hrk/s-l1200.webp",text:"Ladies Long Sleeve Cotton Rich T Shirt Tops Various Colours Sizes",price:'$20.00'}
        // Add more items for women variety
      ],
      baby: [
        { image: 'https://5.imimg.com/data5/SELLER/Default/2023/3/295303994/ET/AR/GD/186961080/washing-machine-spare-parts-500x500.jpg', text: 'Fleece Baby boys Clothing combo set', price: '600(PKR)' },
        { image: 'https://m.media-amazon.com/images/I/81LM-csv+IL._AC_UY1100_.jpg', text: 'Buy SPONGY Dungaree Set for Baby Boy ', price: '1000(PKR)' },
        { image: 'https://www.pomeraniakids.com/19102-large_default/jose-varon-baby-girls-coral-dress-houndstooth.jpg', text: ' baby dresses at Pomerania Kids in a variety of styles, and prints.', price: '1200(PKR)' },
        { image: 'https://www.littlespunkies.com/cdn/shop/products/PumpkinVarietyChart_onesie_LSWHITE_1200x1200.jpg?v=1629394444', text: 'Pumpkin Variety Chart Baby Fall Onesie ', price: '1000(PKR)' },
        // Add more items for baby variety
      ],
      fashion: [
        {image:'https://zz.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/04/8493/1.jpg?9346',text:"Men Item 3",price:"$60.00"},
        {image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE9yyFjedrIrH601cwf4zKCVUkQRNgcZN2lZDCChA3vg&s',text:"Pakistan Star Men ALL-OVER PRINT T-SHIRT "},
        {image:'https://static-01.daraz.pk/p/2d4cdf1945a813ffecbbd6820ccc3958.jpg_750x750.jpg_.webp',text:" Long Sleeve Polyester Tops Ladies Casual Slim Female Plaid Shirt",price:"$50.00"},
        { image: 'https://5.imimg.com/data5/SELLER/Default/2023/3/295303994/ET/AR/GD/186961080/washing-machine-spare-parts-500x500.jpg', text: 'Fleece Baby boys Clothing combo set', price: '600(PKR)' },
        // Add more items for fashion variety
      ]
    };
  
    // Get the selected variety from the data
    var selectedVariety = varieties[variety];
  
    // Create and append cards for the selected variety
    selectedVariety.forEach(function(item) {
        var cardHtml = `<div class="col position-relative"><img src="${item.image}" class="w-100 h1" alt="${item.text}"><div class="card-text position-absolute bottom-0 start-0 w-100 bg-dark text-white p-2">${item.text}<br>${item.price}</div></div>`;
      cardsContainer.innerHTML += cardHtml;
    });
  }
  let cart = [];

// Function to add item to cart
function addToCart(name, price) {
    cart.push({ name, price });
    renderCart();
}

// Function to render cart
function renderCart() {
    const cartItemsElement = document.getElementById('cart-items');
    // Clear previous items
    cartItemsElement.innerHTML = '';
    // Render new items
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartItemsElement.appendChild(li);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    // Initialize cart data
    var cart = [];

    // Get cart panel and cart button elements
    var cartPanel = document.getElementById('cartPanel');
    var cartButton = document.getElementById('cartButton');

    // Get cart items container
    var cartItemsContainer = document.getElementById('cartItems');
    var placeOrderButton = document.getElementById('placeOrderButton');
    // Get all elements with the class "dive"
    var diveElements = document.querySelectorAll('.dive');

    // Add click event listener to each dive element
    Array.prototype.forEach.call(diveElements, function(element) {
        element.addEventListener('click', function() {
            // Get product details from the clicked element
            var imageSrc = this.querySelector('img').src;
            var productName = this.textContent.trim();
            var price = this.textContent.split('$')[1].trim();

            // Create a product object
            var product = {
                imageSrc: imageSrc,
                productName: productName,
                price: price
            };

            // Add product to the cart
            cart.push(product);

            // Update cart button content
            updateCartButton(cart);

            // Update cart panel content
            updateCartPanel(cart);
        });
    });

    // Add click event listener to cart button
    cartButton.addEventListener('click', function() {
        // Toggle the open class of the cart panel
        cartPanel.classList.toggle('open');
    });
    placeOrderButton.addEventListener('click', function() {
        // Place order logic
        alert('Your order has been placed!');
        // Clear the cart after placing the order
        cart = [];
        updateCartButton(cart);
        updateCartPanel(cart);
    });
    // Function to update cart button content
    function updateCartButton(cart) {
        var cartItemCount = cart.length;
        var cartItemCountElement = document.getElementById('cartItemCount');

        // Update badge count
        cartItemCountElement.textContent = cartItemCount;

        // You can update the cart button icon or tooltip here as well
    }

    // Function to update cart panel content
    function updateCartPanel(cart) {
        // Clear previous items
        cartItemsContainer.innerHTML = '';

        // Add each item to the cart panel
        cart.forEach(function(item) {
            var cartItemElement = document.createElement('div');
            cartItemElement.classList.add('cart-item');
            cartItemElement.innerHTML = `
                <img src="${item.imageSrc}" alt="${item.productName}">
                <div class="cart-item-details">
                    <div>${item.productName}</div>
                    <div>$${item.price}</div>
                </div>
            `;
            cartItemsContainer.appendChild(cartItemElement);
        });
        var deleteButtons = document.querySelectorAll('.delete-item-button');
        Array.prototype.forEach.call(deleteButtons, function(button) {
            button.addEventListener('click', function() {
                var index = parseInt(this.getAttribute('data-index'));
                cart.splice(index, 1); // Remove the item from the cart
                updateCartButton(cart);
                updateCartPanel(cart);
            });
        });

    }
});
function showAlert(){

alert("THIS site IS UNDER CUNSTRUCTION")
}