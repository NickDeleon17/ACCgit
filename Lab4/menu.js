const menuItems = [
    {
        name: "Chicken Pot Pie!",
        description: "My three favorite things - A delicious homemade deep dish pie with free-range chickens",
        price: 3.00,
        image: "https://img.freepik.com/premium-photo/pie-sitting-top-wooden-cutting-board-bowl-vegetables-generative-ai_97167-9617.jpg?w=2000"
    },
    {
        name: "Chicken Tenders",
        description: "Three beer-battered tenders served with fries.",
        price: 5.00,
        image: "https://img.freepik.com/free-photo/fish-chips-chopping-board-with-lemon-sauce_23-2148776018.jpg?t=st=1726947823~exp=1726951423~hmac=3423ff2d03678437e0d93c10c44b1efb8168260f329ddb22fa732b3b3ca3fff1&w=2000"
    },
    {
        name: "Cheeseburger",
        description: "For those who want their chicken more beef like - two patties fully loaded",
        price: 6.00,
        image: "https://img.freepik.com/free-photo/fancy-cuisine-with-yummy-hamburger_23-2148374860.jpg?t=st=1726948152~exp=1726951752~hmac=4050ce060f8d9413f802767c89ed1cd3b4630eb4c7f6128cab55f88376d71fa1&w=2000"
    },
    {
        name: "Family Fried Chicken Platter",
        description: "12 piece fried chicken served with two sides of your choice.",
        price: 24.00,
        image: "https://img.freepik.com/free-photo/top-view-variety-fried-chicken-with-sauces-french-fries_23-2148646557.jpg?t=st=1726948586~exp=1726952186~hmac=8f87b58bf3f3ded247ed96f0fd528918049c5dcf3947c6d125225e6a555ed924&w=2000"
    },
    {
        name: "Cherry cobbler",
        description: "For those with a sweet tooth",
        price: 2.22,
        image: "https://img.freepik.com/premium-photo/dessert-with-cherry-top-sits-table-with-candle-background_777078-11601.jpg?w=2000"
    }

];

let currentIndex = 0;

function updateMenuItem() {
    const menuName = document.getElementById('menu-name');
    const menuDescription = document.getElementById('menu-description');
    const menuPrice = document.getElementById('menu-price');
    const menuImage = document.getElementById('menu-image');

    const currentItem = menuItems[currentIndex];
    
    menuName.innerText = currentItem.name;
    menuDescription.innerText = currentItem.description;
    menuImage.src = currentItem.image;
    menuImage.alt = currentItem.name;

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });
    menuPrice.innerText = formatter.format(currentItem.price);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + menuItems.length) % menuItems.length;
    updateMenuItem();
}

function nextImage() {
    currentIndex = (currentIndex + 1) % menuItems.length;
    updateMenuItem();
}

document.getElementById('nextBtn').addEventListener('click', nextImage);
document.getElementById('prevBtn').addEventListener('click', prevImage);

updateMenuItem();