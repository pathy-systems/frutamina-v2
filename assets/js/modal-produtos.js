console.log("[MODAL] modal-produtos.js carregado – Todos os produtos");

// ================== DADOS DOS PRODUTOS ==================
const produtosData = {
    frutamina: [
        {
            titulo: "Melão Amarelo",
            descricao: "O Melão Amarelo Frutamina: Reconhecido pela sua polpa firme, cor vibrante e sabor tropical inconfundível. Perfeito para consumo imediato.",
            imagem: "assets/svg/produtos/amfirma.webp",
            impactCharacters: [
                { icon: "bi-sun", texto: "Cor Amarela Intensa" },
                { icon: "bi-droplet-half", texto: "Alto Teor de Suculência" },
                { icon: "bi-lightning-charge", texto: "Pronto para Consumo Rápido" }
            ]
        },
        {
            titulo: "Melão Pele de Sapo",
            descricao: "Melão Pele de Sapo Frutamina: Casca texturizada com interior branco esverdeado. Oferece uma doçura equilibrada e excelente vida de prateleira.",
            imagem: "assets/svg/produtos/spfirma.webp",
            impactCharacters: [
                { icon: "bi-grid-3x3", texto: "Casca Texturizada Característica" },
                { icon: "bi-award", texto: "Excelente Durabilidade" },
                { icon: "bi-emoji-laughing", texto: "Doçura Perfeita" }
            ]
        },
        {
            titulo: "Melancia",
            descricao: "Melancia Frutamina: O ápice da hidratação. Polpa vermelha vibrante, crocante e incrivelmente doce. Ideal para os dias quentes.",
            imagem: "assets/svg/produtos/melfirma.webp",
            impactCharacters: [
                { icon: "bi-water", texto: "Máxima Hidratação (92% Água)" },
                { icon: "bi-flower1", texto: "Polpa Vermelha e Crocante" },
                { icon: "bi-fire", texto: "Sabor Ideal para o Verão" }
            ]
        },
        {
            titulo: "Melão Matisse",
            descricao: "Melão Matisse Frutamina: Uma variedade exótica de casca lisa e polpa esverdeada-clara. Doçura marcante e aroma suave e sofisticado.",
            imagem: "assets/svg/produtos/matfirma.webp",
            impactCharacters: [
                { icon: "bi-globe", texto: "Sabor Exótico e Único" },
                { icon: "bi-flower2", texto: "Aroma Delicado e Suave" },
                { icon: "bi-star", texto: "Variedade Gourmet Exclusiva" }
            ]
        },
        {
            titulo: "Melão Galia",
            descricao: "Melão Galia Frutamina: Reconhecido pela sua casca reticulada e cor laranja vibrante. Polpa suculenta, com um equilíbrio perfeito entre doçura e uma acidez sutil, refrescante.",
            imagem: "assets/svg/produtos/gafirma.webp",
            impactCharacters: [
                { icon: "bi-droplet-fill", texto: "Extremamente Suculento" },
                { icon: "bi-sun", texto: "Doçura Refrescante" },
                { icon: "bi-star", texto: "Variedade Gourmet Exclusiva" }
            ]
        },
        {
            titulo: "Melão Cantaloupe",
            descricao: "Melão Cantaloupe Frutamina: O clássico melão de casca firme e cor bege-esverdeada com rede proeminente. Sua polpa alaranjada intensa oferece um sabor doce, quase caramelizado, e um perfume inconfundível.",
            imagem: "assets/svg/produtos/cantfirma.webp",
            impactCharacters: [
                { icon: "bi-fire", texto: "Sabor Doce Intenso" },
                { icon: "bi-droplet-half", texto: "Textura Firme e Carnuda" },
                { icon: "bi-star-fill", texto: "Aroma Inconfundível" }
            ]
        },
        {
            titulo: "Melão Orange",
            descricao: "Melão Orange Frutamina: Uma alternativa, com casca mais lisa e polpa de um laranja vibrante. Possui uma doçura concentrada, mais suave que o Cantaloupe, com notas tropicais.",
            imagem: "assets/svg/produtos/orgfirma.webp",
            impactCharacters: [
                { icon: "bi-basket-fill", texto: "Polpa Laranja Vibrante" },
                { icon: "bi-award-fill", texto: "Doçura Suave e Equilibrada" },
                { icon: "bi-emoji-smile", texto: "Toque Tropical" }
            ]
        }
    ],
    itaueira: [
        {
            titulo: "Melão Amarelo",
            descricao: "O Melão Amarelo clássico da Itaueira. Consistente, doce, suculento e sempre no ponto ideal. Sua polpa firme garante alta durabilidade e frescor prolongado.",
            imagem: "assets/svg/produtos/am-rei.webp",
            impactCharacters: [
                { icon: "bi-emoji-smile", texto: "Sabor e doçura consistentes" },
                { icon: "bi-brightness-high", texto: "Alta durabilidade e frescor" },
                { img: "assets/svg/logo-rei.webp", texto: "O Clássico da Itaueira" }
            ]
        },
        {
            titulo: "Melão Pele de Sapo",
            descricao: "O clássico 'Pele de Sapo' da Itaueira. Polpa amarela vibrante, suculenta e sabor deliciosamente refrescante. Tradição e qualidade para o consumo diário.",
            imagem: "assets/svg/produtos/sapo-rei.webp",
            impactCharacters: [
                { icon: "bi-emoji-smile", texto: "Sabor refrescante inigualável" },
                { icon: "bi-droplet", texto: "Textura suculenta e macia" },
                { img: "assets/svg/logo-rei.webp", texto: "Clássico da Família Itaueira" }
            ]
        },
        {
            titulo: "Melão Matisse",
            descricao: "Fruto sofisticado, com sabor adocicado e aroma marcante.",
            imagem: "assets/svg/produtos/matisse-rei.webp",
            impactCharacters: [
                { icon: "bi-emoji-smile", texto: "Sabor sofisticado" },
                { icon: "bi-brightness-high", texto: "Boa durabilidade" },
                { img: "assets/svg/logo-rei.webp", texto: "Família Itaueira" }
            ]
        },

        {
            titulo: "Melão Galia",
            descricao: "O Galia tradicional da Família Itaueira. Extremamente doce e aromático, com polpa verde-clara e casca reticulada. Seu sabor intenso conquista no primeiro corte, sendo o mais suculento da linha.",
            imagem: "assets/svg/produtos/galia-rei.webp",
            impactCharacters: [
                { icon: "bi-emoji-smile", texto: "Doçura e aroma intensos" },
                { icon: "bi-droplet", texto: "Altíssima suculência" },
                { img: "assets/svg/logo-rei.webp", texto: "O Clássico da Itaueira" }
            ]
        },

        {
            titulo: "Melão Cantaloupe",
            descricao: "O Cantaloupe clássico da Itaueira. Intensamente aromático, com polpa alaranjada de sabor consistentemente doce. A escolha perfeita para quem busca excelência.",
            imagem: "assets/svg/produtos/cantaloupe-rei.webp",
            impactCharacters: [
                { icon: "bi-emoji-smile", texto: "Sabor marcante e doce" },
                { icon: "bi-droplet", texto: "Textura macia e cremosa" },
                { img: "assets/svg/logo-rei.webp", texto: "O Clássico da Itaueira" }
            ]
        },

        {
            titulo: "Melancia Magali",
            descricao: "Refrescante, doce e perfeita para compartilhar em momentos especiais.",
            imagem: "assets/svg/produtos/sem-semente.webp",

            impactCharacters: [
                { icon: "bi-droplet", texto: "Extremamente suculenta" },
                { icon: "bi-emoji-laughing", texto: "Sabor marcante" },
                { img: "assets/svg/logo-rei.webp", texto: "Família Itaueira" }
            ]
        },

        {
            titulo: "Pimentão Amarelo",
            descricao: "Doce e delicado, ótimo para consumo cru, recheado ou em pratos leves.",
            imagem: "assets/svg/produtos/pama.webp",

            impactCharacters: [
                { icon: "bi-brightness-high", texto: "Cor vibrante" },
                { icon: "bi-emoji-heart-eyes", texto: "Sabor suave" },
                { img: "assets/svg/logo-rei.webp", texto: "Família Itaueira" }
            ]
        },
        {
            titulo: "Pimentão Vermelho",
            descricao: "Adocicado e suculento, perfeito para grelhados, molhos e pratos sofisticados.",
            imagem: "assets/svg/produtos/pvermelho.webp",

            impactCharacters: [
                { icon: "bi-fire", texto: "Sabor intenso" },
                { icon: "bi-star", texto: "Fonte de antioxidantes" },
                { img: "assets/svg/logo-rei.webp", texto: "Família Itaueira" }
            ]
        },
        {
            titulo: "Pimentão Laranja",
            descricao: "Equilíbrio entre doçura e frescor, ideal para saladas coloridas e receitas criativas.",
            imagem: "assets/svg/produtos/plar.webp",

            impactCharacters: [
                { icon: "bi-palette", texto: "Cor diferenciada" },
                { icon: "bi-emoji-smile", texto: "Sabor equilibrado" },
                { img: "assets/svg/logo-rei.webp", texto: "Família Itaueira" }
            ]
        },

        {
            titulo: "Mel em Bisnaga 275g",
            descricao: "Prático e saboroso, ideal para o dia a dia. Perfeito para adoçar chás, cafés e receitas rápidas.",
            imagem: "assets/svg/produtos/melb.webp",

            impactCharacters: [
                { icon: "bi-lightning", texto: "Praticidade no consumo" },
                { icon: "bi-heart", texto: "100% natural" },
                { img: "assets/svg/logo-rei.webp", texto: "Família Itaueira" }
            ]
        },
        {
            titulo: "Mel Pote de Vidro 500g",
            descricao: "Puro e natural, preservado em embalagem de vidro que mantém a qualidade e o sabor do mel por mais tempo.",
            imagem: "assets/svg/produtos/melv.webp",

            impactCharacters: [
                { icon: "bi-award", texto: "Sabor premium" },
                { icon: "bi-shield-check", texto: "Qualidade garantida" },
                { img: "assets/svg/logo-rei.webp", texto: "Família Itaueira" }
            ]
        }
    ],
    amarelo: [
        {
            titulo: "Cepi",
            descricao: "Variedade selecionada e cultivada especialmente para um sabor mais suave e equilibrado. Apresenta textura macia e frescor ideal para ser consumido a qualquer hora do dia.",
            imagem: "assets/svg/produtos/amarelo-cepi.webp",
            visible: true,
            impactCharacters: [
                { icon: "bi-emoji-smile", texto: "Sabor suave e equilibrado" },
                { icon: "bi-sun", texto: "Cultivo e seleção especiais" },
                { img: "assets/svg/logo-rei.webp", texto: "Família Itaueira" }
            ]
        },
        {
            titulo: "Gaia",
            descricao: "Destaca-se pela casca amarela brilhante. Polpa macia, extremamente suculenta e sabor doce. É perfeito para alta hidratação e consumo nos dias mais quentes.",
            imagem: "assets/svg/produtos/gaia.webp",
            impactCharacters: [
                { icon: "bi-droplet", texto: "Extremamente hidratante" },
                { icon: "bi-emoji-smile", texto: "Polpa macia e suculenta" },
                { img: "assets/svg/logo-rei.webp", texto: "Família Itaueira" }
            ]
        },
        {
            titulo: "Otani",
            descricao: "Melão de marca premium Otani, conhecido pelo seu sabor doce marcante e alta durabilidade pós-colheita. Ideal para cafés da manhã e sobremesas leves.",
            imagem: "assets/svg/produtos/amarelo.webp",
            impactCharacters: [
                { icon: "bi-emoji-smile", texto: "Sabor doce superior" },
                { icon: "bi-brightness-high", texto: "Alta durabilidade" },
                { icon: "bi-box-seam", texto: "Marca premium" }
            ]
        },
        {
            titulo: "Mossoró",
            descricao: "Cultivado em Mossoró, é muito hidratante e altamente refrescante. Com sabor doce e longa vida útil, é ideal para saladas de frutas, vitaminas e smoothies.",
            imagem: "assets/svg/produtos/ammoss.webp",
            impactCharacters: [
                { icon: "bi-droplet", texto: "Muito hidratante" },
                { icon: "bi-clock", texto: "Longa vida útil" },
                { icon: "bi-geo-alt", texto: "Cultivo de Mossoró" }
            ]
        },
        {
            titulo: "Angel",
            descricao: "Melão com casca amarela brilhante e formato elegante. Sua polpa é macia, suculenta e tem um sabor doce e suave. A opção perfeita para servir em ocasiões especiais.",
            imagem: "assets/svg/produtos/amangel.webp",
            impactCharacters: [
                { icon: "bi-droplet", texto: "Muito hidratante" },
                { icon: "bi-emoji-smile", texto: "Sabor doce e suave" },
                { icon: "bi-gift", texto: "Ideal para servir/presentear" }
            ]
        }

    ],
    sapo: [
        {
            titulo: "Cepi",
            descricao: "Variedade do Melão Espanhol (Pele de Sapo) selecionada pela linha Cepi. Destaca-se pela casca verde rajada, polpa branca firme e um sabor doce e suave. Excelente para fatiar e servir.",
            imagem: "assets/svg/produtos/spcepi.webp",
            impactCharacters: [
                { icon: "bi-emoji-smile", texto: "Sabor doce e suave" },
                { icon: "bi-bookmark", texto: "Polpa firme e crocante" },
                { img: "assets/svg/logo-rei.webp", texto: "Família Itaueira" }
            ]
        },
        {
            titulo: "Lola",
            descricao: "Variedade 'Pele de Sapo' com polpa amarela extremamente suculenta e macia. Sabor doce e muito refrescante, ideal para alta hidratação e receitas versáteis.",
            imagem: "assets/svg/produtos/splola.webp",
            impactCharacters: [
                { icon: "bi-droplet", texto: "Alto poder hidratante" },
                { icon: "bi-emoji-smile", texto: "Sabor doce e muito refrescante" },
                { icon: "bi-star", texto: "Qualidade premium e versatilidade" }
            ]
        },
        {
            titulo: "Samba",
            descricao: "Explosão de sabor tropical na casca 'Pele de Sapo'. Polpa amarela vibrante com doçura equilibrada e toque de frescor. Excelente durabilidade.",
            imagem: "assets/svg/produtos/spsamba.webp",
            impactCharacters: [
                { icon: "bi-droplet", texto: "Altamente suculento" },
                { icon: "bi-emoji-smile", texto: "Doçura com toque tropical" },
                { icon: "bi-clock", texto: "Longa vida útil e frescor" }
            ]
        },
        {
            titulo: "Melicia",
            descricao: "A opção 'Pele de Sapo' para quem ama doçura intensa. Polpa amarela suculenta com sabor inconfundível, extremamente doce e melado. Satisfação garantida.",
            imagem: "assets/svg/produtos/spmelicia.webp",
            impactCharacters: [
                { icon: "bi-droplet", texto: "Polpa suculenta e macia" },
                { icon: "bi-emoji-smile", texto: "Sabor intensamente doce e melado" },
                { icon: "bi-star", texto: "Garantia de alta qualidade" }
            ]
        }
    ],

    matisse: [

        {
            titulo: "Melão Matisse Cepi",
            descricao: "Exclusivo e delicado, perfeito para quem busca qualidade e frescor.",
            imagem: "assets/svg/produtos/matisse-cepi.webp",
            impactCharacters: [
                { icon: "bi-emoji-smile", texto: "Sabor marcante" },
                { icon: "bi-sun", texto: "Cultivo especial" },
                { img: "assets/svg/logo-rei.webp", texto: "Família Itaueira" }
            ]
        },
        {
            titulo: "Melão Matisse",
            descricao: "De aparência marcante e polpa doce, é valorizado pela qualidade premium e sabor único.",
            imagem: "assets/svg/produtos/matisse.webp",

            impactCharacters: [
                { icon: "bi-patch-check", texto: "Selo premium" },
                { icon: "bi-gem", texto: "Sabor único" },
                { icon: "bi-trophy", texto: "Alta valorização" }
            ]
        },
    ],
    galia: [
        {
            titulo: "Cepi",
            descricao: "Variedade Galia de alta qualidade, reconhecida pelo seu sabor delicado e frescor prolongado. Possui um aroma inconfundível e é cultivado sob um regime controlado para garantir a perfeição da textura e doçura.",
            imagem: "assets/svg/produtos/galia-cepi.webp",
            impactCharacters: [
                { icon: "bi-emoji-smile", texto: "Sabor delicado e refinado" },
                { icon: "bi-sun", texto: "Cultivo e maturação controlados" },
                { img: "assets/svg/logo-rei.webp", texto: "Família Itaueira" }
            ]
        },
        {
            titulo: "Mossoró",
            descricao: "Nascido no Nordeste, este Galia tem sabor doce e refrescante com polpa amarela brilhante sob a casca verde. Ideal para receitas tropicais, garante alta hidratação e um toque de sabor regional.",
            imagem: "assets/svg/produtos/gamoss.webp",
            impactCharacters: [
                { icon: "bi-emoji-smile", texto: "Sabor doce e tropical" },
                { icon: "bi-droplet", texto: "Muito hidratante" },
                { icon: "bi-geo-alt", texto: "Sabor do Nordeste" }
            ]
        },
        {
            titulo: "Samba",
            descricao: "Com casca verde com manchas escuras e polpa amarela suculenta, o Galia Samba combina doçura com um toque marcante de frescor. É a escolha perfeita para consumir puro ou em sucos nos dias mais quentes.",
            imagem: "assets/svg/produtos/gasamba.webp",
            impactCharacters: [
                { icon: "bi-emoji-smile", texto: "Sabor doce e fresco" },
                { icon: "bi-droplet", texto: "Polpa suculenta e macia" },
                { icon: "bi-clock", texto: "Fácil conservação" }
            ]
        }

    ],
    cantaloupe: [

        {
            titulo: "Cepi",
            descricao: "Um Cantaloupe premium com sabor intenso e aroma inconfundível. Sua polpa alaranjada é suculenta e ideal para realçar o frescor em coquetéis ou ser a estrela de ocasiões especiais.",
            imagem: "assets/svg/produtos/cantamossi.webp",
            impactCharacters: [
                { icon: "bi-emoji-smile", texto: "Sabor tropical intenso" },
                { icon: "bi-sun", texto: "Cultivo e seleção especiais" },
                { img: "assets/svg/logo-rei.webp", texto: "Família Itaueira" }
            ]
        },
        {
            titulo: "Mossoró",
            descricao: "Diretamente do Nordeste, este Cantaloupe oferece um sabor vibrante e aroma tropical. Sua polpa é doce, firme e suculenta, refletindo a força do clima de Mossoró. Ideal para o consumo diário.",
            imagem: "assets/svg/produtos/cantamoss.webp",
            impactCharacters: [
                { icon: "bi-emoji-smile", texto: "Sabor tropical vibrante" },
                { icon: "bi-geo-alt", texto: "Força do clima Nordestino" },
                { icon: "bi-star", texto: "Qualidade garantida" }
            ]
        },
        {
            titulo: "Samba",
            descricao: "O Cantaloupe Samba melão com casca texturizada e polpa alaranjada, macia e extremamente suculenta. Seu sabor doce e refrescante faz dele uma escolha perfeita para dias quentes e uma adição deliciosa a saladas de frutas ou sucos.",
            imagem: "assets/svg/produtos/cantasamba.webp",
            impactCharacters: [
                { icon: "bi-emoji-smile", texto: "Sabor doce" },
                { icon: "bi-droplet", texto: "Muito hidratante" },
                { icon: "bi-sun", texto: "Ideal para dias quentes" }
            ]
        },
    ],

    orange: [

        {
            titulo: "Mossoró",
            descricao: "Melão Orange de casca lisa e polpa vibrante. Cultivado em Mossoró, possui sabor doce intenso, textura macia e aroma suave, sendo um campeão em vitaminas.",
            imagem: "assets/svg/produtos/orgmoss.webp",
            impactCharacters: [
                { icon: "bi-star", texto: "Sabor naturalmente doce" },
                { icon: "bi-cup-straw", texto: "Polpa ideal para sucos" },
                { icon: "bi-geo-alt", texto: "Cultivo de Mossoró" }
            ]
        },
        {
            titulo: "Mossoró (Rede)",
            descricao: "O clássico Melão Orange de Mossoró, embalado em rede de proteção. Polpa alaranjada, doce e rica em nutrientes. Perfeito para consumo in natura ou sucos, com praticidade na compra.",
            imagem: "assets/svg/produtos/orgmoss-rede.webp",
            impactCharacters: [
                { icon: "bi-star", texto: "Embalado em rede" },
                { icon: "bi-cup-straw", texto: "Ideal para sucos" },
                { icon: "bi-heart", texto: "Rico em betacaroteno" }
            ]
        },
        {
            titulo: "Frutamina",
            descricao: "Melão Orange liso da linha Frutamina. Polpa alaranjada, superdoce e com aroma tropical. Excelente fonte de vitaminas, ideal para quem busca sabor e nutrição.",
            imagem: "assets/svg/produtos/orgfruta.webp",
            impactCharacters: [
                { icon: "bi-star", texto: "Sabor doce e tropical" },
                { icon: "bi-cup-straw", texto: "Alta suculência" },
                { img: "assets/svg/logo2.webp", texto: "Linha Frutamina" }
            ]
        },
        {
            titulo: "Frutamina (Rede)",
            descricao: "Melão Frutamina com a conveniência da embalagem em rede de proteção. Possui polpa alaranjada firme, sabor doce intenso e aroma delicado. Ótima escolha para o consumo direto e saladas.",
            imagem: "assets/svg/produtos/orgfruta-rede.webp",
            impactCharacters: [
                { icon: "bi-star", texto: "Embalado em rede" },
                { icon: "bi-clock", texto: "Fácil conservação" },
                { img: "assets/svg/logo2.webp", texto: "Linha Frutamina" }
            ]
        }

    ],

    melancia: [
        {
            titulo: "Magali",
            descricao: "A melancia sem sementes mais famosa! Polpa vermelha vibrante e incrivelmente doce. É extremamente suculenta e perfeita para compartilhar em momentos especiais. Qualidade garantida Itaueira.",
            imagem: "assets/svg/produtos/sem-semente.webp",
            impactCharacters: [
                { icon: "bi-droplet", texto: "Extremamente suculenta" },
                { icon: "bi-emoji-laughing", texto: "Sabor marcante e doce" },
                { img: "assets/svg/logo-rei.webp", texto: "Sem sementes Itaueira" }
            ]
        },
        {
            titulo: "Melancia Cepi",
            descricao: "Variedade clássica de melancia, ideal para o verão. Apresenta polpa vermelha intensa com um equilíbrio perfeito entre doçura e frescor. É uma fonte natural e deliciosa de hidratação.",
            imagem: "assets/svg/produtos/melancia-cepi.webp",
            impactCharacters: [
                { icon: "bi-droplet-half", texto: "Frescor garantido" },
                { icon: "bi-heart", texto: "Fonte natural de hidratação" },
                { img: "assets/svg/logo-rei.webp", texto: "Família Itaueira" }
            ]
        },
        {
            titulo: "Melancia Cepi Branca",
            descricao: "Melancia de polpa tradicional, mas com a casca externa mais clara ('branca'). Oferece o mesmo equilíbrio de doçura e frescor da linha Cepi, sendo um produto selecionado Itaueira.",
            imagem: "assets/svg/produtos/branca.webp",
            impactCharacters: [
                { icon: "bi-droplet-half", texto: "Casca clara distintiva" },
                { icon: "bi-heart", texto: "Polpa suculenta e doce" },
                { img: "assets/svg/logo-rei.webp", texto: "Família Itaueira" }
            ]
        },
        {
            titulo: "Melancia Samba",
            descricao: "A melancia 'Mini' ideal. Fruta menor e prática, de polpa doce, crocante e muito refrescante. Perfeita para consumo individual, porções rápidas ou lanches.",
            imagem: "assets/svg/produtos/melanciasb.webp",
            impactCharacters: [
                { icon: "bi-droplet", texto: "Muito suculenta" },
                { icon: "bi-emoji-smile", texto: "Doce e refrescante" },
                { icon: "bi-basket", texto: "Tamanho individual prático" }
            ]
        },
        {
            titulo: "Melancia Potiguar",
            descricao: "Melancia tipo 'Mini' proveniente da região Potiguar. Fruta de tamanho prático, com polpa vermelha intensa, sabor doce e alta suculência. Excelente para quem busca frescor em porções menores.",
            imagem: "assets/svg/produtos/melancia.webp",
            impactCharacters: [
                { icon: "bi-droplet", texto: "Alta suculência" },
                { icon: "bi-emoji-smile", texto: "Doce e refrescante" },
                { icon: "bi-geo-alt", texto: "Origem Potiguar" }
            ]
        },
        {
            titulo: "Melancia Mossoró",
            descricao: "Melancia do tipo 'Mini', cultivada em Mossoró. Fruta prática e fácil de armazenar, com polpa de sabor doce e textura firme. Ideal para lanches e consumo individual sem desperdício.",
            imagem: "assets/svg/produtos/melmoss.webp",
            impactCharacters: [
                { icon: "bi-droplet", texto: "Polpa firme e suculenta" },
                { icon: "bi-emoji-smile", texto: "Doce e refrescante" },
                { icon: "bi-geo-alt", texto: "Cultivo de Mossoró" }
            ]
        },
        {
            titulo: "Melancia Usoprades",
            descricao: "Melancia 'Mini' com ótimo padrão de qualidade. Fruta menor e prática, de polpa doce e refrescante. Seu tamanho facilita o transporte e o consumo rápido, ideal para todas as ocasiões.",
            imagem: "assets/svg/produtos/meluso.webp",
            impactCharacters: [
                { icon: "bi-droplet", texto: "Muito suculenta" },
                { icon: "bi-emoji-smile", texto: "Doce e refrescante" },
                { icon: "bi-basket", texto: "Tamanho prático" }
            ]
        }
    ],

    pimentao: [
        {
            titulo: "Pimentão Amarelo",
            descricao: "Doce e delicado, ótimo para consumo cru, recheado ou em pratos leves.",
            imagem: "assets/svg/produtos/pama.webp",

            impactCharacters: [
                { icon: "bi-brightness-high", texto: "Cor vibrante" },
                { icon: "bi-emoji-heart-eyes", texto: "Sabor suave" },
                { img: "assets/svg/logo-rei.webp", texto: "Família Itaueira" }
            ]
        },
        {
            titulo: "Pimentão Vermelho",
            descricao: "Adocicado e suculento, perfeito para grelhados, molhos e pratos sofisticados.",
            imagem: "assets/svg/produtos/pvermelho.webp",

            impactCharacters: [
                { icon: "bi-fire", texto: "Sabor intenso" },
                { icon: "bi-star", texto: "Fonte de antioxidantes" },
                { img: "assets/svg/logo-rei.webp", texto: "Família Itaueira" }
            ]
        },
        {
            titulo: "Pimentão Laranja",
            descricao: "Equilíbrio entre doçura e frescor, ideal para saladas coloridas e receitas criativas.",
            imagem: "assets/svg/produtos/plar.webp",

            impactCharacters: [
                { icon: "bi-palette", texto: "Cor diferenciada" },
                { icon: "bi-emoji-smile", texto: "Sabor equilibrado" },
                { img: "assets/svg/logo-rei.webp", texto: "Família Itaueira" }
            ]
        }
    ],
    mel: [
        {
            titulo: "Mel em Bisnaga 275g",
            descricao: "Prático e saboroso, ideal para o dia a dia. Perfeito para adoçar chás, cafés e receitas rápidas.",
            imagem: "assets/svg/produtos/melb.webp",

            impactCharacters: [
                { icon: "bi-lightning", texto: "Praticidade no consumo" },
                { icon: "bi-heart", texto: "100% natural" },
                { img: "assets/svg/logo-rei.webp", texto: "Família Itaueira" }
            ]
        },
        {
            titulo: "Mel Pote de Vidro 500g",
            descricao: "Puro e natural, preservado em embalagem de vidro que mantém a qualidade e o sabor do mel por mais tempo.",
            imagem: "assets/svg/produtos/melv.webp",

            impactCharacters: [
                { icon: "bi-award", texto: "Sabor premium" },
                { icon: "bi-shield-check", texto: "Qualidade garantida" },
                { img: "assets/svg/logo-rei.webp", texto: "Família Itaueira" }
            ]
        }
    ],
    uva: [
        {
            titulo: "Uva vitória",
            descricao: "Mesa clássica, baga grande e firme, sabor doce e levemente ácido. Ideal para consumo in natura.",
            imagem: "assets/svg/produtos/vitoria.webp",
            impactCharacters: [
                { icon: "bi-apple", texto: "Boa firmeza" },
                { icon: "bi-emoji-smile", texto: "Sabor equilibrado" },
                { icon: "bi-basket", texto: "Mesa premium" }
            ]
        },
    ],
    abacaxi: [
        {
            titulo: "Abacaxi Pérola",
            descricao: "Fruta pequena, coroa curta, polpa amarelo-clara, doce e aromática. Ideal para consumo in natura e sucos.",
            imagem: "assets/svg/produtos/abacaxi.webp",
            impactCharacters: [
                { icon: "bi-star", texto: "Sabor doce" },
                { icon: "bi-cup-straw", texto: "Ótimo para sucos" },
                { icon: "bi-emoji-smile", texto: "Aroma marcante" }
            ]
        }
    ],
    manga: [
        {
            titulo: "Manga Keitt",
            descricao: "Pele verde mesmo madura, polpa firme, doce e sem fibras. Perfeita para saladas e sobremesas.",
            imagem: "assets/svg/produtos/keitt.webp",
            impactCharacters: [
                { icon: "bi-check-circle", texto: "Sem fibras" },
                { icon: "bi-egg-fried", texto: "Ideal para saladas" },
                { icon: "bi-heart", texto: "Doçura intensa" }
            ]
        },
        {
            titulo: "Manga Palmer",
            descricao: "Pele avermelhada, polpa suculenta e sabor equilibrado. Excelente para mesa e polpas.",
            imagem: "assets/svg/produtos/palmer.webp",
            impactCharacters: [
                { icon: "bi-palette", texto: "Cor vibrante" },
                { icon: "bi-emoji-smile", texto: "Sabor equilibrado" },
                { icon: "bi-shop", texto: "Sucesso no varejo" }
            ]
        },
        {
            titulo: "Manga Tommy",
            descricao: "Pele avermelhada, polpa suculenta e sabor equilibrado. Excelente para mesa e polpas.",
            imagem: "assets/svg/produtos/tommy.webp",

            impactCharacters: [
                { icon: "bi-palette", texto: "Cor vibrante" },
                { icon: "bi-emoji-smile", texto: "Sabor equilibrado" },
                { icon: "bi-shop", texto: "Sucesso no varejo" }
            ]
        },
        {
            titulo: "Manga Rosa",
            descricao: "Fruta tradicional, de casca avermelhada e polpa doce e perfumada. Muito apreciada para consumo fresco e sucos.",
            imagem: "assets/svg/produtos/manga-rosa.webp",
            visible: false,
            impactCharacters: [
                { icon: "bi-heart", texto: "Doçura intensa" },
                { icon: "bi-flower1", texto: "Aroma marcante" },
                { icon: "bi-cup-straw", texto: "Perfeita para sucos" }
            ]
        },
        {
            titulo: "Manga Espada",
            descricao: "Variedade popular, de polpa suculenta e fibras finas, sabor adocicado com leve acidez. Muito usada em sucos e consumo direto.",
            imagem: "assets/svg/produtos/espada.webp",
            impactCharacters: [
                { icon: "bi-droplet", texto: "Polpa suculenta" },
                { icon: "bi-emoji-smile", texto: "Sabor equilibrado" },
                { icon: "bi-shop", texto: "Muito procurada no varejo" }
            ]
        },
        {
            titulo: "Manga Shelly",
            descricao: "Fruta de polpa macia e suculenta, sabor doce e levemente aromático. Ideal para consumo in natura e sucos.",
            imagem: "assets/svg/produtos/shelly.webp",

            impactCharacters: [
                { icon: "bi-droplet", texto: "Polpa suculenta" },
                { icon: "bi-emoji-smile", texto: "Sabor doce" },
                { icon: "bi-cup-straw", texto: "Perfeita para sucos" }
            ]
        }

    ],
    morango: [
        {
            titulo: "Morango San Andreas",
            descricao: "Variedade de alto rendimento, com sabor adocicado e excelente firmeza. Ideal para transporte e consumo in natura.",
            imagem: "assets/svg/produtos/morango.webp",

            impactCharacters: [
                { icon: "bi-graph-up", texto: "Alta produtividade" },
                { icon: "bi-truck", texto: "Bom transporte" },
                { icon: "bi-emoji-smile", texto: "Sabor doce" }
            ]
        },
        {
            titulo: "San Andreas Sul",
            descricao: "Morango San Andreas, mas esse vem diretamente do Sul do Brasil",
            imagem: "assets/svg/produtos/morango-sul.webp",

            impactCharacters: [
                { icon: "bi-graph-up", texto: "Alta produtividade" },
                { icon: "bi-truck", texto: "Bom transporte" },
                { icon: "bi-emoji-smile", texto: "Sabor doce" }
            ]
        },
        {
            titulo: "Morango Albion",
            descricao: "Fruto de coloração intensa, formato alongado e aroma marcante. Muito utilizado em confeitaria e sobremesas.",
            imagem: "assets/svg/produtos/morango-albion.webp",
            visible: false,
            impactCharacters: [
                { icon: "bi-brush", texto: "Cor intensa" },
                { icon: "bi-cake2", texto: "Perfeito para doces" },
                { icon: "bi-flower1", texto: "Aroma marcante" }
            ]
        },
        {
            titulo: "Morango Camino Real",
            descricao: "Morangos firmes, grandes e de coloração vibrante. Ótima resistência no transporte e conservação.",
            imagem: "assets/svg/produtos/morango-caminoreal.webp",
            visible: false,
            impactCharacters: [
                { icon: "bi-bounding-box", texto: "Frutos grandes" },
                { icon: "bi-hourglass-split", texto: "Alta durabilidade" },
                { icon: "bi-box-seam", texto: "Resistente ao transporte" }
            ]
        },
        {
            titulo: "Morango Monterey",
            descricao: "Variedade muito doce e produtiva, perfeita para consumo direto e ideal para climas mais quentes.",
            imagem: "assets/svg/produtos/morango-monterey.webp",
            visible: false,
            impactCharacters: [
                { icon: "bi-emoji-heart-eyes", texto: "Extremamente doce" },
                { icon: "bi-sun", texto: "Adaptado a calor" },
                { icon: "bi-bar-chart", texto: "Alta produtividade" }
            ]
        },

    ],
    caqui: [
        {
            titulo: "Caqui Fuyu",
            descricao: "Fruta firme, doce e de coloração laranja intensa. Ideal para consumo in natura e saladas de frutas.",
            imagem: "assets/svg/produtos/caqui.webp",

            impactCharacters: [
                { icon: "bi-emoji-smile", texto: "Doce e suculento" },
                { icon: "bi-apple", texto: "Fruta firme" },
                { icon: "bi-basket", texto: "Mesa premium" }
            ]
        }
    ],
    pera: [
        {
            titulo: "Pera X",
            descricao: "Fruta suculenta, de polpa macia e sabor doce. Ideal para consumo in natura e saladas de frutas.",
            imagem: "assets/svg/produtos/pera.webp",

            impactCharacters: [
                { icon: "bi-emoji-smile", texto: "Sabor doce e delicado" },
                { icon: "bi-apple", texto: "Textura macia" },
                { icon: "bi-basket", texto: "Mesa premium" }
            ]
        }
    ],
    laranja: [
        {
            titulo: "Laranja Kinkan",
            descricao: "Fruta pequena, doce e levemente ácida, com casca fina e comestível. Perfeita para consumo in natura e decoração de pratos.",
            imagem: "assets/svg/produtos/kinkan.webp",

            impactCharacters: [
                { icon: "bi-emoji-smile", texto: "Doce e suculenta" },
                { icon: "bi-apple", texto: "Casca fina e comestível" },
                { icon: "bi-basket", texto: "Mesa premium" }
            ]
        },
        {
            titulo: "Laranja Cutrale",
            descricao: "As laranjas Cutrale são conhecidas por sua qualidade superior e sabor inconfundível. Com uma casca fina e polpa suculenta, oferecem um sabor doce e refrescante, perfeito para sucos, saladas de frutas ou consumidas frescas.",
            imagem: "assets/svg/produtos/laranja-cutrale.webp",
            impactCharacters: [
                { icon: "bi-emoji-smile", texto: "Sabor doce e refrescante" },
                { icon: "bi-droplet", texto: "Muito suculenta" },
                { icon: "bi-cup-straw", texto: "Marca Cutrale" }

            ]
        }
    ],
    nespera: [
        {
            titulo: "Nêspera Tradicional",
            descricao: "Fruta de polpa macia, doce e levemente ácida. Ideal para consumo in natura, sobremesas e compotas.",
            imagem: "assets/svg/produtos/nespera.webp",

            impactCharacters: [
                { icon: "bi-emoji-smile", texto: "Doce e suculenta" },
                { icon: "bi-apple", texto: "Textura macia" },
                { icon: "bi-basket", texto: "Mesa premium" }
            ]
        },
    ],
    maracuja: [
        {
            titulo: "Granadilha",
            descricao: "Fruta de polpa aromática, sabor equilibrado entre doce e ácido. Ideal para sucos, sobremesas e uso culinário em geral.",
            imagem: "assets/svg/produtos/granadilha.webp",

            impactCharacters: [
                { icon: "bi-emoji-smile", texto: "Polpa aromática" },
                { icon: "bi-cup-straw", texto: "Perfeito para sucos" },
                { icon: "bi-basket", texto: "Mesa premium" }
            ]
        }
    ],
    mirtilo: [
        {
            titulo: "Mirtilo Clássico",
            descricao: "Fruta pequena, sabor doce e levemente ácido, com coloração azul intensa. Ideal para consumo in natura, saladas e sobremesas.",
            imagem: "assets/svg/produtos/mirtilo.webp",

            impactCharacters: [
                { icon: "bi-emoji-smile", texto: "Doce e suculento" },
                { icon: "bi-palette", texto: "Cor intensa" },
                { icon: "bi-basket", texto: "Mesa premium" }
            ]
        }
    ],
    pitaya: [
        {
            titulo: "Pitaya Vermelha",
            descricao: "Fruta exótica de polpa suculenta e sabor levemente adocicado. Ideal para consumo in natura, sucos e sobremesas decorativas.",
            imagem: "assets/svg/produtos/pitaya.webp",
            impactCharacters: [
                { icon: "bi-emoji-smile", texto: "Doce e refrescante" },
                { icon: "bi-palette", texto: "Cor vibrante" },
                { icon: "bi-basket", texto: "Mesa premium" }
            ]
        },
        {
            titulo: "Pitaya Branca",
            descricao: "Fruta leve e delicada, de sabor suave e polpa branca com sementes pretas. Muito versátil, perfeita para saladas, sucos e sobremesas.",
            imagem: "assets/svg/produtos/pitaya-branca.webp",
            impactCharacters: [
                { icon: "bi-flower1", texto: "Sabor suave" },
                { icon: "bi-droplet", texto: "Hidratante e leve" },
                { icon: "bi-stars", texto: "Exótica e elegante" }
            ]
        },
        {
            titulo: "Pitaya Amarela",
            descricao: "Fruta rara e altamente apreciada, de casca amarela e polpa branca adocicada. Rica em fibras e vitamina C, com sabor marcante.",
            imagem: "assets/svg/produtos/pitaya-amarela.webp",
            impactCharacters: [
                { icon: "bi-brightness-high", texto: "Rica em vitamina C" },
                { icon: "bi-heart-pulse", texto: "Fonte de fibras" },
                { icon: "bi-star-fill", texto: "Sabor marcante" }
            ]
        }
    ],
    cupuacu: [
        {
            titulo: "Cupuaçu",
            descricao: "Fruta de polpa cremosa, sabor adocicado e aroma marcante. Ideal para sucos, sobremesas e produtos gourmet.",
            imagem: "assets/svg/produtos/cupuacu.webp",
            impactCharacters: [
                { icon: "bi-emoji-smile", texto: "Polpa cremosa" },
                { icon: "bi-cup-straw", texto: "Ótimo para sucos e sobremesas" },
                { icon: "bi-basket", texto: "Mesa premium" }
            ]
        }
    ],
    graviola: [
        {
            titulo: "Graviola Tradicional",
            descricao: "Fruta de polpa macia e suculenta, sabor doce com toque ácido. Ideal para sucos, sobremesas e consumo in natura.",
            imagem: "assets/svg/produtos/graviola.webp",

            impactCharacters: [
                { icon: "bi-emoji-smile", texto: "Doce e suculenta" },
                { icon: "bi-cup-straw", texto: "Perfeita para sucos" },
                { icon: "bi-basket", texto: "Mesa premium" }
            ]
        }
    ],
    cacau: [
        {
            titulo: "Cacau Tradicional",
            descricao: "Fruta de polpa macia e sementes ricas em sabor. Ideal para produção de chocolate, sucos e doces artesanais.",
            imagem: "assets/svg/produtos/cacau.webp",

            impactCharacters: [
                { icon: "bi-emoji-smile", texto: "Polpa saborosa" },
                { icon: "bi-cup-straw", texto: "Perfeito para doces e chocolates" },
                { icon: "bi-basket", texto: "Mesa premium" }
            ]
        }
    ],
    caju: [
        {
            titulo: "Caju Tradicional",
            descricao: "Fruta de polpa suculenta e sabor levemente ácido, rica em vitamina C. Ideal para consumo in natura, sucos e doces.",
            imagem: "assets/svg/produtos/caju.webp",
            impactCharacters: [
                { icon: "bi-emoji-smile", texto: "Doce e suculento" },
                { icon: "bi-cup-straw", texto: "Perfeito para sucos" },
                { icon: "bi-basket", texto: "Mesa premium" }
            ]
        }
    ],
    amora: [
        {
            titulo: "Amora Preta",
            descricao: "Pequena fruta de sabor doce e levemente ácido, rica em antioxidantes e vitaminas. Excelente para consumo fresco, geleias, sobremesas e sucos.",
            imagem: "assets/svg/produtos/amora.webp",
            impactCharacters: [
                { icon: "bi-heart-pulse", texto: "Rica em antioxidantes" },
                { icon: "bi-cup-straw", texto: "Ideal para sucos e geleias" },
                { icon: "bi-stars", texto: "Sabor marcante" }
            ]
        }
    ],
    acerola: [
        {
            titulo: "Acerola",
            descricao: "Pequena e suculenta, extremamente rica em vitamina C. Ideal para sucos refrescantes e consumo in natura.",
            imagem: "assets/svg/produtos/acerola.webp",
            impactCharacters: [
                { icon: "bi-cup-straw", texto: "Fonte de vitamina C" },
                { icon: "bi-droplet", texto: "Muito suculenta" },
                { icon: "bi-heart", texto: "Refrescante e nutritiva" }
            ]
        }
    ],

    jaca: [
        {
            titulo: "Jaca",
            descricao: "Fruto grande, aromático e adocicado, versátil em pratos doces e salgados.",
            imagem: "assets/svg/produtos/jaca.webp",
            impactCharacters: [
                { icon: "bi-basket", texto: "Fruta volumosa" },
                { icon: "bi-emoji-smile", texto: "Sabor adocicado" },
                { icon: "bi-fire", texto: "Versátil na cozinha" }
            ]
        }
    ],



    physalis: [
        {
            titulo: "Physalis",
            descricao: "Exótica e delicada, de sabor cítrico e levemente adocicado, muito usada em sobremesas gourmet.",
            imagem: "assets/svg/produtos/physales.webp",
            impactCharacters: [
                { icon: "bi-stars", texto: "Exótica e elegante" },
                { icon: "bi-emoji-smile", texto: "Sabor cítrico suave" },
                { icon: "bi-cake2", texto: "Perfeita para doces" }
            ]
        }
    ],

    figo: [
        {
            titulo: "Figo",
            descricao: "Fruta macia e adocicada, muito apreciada em doces, geleias e consumo fresco.",
            imagem: "assets/svg/produtos/figo.webp",
            impactCharacters: [
                { icon: "bi-cake", texto: "Ideal para sobremesas" },
                { icon: "bi-droplet", texto: "Textura macia" },
                { icon: "bi-heart", texto: "Sabor adocicado" }
            ]
        }
    ],

    goiaba: [
        {
            titulo: "Goiaba Vermelha",
            descricao: "Fruta doce e aromática, consumida fresca ou em doces e sucos tradicionais.",
            imagem: "assets/svg/produtos/goiaba.webp",
            impactCharacters: [
                { icon: "bi-emoji-smile", texto: "Aroma marcante" },
                { icon: "bi-cup-straw", texto: "Perfeita para sucos" },
                { icon: "bi-cake2", texto: "Base para doces" }
            ]
        }
    ],

    roma: [
        {
            titulo: "Romã",
            descricao: "Grãos suculentos e levemente ácidos, símbolo de prosperidade e muito nutritiva.",
            imagem: "assets/svg/produtos/roma.webp",
            impactCharacters: [
                { icon: "bi-gem", texto: "Fruta simbólica" },
                { icon: "bi-droplet", texto: "Sementes suculentas" },
                { icon: "bi-heart", texto: "Fonte de antioxidantes" }
            ]
        }
    ],

    umbu: [
        {
            titulo: "Umbu",
            descricao: "Fruta pequena e refrescante, de sabor agridoce característico do sertão.",
            imagem: "assets/svg/produtos/umbu.webp",
            impactCharacters: [
                { icon: "bi-sun", texto: "Fruto do sertão" },
                { icon: "bi-cup-straw", texto: "Ótimo para sucos" },
                { icon: "bi-emoji-smile", texto: "Sabor agridoce" }
            ]
        }
    ],
    atemoia: [
        {
            titulo: "Atemoia",
            descricao: "Fruta doce e cremosa, com sabor suave e aromático.",
            imagem: "assets/svg/produtos/atemoia.webp",
            impactCharacters: [
                { icon: "bi-emoji-smile", texto: "Sabor doce e aromático" },
                { icon: "bi-cup-straw", texto: "Perfeita para sucos" },
                { icon: "bi-leaf", texto: "Polpa cremosa" }
            ]
        },
    ],
    mamao: [
        {
            titulo: "Mamão Papaya",
            descricao: "Fruta tropical de polpa doce e macia, ideal para consumo in natura e vitaminas.",
            imagem: "assets/svg/produtos/papaya.webp",
            impactCharacters: [
                { icon: "bi-droplet", texto: "Polpa macia" },
                { icon: "bi-emoji-smile", texto: "Sabor doce" },
                { icon: "bi-heart", texto: "Rico em vitaminas" }
            ]
        },
        {
            titulo: "Mamão Formosa",
            descricao: "Fruta de polpa firme e doce, grande porte, excelente para consumo direto e sobremesas.",
            imagem: "assets/svg/produtos/formosa.webp",
            impactCharacters: [
                { icon: "bi-droplet", texto: "Polpa firme" },
                { icon: "bi-emoji-smile", texto: "Sabor adocicado" },
                { icon: "bi-shop", texto: "Grande porte" }
            ]
        },
        {
            titulo: "Mamão Clam Shell",
            descricao: "Variedade de mamão com polpa doce e suculenta, ideal para consumo in natura e embalagens práticas.",
            imagem: "assets/svg/produtos/clam.webp",
            impactCharacters: [
                { icon: "bi-droplet", texto: "Polpa suculenta" },
                { icon: "bi-cup-straw", texto: "Perfeito para embalagens" },
                { icon: "bi-emoji-smile", texto: "Sabor doce" }
            ]
        }
    ],
    tomate: [
        {
            titulo: "Tomate Cereja",
            descricao: "Pequeno, suculento e muito doce. Ideal para saladas, snacks e decoração de pratos.",
            imagem: "assets/svg/produtos/cocktail.webp",
            impactCharacters: [
                { icon: "bi-emoji-heart-eyes", texto: "Extremamente doce" },
                { icon: "bi-droplet", texto: "Muito suculento" },
                { icon: "bi-basket", texto: "Prático para petiscos" }
            ]
        },
        {
            titulo: "Tomate em Rama",
            descricao: "Tomates frescos colhidos em ramos, com sabor intenso e aroma marcante. Ideais para pratos gourmet e decoração.",
            imagem: "assets/svg/produtos/rama.webp",
            impactCharacters: [
                { icon: "bi-flower1", texto: "Aroma marcante" },
                { icon: "bi-star", texto: "Sabor intenso" },
                { icon: "bi-patch-check", texto: "Visual gourmet" }
            ]
        },
        {
            titulo: "Tomate Romanita",
            descricao: "Sabor equilibrado entre doçura e acidez, polpa firme e textura agradável. Excelente para saladas, grelhados e pratos que precisam de cortes decorativos.",
            imagem: "assets/svg/produtos/romanita.webp",
            impactCharacters: [
                { icon: "bi-apple", texto: "Polpa firme" },
                { icon: "bi-leaf", texto: "Ótimo para saladas" },
                { icon: "bi-box-seam", texto: "Boa conservação" }
            ]
        },
    ],
    abacate: [

        {
            titulo: "Abacate Breda",
            descricao: "Abacate tradicional brasileiro, de polpa macia, sabor suave e excelente para vitaminas e receitas.",
            imagem: "assets/svg/produtos/breda.webp",
            impactCharacters: [
                { icon: "bi-droplet", texto: "Polpa macia" },
                { icon: "bi-egg-fried", texto: "Ideal para vitaminas" },
                { icon: "bi-heart", texto: "Sabor suave" }
            ]
        },
        {
            titulo: "Avocado",
            descricao: "Fruto pequeno, casca escura e polpa cremosa. Rico em nutrientes, perfeito para saladas, toasts e guacamole.",
            imagem: "assets/svg/produtos/avocado.webp",
            impactCharacters: [
                { icon: "bi-star", texto: "Rico em nutrientes" },
                { icon: "bi-leaf", texto: "Polpa cremosa" },
                { icon: "bi-patch-check", texto: "Perfeito para guacamole" }
            ]
        },
        {
            titulo: "Abacate Margarida",
            descricao: "Variedade Margarida: polpa cremosa, sabor suave e textura amanteigada. Ideal para consumo in natura, vitaminas e preparos gourmet.",
            imagem: "assets/svg/produtos/margarida.webp",
            impactCharacters: [
                { icon: "bi-droplet", texto: "Polpa cremosa" },
                { icon: "bi-heart", texto: "Sabor suave" },
                { icon: "bi-shop", texto: "Boa aceitação no varejo" }
            ]
        },
    ],
    limao: [
        {
            titulo: "Limão Tahiti",
            descricao: "Casca fina, polpa suculenta e acidez equilibrada. Ideal para sucos, temperos e preparo de bebidas.",
            imagem: "assets/svg/produtos/limao.webp",
            impactCharacters: [
                { icon: "bi-cup-straw", texto: "Perfeito para sucos" },
                { icon: "bi-heart-pulse", texto: "Rico em vitamina C" },
                { icon: "bi-emoji-smile", texto: "Sabor refrescante" }
            ]
        }
    ],
    framboesa: [
        {
            titulo: "Framboesa",
            descricao: "Pequena e delicada. Rica em vitaminas e antioxidantes — ideal para consumo in natura, geleias, sobremesas e sucos.",
            imagem: "assets/svg/produtos/framboesa.webp",
            impactCharacters: [
                { icon: "bi-heart-pulse", texto: "Rica em antioxidantes" },
                { icon: "bi-cup-straw", texto: "Ótima para sucos e geleias" },
                { icon: "bi-emoji-smile", texto: "Sabor delicado" }
            ]
        }
    ],


};

// ================== ESTADO DO MODAL ==================
let modalState = {
    slug: null,
    index: 0,
    lista: []
};

// ================== FUNÇÕES ==================
function abrirModal(slug) {
    let lista = produtosData[slug];
    if (!lista || !lista.length) {
        console.warn("Produto não encontrado:", slug);
        return;
    }

    lista = lista.filter(p => p.visible !== false);
    if (!lista.length) {
        console.warn("Nenhum produto visível para:", slug);
        return;
    }

    modalState = { slug, index: 0, lista };

    const modal = document.getElementById("modalProduto");
    const img = document.getElementById("modalImagem");
    const loader = document.getElementById("modalLoader");

    // Mostrar spinner e esconder imagem
    if (loader) loader.style.display = "flex";
    if (img) img.style.display = "none";

    preencherModal(lista[0]); // aqui a imagem será definida

    // Quando a imagem terminar de carregar
    img.onload = function () {
        if (loader) loader.style.display = "none";
        img.style.display = "block";
    };

    if (modal) modal.style.display = "flex";
}



function preencherModal(produto) {
    if (!produto) return;

    const titulo = document.getElementById("modalTitulo");
    const descricao = document.getElementById("modalDescricao");
    const imagem = document.getElementById("modalImagem");
    const impact = document.querySelector(".impact-characters");
    const progresso = document.getElementById("progressoTexto");
    const loader = document.getElementById("modalLoader"); // <- Spinner aqui

    // Mostra o loader e esconde a imagem enquanto carrega
    if (loader) loader.style.display = "flex";
    if (imagem) imagem.style.display = "none";

    if (titulo) titulo.textContent = produto.titulo || "";
    if (descricao) descricao.textContent = produto.descricao || "";

    if (imagem) {
        imagem.onload = function () {
            // Quando terminar de carregar
            if (loader) loader.style.display = "none";
            imagem.style.display = "block";
        };
        imagem.src = produto.imagem || "";
    }

    // Impact characters
    if (impact) {
        impact.innerHTML = "";
        (produto.impactCharacters || []).forEach(c => {
            const div = document.createElement("div");
            div.className = "character";
            if (c.icon) {
                div.innerHTML = `<i class="bi ${c.icon}"></i><span>${c.texto}</span>`;
            } else if (c.img) {
                div.innerHTML = `<img src="${c.img}" alt="icon"><span>${c.texto}</span>`;
            }
            impact.appendChild(div);
        });
    }

    // Progresso
    if (progresso) {
        progresso.textContent = `${modalState.index + 1}/${modalState.lista.length}`;
    }

    // Pré-carregar a próxima imagem (melhora a fluidez ao navegar)
    preloadNextImage();
}



function fecharModal() {
    const modal = document.getElementById("modalProduto");
    if (modal) modal.style.display = "none";
}

// carrega silenciosamente a imagem seguinte no array de estado
function preloadNextImage() {
    if (modalState.lista.length > 1) {
        const proximoIndex = (modalState.index + 1) % modalState.lista.length;
        const imgPreload = new Image();
        imgPreload.src = modalState.lista[proximoIndex].imagem || "";
    }
}



function proximoProduto() {
    if (!modalState.lista.length) return;
    modalState.index = (modalState.index + 1) % modalState.lista.length;
    preencherModal(modalState.lista[modalState.index]);
}

function anteriorProduto() {
    if (!modalState.lista.length) return;
    modalState.index =
        (modalState.index - 1 + modalState.lista.length) % modalState.lista.length;
    preencherModal(modalState.lista[modalState.index]);
}



// ================== TECLAS DE ATALHO ==================
document.addEventListener("keydown", (e) => {
    const modal = document.getElementById("modalProduto");
    if (!modal || modal.style.display !== "flex") return;

    switch (e.key) {
        case "Escape": // ESC fecha modal
            fecharModal();
            break;
        case "ArrowRight": // seta direita -> próximo
            proximoProduto();
            break;
        case "ArrowLeft": // seta esquerda -> anterior
            anteriorProduto();
            break;
    }
});

// ================== MOSTRAR/ESCONDER BOTÕES ==================
function atualizarBotoesNavegacao() {
    const btnPrev = document.getElementById("anteriorBtn");
    const btnNext = document.getElementById("proximoBtn");

    if (!btnPrev || !btnNext) return;

    if (modalState.lista.length <= 1) {
        btnPrev.style.display = "none";
        btnNext.style.display = "none";
    } else {
        btnPrev.style.display = "block";
        btnNext.style.display = "block";
    }
}

// Chamando no preencherModal para atualizar sempre que abrir/andar
const _preencherModalOriginal = preencherModal;
preencherModal = function (produto) {
    _preencherModalOriginal(produto);
    atualizarBotoesNavegacao();
};

