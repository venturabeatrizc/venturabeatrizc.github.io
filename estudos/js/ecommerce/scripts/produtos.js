let products = [
    { id: 1, name: 'Jiboia', category: 'Ambientes Internos', price: 19.90, image: 'img/plant-1.jpg', featured: true },
    { id: 2, name: 'Espada-de-São-Jorge', category: 'Ambientes Internos', price: 24.90, image: 'img/plant-2.jpg', featured: true },
    { id: 3, name: 'Lírio da Paz', category: 'Ambientes Internos', price: 27.90, image: 'img/plant-3.jpg', featured: false },
    { id: 4, name: 'Antúrio', category: 'Ambientes Internos', price: 22.90, image: 'img/plant-4.jpg', featured: false },
    { id: 5, name: 'Samambaia Americana', category: 'Ambientes Internos', price: 20.90, image: 'img/plant-5.jpg', featured: false },
    { id: 6, name: 'Palmeira Ráfis', category: 'Ambientes Externos', price: 39.90, image: 'img/plant-6.jpg', featured: true },
    { id: 7, name: 'Pata-de-elefante', category: 'Ambientes Externos', price: 49.90, image: 'img/plant-7.jpg', featured: false },
    { id: 8, name: 'Azaleia', category: 'Ambientes Externos', price: 27.90, image: 'img/plant-8.jpg', featured: true },
    { id: 9, name: 'Hibisco', category: 'Ambientes Externos', price: 24.90, image: 'img/plant-9.jpg', featured: true },
    { id: 10, name: 'Costela-de-Adão', category: 'Ambientes Externos', price: 37.90, image: 'img/plant-10.jpg', featured: false },
    { id: 11, name: 'Espada-de-Santa-Bárbara', category: 'Purificadoras de Ar', price: 23.90, image: 'img/plant-11.jpg', featured: false },
    { id: 12, name: 'Babosa (Aloe Vera)', category: 'Purificadoras de Ar', price: 17.90, image: 'img/plant-12.jpg', featured: true },
    { id: 13, name: 'Areca-Bambu', category: 'Purificadoras de Ar', price: 29.90, image: 'img/plant-13.jpg', featured: false },
    { id: 14, name: 'Ráfis', category: 'Purificadoras de Ar', price: 31.90, image: 'img/plant-14.jpg', featured: false },
    { id: 15, name: 'Samambaia de Metro', category: 'Purificadoras de Ar', price: 28.90, image: 'img/plant-15.jpg', featured: true },
    { id: 16, name: 'Orquídea', category: 'Flores', price: 42.90, image: 'img/plant-16.jpg', featured: false },
    { id: 17, name: 'Begônia', category: 'Flores', price: 18.90, image: 'img/plant-17.jpg', featured: false },
    { id: 18, name: 'Kalanchoe', category: 'Flores', price: 14.90, image: 'img/plant-18.jpg', featured: false },
    { id: 19, name: 'Violeta Africana', category: 'Flores', price: 12.90, image: 'img/plant-19.jpg', featured: false },
    { id: 20, name: 'Amor-perfeito', category: 'Flores', price: 11.90, image: 'img/plant-20.jpg', featured: true },
    { id: 21, name: 'Lírio Asiático', category: 'Flores', price: 36.90, image: 'img/plant-21.jpg', featured: false },
    { id: 22, name: 'Margarida', category: 'Flores', price: 15.90, image: 'img/plant-22.jpg', featured: false },
    { id: 23, name: 'Gerânio', category: 'Flores', price: 20.90, image: 'img/plant-23.jpg', featured: false },
    { id: 24, name: 'Petúnia', category: 'Flores', price: 13.90, image: 'img/plant-24.jpg', featured: false },
    { id: 25, name: 'Camélia', category: 'Flores', price: 25.90, image: 'img/plant-25.jpg', featured: false },
    { id: 26, name: 'Cactos', category: 'Fácil Cuidado', price: 9.90, image: 'img/plant-26.jpg', featured: false },
    { id: 27, name: 'Suculenta Mini', category: 'Fácil Cuidado', price: 7.90, image: 'img/plant-27.jpg', featured: false },
    { id: 28, name: 'Rabo-de-burro', category: 'Fácil Cuidado', price: 10.90, image: 'img/plant-28.jpg', featured: false },
    { id: 29, name: 'Colar-de-pérolas', category: 'Fácil Cuidado', price: 14.90, image: 'img/plant-29.jpg', featured: false },
    { id: 30, name: 'Aloe Juvenna', category: 'Fácil Cuidado', price: 8.90, image: 'img/plant-30.jpg', featured: false }
];

let cart = [];

function createCategory() {
    let categoryList = document.querySelector('.category-list');
    categoryList.innerHTML = '';

    let categories = products.map(p => p.category);
    let uniqueCategories = categories.filter((cat, index, self) => self.indexOf(cat) === index);

    uniqueCategories.forEach(category => {
        let categoryListItem = document.createElement('li');
        categoryListItem.textContent = category;
        categoryList.appendChild(categoryListItem);
    });
}


function createProductElement(product) {
    let productDiv = document.createElement('div');
    productDiv.className = 'product box swiper-slide';
    productDiv.setAttribute('data-aos', 'fade-up');
    productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <div class="product-info">
            <h6>${product.category}</h6>
            <h3>${product.name}</h3>
            <p>R$${product.price}</p>
            <button>Adicionar ao carrinho</button>
        </div>
    `;
    productDiv.querySelector('button').addEventListener('click', () => addToCart(product.id));
    return productDiv;
}

function renderProducts() {
    let productGrid = document.querySelector('.product-grid');
    let featuredProductGrid = document.querySelector('.featured-product-grid');

    productGrid.innerHTML = '';
    featuredProductGrid.innerHTML = '';

    products.forEach((product) => {
        let ProductElement = createProductElement(product);
        productGrid.appendChild(ProductElement);
        if (product.featured === true) {
            let featuredProductElement = createProductElement(product);
            featuredProductGrid.appendChild(featuredProductElement);
        }
    });
}

AOS.init();
renderProducts();
createCategory();