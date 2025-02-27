// Função para obter o parâmetro 'categoria' da URL
function getCategoriaFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('categoria');
}

// Função para carregar os produtos da categoria selecionada
function loadCategoryProducts() {
    const categoria = getCategoriaFromURL(); // Obtém a categoria da URL
    const products = {
        "cozinha": [
            {
                "nome": "Kit de Panelas",
                "comprimento": "80cm",
                "largura": "60cm",
                "quantidade": 3,
                "linha": "2",
                "preco": "R$80,00",
                "unicon": "conjunto",
                "foto": "img/img-1.jpg"
            },
            {
                "nome": "Liquidificador",
                "comprimento": "80cm",
                "largura": "50cm",
                "quantidade": 1,
                "linha": "1",
                "preco": "R$120,00",
                "unicon": "unidade",
                "foto": "img/img-2.webp"
            },
            {
                "nome": "Jogo de Talheres",
                "comprimento": "50cm",
                "largura": "50cm",
                "quantidade": 5,
                "linha": "4",
                "preco": "R$40,00",
                "unicon": "conjunto",
                "foto": "img/img-3.jpg"
            },
            {
                "nome": "Conjunto de Pratos",
                "comprimento": "60cm",
                "largura": "60cm",
                "quantidade": 6,
                "linha": "2",
                "preco": "R$80,00",
                "unicon": "conjunto",
                "foto": "img/img-4.jpg"
            }
        ],
        "banheiro": [
            {
                "nome": "Toalha de Banho",
                "comprimento": "1,50m",
                "largura": "80cm",
                "quantidade": 1,
                "linha": "1",
                "preco": "R$30,00",
                "unicon": "unidade",
                "foto": "img/img-5.jpg"
            },
            {
                "nome": "Kit Saboneteira",
                "comprimento": "30cm",
                "largura": "20cm",
                "quantidade": 4,
                "linha": "2",
                "preco": "R$35,00",
                "unicon": "conjunto",
                "foto": "img/img-6.jpg"
            },
            {
                "nome": "Cesto de Roupa",
                "comprimento": "90cm",
                "largura": "90cm",
                "quantidade": 1,
                "linha": "3",
                "preco": "R$70,00",
                "unicon": "unidade",
                "foto": "img/img-7.jpg"
            },
            {
                "nome": "Cortina de Banheiro",
                "comprimento": "1,80m",
                "largura": "1,20m",
                "quantidade": 1,
                "linha": "4",
                "preco": "R$140,00",
                "unicon": "unidade",
                "foto": "img/img-8.webp"
            }
        ],
        "sala": [
            {
                "nome": "Sofá",
                "comprimento": "2,00m",
                "largura": "80cm",
                "quantidade": 6,
                "linha": "1",
                "preco": "R$500,00",
                "unicon": "conjunto",
                "foto": "img/img-9.jpg"
            },
            {
                "nome": "Mesa de Centro",
                "comprimento": "1,20m",
                "largura": "60cm",
                "quantidade": 1,
                "linha": "2",
                "preco": "R$150,00",
                "unicon": "unidade",
                "foto": "img/img-10.jpg"
            },
            {
                "nome": "Estante",
                "comprimento": "60cm",
                "largura": "60cm",
                "quantidade": 3,
                "linha": "3",
                "preco": "R$100,00",
                "unicon": "conjunto",
                "foto": "img/img-11.jpg"
            },
            {
                "nome": "Cadeira",
                "comprimento": "50cm",
                "largura": "50cm",
                "quantidade": 6,
                "linha": "4",
                "preco": "R$150,00",
                "unicon": "conjunto",
                "foto": "img/img-12.jpg"
            }
        ],
        "amigurumi": [
            {
                "nome": "Batman",
                "comprimento": "40cm",
                "largura": "20cm",
                "quantidade": 1,
                "linha": "3",
                "preco": "R$70,00",
                "unicon": "unidade",
                "foto": "img/img-13.jpg"
            },
            {
                "nome": "The Flash",
                "comprimento": "40cm",
                "largura": "20cm",
                "quantidade": 1,
                "linha": "3",
                "preco": "R$70,00",
                "unicon": "unidade",
                "foto": "img/img-14.jpg"
            },
            {
                "nome": "Scooby-Doo",
                "comprimento": "40cm",
                "largura": "20cm",
                "quantidade": 1,
                "linha": "3",
                "preco": "R$70,00",
                "unicon": "unidade",
                "foto": "img/img-15.jpg"
            },
            {
                "nome": "Tristeza",
                "comprimento": "40cm",
                "largura": "20cm",
                "quantidade": 1,
                "linha": "3",
                "preco": "R$70,00",
                "unicon": "unidade",
                "foto": "img/img-16.webp"
            }
        ]
    };

    // Verifica se a categoria existe nos produtos
    if (products[categoria]) {
        const produtos = products[categoria];
        const container = document.querySelector('.row'); // Pega o contêiner de produtos

        // Limpa os produtos existentes (caso haja)
        container.innerHTML = '';

        // Loop para adicionar os produtos
        produtos.forEach(product => {
            const productCard = `
                <div class="card" style="width: 250px;">
                    <img src="${product.foto}" class="img-fluid mt-3 rounded-2" alt="${product.nome}" style="height: 250px;>
                    <div class="card-body">
                        <h5 class="card-title text-center fw-bold mt-3">${product.nome}</h5>
                        <p class="card-text text-center">
                            Comprimento: ${product.comprimento || 'N/A'} <br>
                            Largura: ${product.largura || 'N/A'} <br>
                            Quantidade: ${product.quantidade} <br>
                            Linha: ${product.linha} <br>
                        </p>
                        <div class="d-flex justify-content-center">
                            <h1 class="card-title pricing-card-title fs-4">
                                ${product.preco}
                                <small class="text-body-secondary fw-light fs-5">/${product.unicon}</small>
                            </h1>
                        </div>
                        <div class="mt-1 mb-3">
                            <a href="#" class="btn btn-success d-flex justify-content-center">Comprar</a>
                        </div>
                    </div>
                </div>
            `;
            container.innerHTML += productCard; // Adiciona o card ao contêiner
        });
    } else {
        // Se a categoria não existir, exibe uma mensagem
        alert('Categoria não encontrada!');
    }
}

// Carregar os produtos quando a página for carregada
window.onload = loadCategoryProducts;