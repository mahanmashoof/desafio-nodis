const products = [
    {
        "id": 1,
        "name": "Arquitetura de Computadores",
        "ean": "9788521616603",
        "category": "Livros",
        "imageUrl": "https://images-shoptime.b2w.io/produtos/01/00/sku/7134/2/7134233P.jpg",
        "package": {
            "height": 3,
            "width": 20,
            "depth": 28,
            "weight": 1307
        },
        "description": "A melhor forma de otimizar o aproveitamento da capacidade de um computador é compreender os princípios básicos do seu funcionamento. A obra, em sua segunda edição, revista e atualizada, descreve as técnicas subjacentes às várias arquiteturas de computador, desde os pequenos microcontroladores até os grandes servidores, passando pelos computadores pessoais (PC). O livro ensina como construir computadores com simples portas lógicas; como é possível com apenas dois símbolos (0 e 1), dominar o mundo; conjunto de instruções e programação em linguagem assembly; como programas conseguem ser executados por um computador; equilíbrio harmonioso entre os vários componentes de um computador; como se projeta um computador; microprogramação, pipelining, caches e memória virtual; suporte para os sistemas operacionais (processos); evoluções mais recentes dos processadores. A obra também inclui os últimos avanços tecnológicos verificados em processadores comerciais. Materiais suplementares, entre os quais, guias de laboratório, simulador, slides com animação e exercícios resolvidos, encontram-se disponíveis no site.",
        "salePrice": "8990",
        "promotionalPrice": "12990",
        "stock": 3
    },
    {
        "id": 2,
        "name": "Teclado Xz-530/Waterproof Com Fio USB - Teclado Padrão",
        "ean": "6955727788134",
        "category": "Acessórios de informática",
        "imageUrl": "https://images-submarino.b2w.io/produtos/01/00/sku/41321/1/41321177P.jpg",
        "package": {
            "height": 1,
            "width": 12,
            "depth": 112,
            "weight": 1000
        },
        "description": "USB 2.0 Resolução de 1.000 dpi Waterproof Suporte de inclinação Nove Orifícios de proteção - O líquido flui livremente para o buraco de saída sem medo de danificar o equipamento Anti-derrapante Marca: X - Zhang.",
        "salePrice": "11990",
        "promotionalPrice": "13990",
        "stock": 1
    },
    {
        "id": 3,
        "name": "Jogo Game Of Life Meu Malvado Favorito - Hasbro",
        "ean": "5010994844899",
        "category": "Brinquedos",
        "imageUrl": "https://images-shoptime.b2w.io/produtos/01/00/oferta/45611/8/45611896P1.jpg",
        "package": {
            "height": 100,
            "width": 100,
            "depth": 100,
            "weight": 1000
        },
        "description": "Entre nessa missão com os Minions! No jogo Game of Life Meu Malvado Favorito seja o primeiro a pegar 5 cachos de banana para vencer! Siga pelo caminho pegando as cartas que aparecerem, roubando banana...",
        "salePrice": "21490",
        "promotionalPrice": "21490",
        "stock": 10
    },
    {
        "id": 4,
        "name": "Pista e Veículos - Metal Machines - Construction - Candide",
        "ean": "7897500587031",
        "category": "Brinquedos",
        "imageUrl": "https://images-submarino.b2w.io/produtos/01/00/images/29954/0/29954072P1.jpg",
        "package": {
            "height": 200,
            "width": 1100,
            "depth": 1600,
            "weight": 3000
        },
        "description": "Os meninos vão passar horas se divertindo com essa irada Pista e Veículos - Metal Machines - Construction da Candide. A Pista e Veículos - Metal Machines - Construction da Candide possui 3,2 metros de...",
        "salePrice": "25490",
        "promotionalPrice": "25490",
        "stock": 8
    },
    {
        "id": 5,
        "name": "Panela de Arroz 10 xícaras ML-2900 NKS Milano 220V",
        "ean": "7896843933956",
        "category": "Eletroportáteis",
        "imageUrl": "https://images-submarino.b2w.io/produtos/01/00/oferta/41283/4/41283451P1.jpg",
        "package": {
            "height": 100,
            "width": 100,
            "depth": 100,
            "weight": 1000
        },
        "description": "A panela de arroz ML-2900 NKS Milano possui capacidade de 1,8 litros e 10 xícaras e é ideal para quem gosta de praticidade! Prepara um delicioso arroz de maneira saudável e rápida. Com a pane...",
        "salePrice": "12900",
        "promotionalPrice": "15900",
        "stock": 2
    },
    {
        "id": 6,
        "name": "Ducha Lorenzetti Relax 3t 220v 5500w Branca",
        "ean": "7896451826763",
        "category": "Banheiro",
        "imageUrl": "https://images-submarino.b2w.io/produtos/01/00/image/79029/6/79029662P1.jpg",
        "package": {
            "height": 18,
            "width": 26,
            "depth": 28,
            "weight": 3000
        },
        "description": "Ducha Lorenzetti Relax 3T 220v 5500w Branca. Código Do Produto: BT224448RF. Fabricante Lorenzetti. O design marcante da ducha Relax dá um banho de estilo no seu banh...",
        "salePrice": "8400",
        "promotionalPrice": "8400",
        "stock": 15
    },
    {
        "id": 7,
        "name": "Telefone Intelbras Sem Fio Ts40 Sem Identificador De Chamadas",
        "ean": "7896637625661",
        "category": "Telefonia Fixa",
        "imageUrl": "https://images-submarino.b2w.io/produtos/01/00/img2/137224/3/137224363P1.jpg",
        "package": {
            "height": 9,
            "width": 18,
            "depth": 13,
            "weight": 3000
        },
        "description": "<p>Características Técnicas:<br> <br> Tecnologia Dect: maior alcance e livre de interferência<br> Design premiado<br> 2 teclas de discagem direta<br> Discagem rápid...",
        "salePrice": "13250",
        "promotionalPrice": "13250",
        "stock": 1
    },
    {
        "id": 8,
        "name": "Livro - 12 Years A Slave",
        "ean": "9781910173527",
        "category": "Livros",
        "imageUrl": "https://images-shoptime.b2w.io/produtos/01/00/sku/128342/4/128342405G1.jpg",
        "package": {
            "height": 21,
            "width": 14,
            "depth": 20,
            "weight": 136
        },
        "description": "Doze Anos de Escravidão é a extraordinária história real de Solomon Northup, um homem negro livre que morava no estado de New York em 1841 quando foi sequestrado e vendido como escravo. Esta versão si...",
        "salePrice": "2390",
        "promotionalPrice": "2990",
        "stock": 20
    },
    {
        "id": 9,
        "name": "Óculos Shimano AeroLite Ce-ARLT1-Mr Preto Fosco 2 Lentes",
        "ean": "4524667692775",
        "category": "Esporte",
        "imageUrl": "https://images-submarino.b2w.io/produtos/01/00/sku/34869/5/34869530P1.jpg",
        "package": {
            "height": 100,
            "width": 100,
            "depth": 100,
            "weight": 1000
        },
        "description": "O Óculos Shimano AeroLite é a versão para desempenho de nível profissional, o seu desing sem montagem desenvolvido em colaboração com a equipe LottoNL-Jumbo.<br>- Marca: Shimano<br>- Model...",
        "salePrice": "41900",
        "promotionalPrice": "41900",
        "stock": 0
    },
    {
        "id": 10,
        "name": "Terra Cortril Spray 125ml",
        "ean": "7898049717705",
        "category": "Pet shop",
        "imageUrl": "https://images-submarino.b2w.io/produtos/01/00/oferta/46993/8/46993809P1.jpg",
        "package": {
            "height": 100,
            "width": 100,
            "depth": 100,
            "weight": 1000
        },
        "description": "<br> <p>Terra-Cortril - Antibiótico anti-inflamatório indicado ao tratamento de querato conjuntivite infecciosa (pink eye) de bovinos e ovinos; afecções oculares e cutâneas, eczemas, queim...",
        "salePrice": "3500",
        "promotionalPrice": "3500",
        "stock": 3
    }
]

export default products;
