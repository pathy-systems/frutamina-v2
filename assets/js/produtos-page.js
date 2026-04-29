    const produtos = [
      {
        id: 'melao-amarelo-frutamina',
        nome: 'Melão Amarelo Frutamina',
        categoria: 'melao',
        catLabel: 'Melão',
        origem: 'nacional',
        badge: 'Nacional',
        marca: 'Frutamina',
        img: 'https://frutamina.com.br/assets/svg/produtos/amfirma.webp',
        variedade: 'Melão Amarelo Frutamina com casca amarelo-ouro, polpa clara firme e docura consistente para giro rapido de bancada.',
        attrs: ['Marca Frutamina', 'Brix Alto', 'Polpa Firme'],
        info: {
          Sazonalidade: 'Ano inteiro',
          Calibre: '3 a 15',
          Embalagem: 'Caixa 13kg',
          Origem: 'Jerusalém'
        }
      },
      {
        id: 'melao-amarelo-otani',
        nome: 'Melão Amarelo Otani',
        categoria: 'melao',
        catLabel: 'Melão',
        origem: 'nacional',
        badge: 'Nacional',
        marca: 'Otani',
        img: 'https://frutamina.com.br/assets/svg/produtos/amarelo.webp',
        variedade: 'Melão Amarelo Otani com casca amarelo-ouro, polpa clara firme e docura consistente para giro rapido de bancada.',
        attrs: ['Marca Otani', 'Brix Alto', 'Polpa Firme'],
        info: {
          Sazonalidade: 'Ano inteiro',
          Calibre: '3 a 15',
          Embalagem: 'Caixa 13kg',
          Origem: 'Mossoró - RN'
        }
      },
      {
        id: 'melao-amarelo-angel',
        nome: 'Melão Amarelo Angel',
        categoria: 'melao',
        catLabel: 'Melão',
        origem: 'nacional',
        badge: 'Nacional',
        marca: 'Angel',
        img: 'https://frutamina.com.br/assets/svg/produtos/amangel.webp',
        variedade: 'Melão Amarelo Angel com casca amarelo-ouro, polpa clara firme e docura consistente para giro rapido de bancada.',
        attrs: ['Marca Angel', 'Brix Alto', 'Polpa Firme'],
        info: {
          Sazonalidade: 'Ano inteiro',
          Calibre: '3 a 15',
          Embalagem: 'Caixa 13kg',
          Origem: 'Apodi - RN'
        }
      },
      {
        id: 'melao-amarelo-mossoro',
        nome: 'Melão Amarelo Mossoró',
        categoria: 'melao',
        catLabel: 'Melão',
        origem: 'nacional',
        badge: 'Nacional',
        marca: 'Mossoró',
        img: 'https://frutamina.com.br/assets/svg/produtos/ammoss.webp',
        variedade: 'Melão Amarelo Mossoró com casca amarelo-ouro, polpa clara firme e docura consistente para giro rapido de bancada.',
        attrs: ['Marca Mossoró', 'Brix Alto', 'Polpa Firme'],
        info: {
          Sazonalidade: 'Ano inteiro',
          Calibre: '3 a 15',
          Embalagem: 'Caixa 13kg',
          Origem: 'Mossoró - RN'
        }
      },
      {
        id: 'melao-amarelo-rei',
        nome: 'Melão Amarelo Rei',
        categoria: 'melao',
        catLabel: 'Melão',
        origem: 'nacional',
        badge: 'Nacional',
        marca: 'Rei',
        img: 'https://frutamina.com.br/assets/svg/produtos/am-rei.webp',
        variedade: 'Melão Amarelo Rei com casca amarelo-ouro, polpa clara firme e docura consistente para giro rapido de bancada.',
        attrs: ['Marca Rei', 'Brix Alto', 'Polpa Firme'],
        info: {
          Sazonalidade: 'Ano inteiro',
          Calibre: '4 a 7',
          Embalagem: 'Caixa 10kg e 14Kg',
          Origem: 'Canto do Buriti e Pajeú do Piauí - PI | Morada Nova - CE |  Ribeira do Amparo - BA'
        }
      },
      {
        id: 'melao-amarelo-cepi',
        nome: 'Melão Amarelo Cepi',
        categoria: 'melao',
        catLabel: 'Melão',
        origem: 'nacional',
        badge: 'Nacional',
        marca: 'Cepi',
        img: 'https://frutamina.com.br/assets/svg/produtos/amarelo-cepi.webp',
        variedade: 'Melão Amarelo Cepi com casca amarelo-ouro, polpa clara firme e docura consistente para giro rapido de bancada.',
        attrs: ['Marca Cepi', 'Brix Alto', 'Polpa Firme'],
        info: {
          Sazonalidade: 'Ano inteiro',
          Calibre: '4 a 7',
          Embalagem: 'Caixa 10kg',
          Origem: 'Canto do Buriti e Pajeú do Piauí - PI | Morada Nova - CE |  Ribeira do Amparo - BA'
        }
      },
      {
        id: 'amora',
        nome: 'Amora',
        categoria: 'amora',
        catLabel: 'Amoras',
        origem: 'nacional',
        badge: 'Nacional',
        marca: 'Frutamina',
        img: 'https://frutamina.com.br/assets/svg/produtos/amora.webp',
        variedade: 'Amora com fruto escuro de sabor marcante, com boa textura para consumo fresco.',
        attrs: ['Marca Frutamina', 'Sabor Marcante', 'Cor Intensa'],
        info: {
          Sazonalidade: 'Verão',
          Calibre: 'N/D',
          Embalagem: '10 Bandejas de 100g',
          Origem: 'Brasil'
        }
      },
      {
        id: 'atemoia',
        nome: 'Atemoia',
        categoria: 'atemoia',
        catLabel: 'Atemoias',
        origem: 'nacional',
        badge: 'Nacional',
        marca: 'Frutamina',
        img: 'https://frutamina.com.br/assets/svg/produtos/atemoia.webp',
        variedade: 'Atemoia com polpa cremosa e doce, com excelente rendimento no ponto de venda.',
        attrs: ['Marca Frutamina', 'Polpa Cremosa', 'Docura Alta'],
        info: {
          Sazonalidade: 'Verão',
          Calibre: '2 a 5',
          Embalagem: 'Caixa 6kg',
          Origem: 'Brasil'
        }
      },
      {
        id: 'abacate-avocado',
        nome: 'Abacate Avocado',
        categoria: 'abacate',
        catLabel: 'Abacate',
        origem: 'nacional',
        badge: 'Nacional',
        marca: 'Frutamina',
        img: 'https://frutamina.com.br/assets/svg/produtos/avocado.webp',
        variedade: 'Abacate Avocado com casca escura, polpa amanteigada e alto teor de oleo para linha premium.',
        attrs: ['Marca Frutamina', 'Alto Teor de Oleo', 'Polpa Cremosa'],
        info: {
          Sazonalidade: 'Verão',
          Calibre: '2 a 5',
          Embalagem: 'Caixa 6kg ou 10Kg',
          Origem: 'Brasil'
        }
      },
      {
        id: 'melancia-branca-cepi',
        nome: 'Melancia Branca Cepi',
        categoria: 'itaueira',
        catLabel: 'Melancias',
        origem: 'nacional',
        badge: 'Nacional',
        marca: 'Cepi',
        img: 'https://frutamina.com.br/assets/svg/produtos/branca.webp',
        variedade: 'Melancia Branca Cepi com melancia de casca firme e polpa suculenta, com padrao estavel para distribuicao diaria.',
        attrs: ['Marca Cepi', 'Polpa Suculenta', 'Casca Firme'],
        info: {
          Sazonalidade: 'Verão',
          Calibre: '2 a 5',
          Embalagem: 'Caixa 14Kg',
          Origem: 'Brasil'
        }
      },
      {
        id: 'abacate-breda',
        nome: 'Abacate Breda',
        categoria: 'abacate',
        catLabel: 'Abacate',
        origem: 'nacional',
        badge: 'Nacional',
        marca: 'Frutamina',
        img: 'https://frutamina.com.br/assets/svg/produtos/breda.webp',
        variedade: 'Abacate Breda com calibre avantajado, polpa cremosa e sabor pronunciado para venda por unidade.',
        attrs: ['Marca Frutamina', 'Calibre Grande', 'Sabor Marcante'],
        info: {
          Sazonalidade: 'Verão',
          Calibre: '2 a 5',
          Embalagem: 'Caixa 6kg ou 10Kg',
          Origem: 'Brasil'
        }
      },
      {
        id: 'cacau',
        nome: 'Cacau',
        categoria: 'Cacau',
        catLabel: 'Cacau',
        origem: 'nacional',
        badge: 'Nacional',
        marca: 'Frutamina',
        img: 'https://frutamina.com.br/assets/svg/produtos/cacau.webp',
        variedade: 'Cacau com fruto aromatico de polpa adocicada, ideal para nichos diferenciados.',
        attrs: ['Marca Frutamina', 'Aroma Intenso', 'Polpa Adocicada'],
        info: {
          Sazonalidade: 'Verão',
          Embalagem: 'Caixa 12Kg',
          Origem: 'Brasil'
        }
      },
      {
        id: 'caju',
        nome: 'Caju',
        categoria: 'caju',
        catLabel: 'Caju',
        origem: 'nacional',
        badge: 'Nacional',
        marca: 'Frutamina',
        img: 'https://frutamina.com.br/assets/svg/produtos/caju.webp',
        variedade: 'Caju com fruto de boa suculencia e sabor equilibrado, com excelente presenca visual.',
        attrs: ['Marca Frutamina', 'Boa Suculencia', 'Sabor Equilibrado'],
        info: {
          Sazonalidade: 'Verão',
          Calibre: '2 a 5',
          Embalagem: 'Caixa 6kg com 6 bandejas',
          Origem: 'Brasil'
        }
      },
      {
        id: 'melao-cantaloupe-rei',
        nome: 'Melão Cantaloupe Rei',
        categoria: 'melao',
        catLabel: 'Melão',
        origem: 'nacional',
        badge: 'Nacional',
        marca: 'Rei',
        img: 'https://frutamina.com.br/assets/svg/produtos/cantaloupe-rei.webp',
        variedade: 'Melão Cantaloupe Rei com polpa alaranjada intensa, aroma marcante e excelente padronizacao para exposicao premium.',
        attrs: ['Marca Rei', 'Polpa Laranja', 'Aroma Intenso'],
        info: {
          Sazonalidade: 'Verão',
          Calibre: '2 a 5',
          Embalagem: 'Caixa 10Kg',
          Origem: 'Brasil'
        }
      },
      {
        id: 'melao-cantaloupe-mossoro',
        nome: 'Melão Cantaloupe Mossoró',
        categoria: 'melao',
        catLabel: 'Melão',
        origem: 'nacional',
        badge: 'Nacional',
        marca: 'Mossoró',
        img: 'https://frutamina.com.br/assets/svg/produtos/cantamoss.webp',
        variedade: 'Melão Cantaloupe Mossoró com polpa alaranjada intensa, aroma marcante e excelente padronizacao para exposicao premium.',
        attrs: ['Marca Mossoró', 'Polpa Laranja', 'Aroma Intenso'],
        info: {
          Sazonalidade: 'Verão',
          Calibre: '2 a 5',
          Embalagem: 'Caixa 6kg',
          Origem: 'Brasil'
        }
      },
      {
        id: 'melao-cantaloupe-samba',
        nome: 'Melão Cantaloupe Samba',
        categoria: 'melao',
        catLabel: 'Melão',
        origem: 'nacional',
        badge: 'Nacional',
        marca: 'Samba',
        img: 'https://frutamina.com.br/assets/svg/produtos/cantasamba.webp',
        variedade: 'Melão Cantaloupe Samba com polpa alaranjada intensa, aroma marcante e excelente padronizacao para exposicao premium.',
        attrs: ['Marca Samba', 'Polpa Laranja', 'Aroma Intenso'],
        info: {
          Sazonalidade: 'Verão',
          Calibre: '2 a 5',
          Embalagem: 'Caixa 6kg',
          Origem: 'Brasil'
        }
      },
      {
        id: 'melao-cantaloupe-firma',
        nome: 'Melão Cantaloupe Frutamina',
        categoria: 'melao',
        catLabel: 'Melão',
        origem: 'nacional',
        badge: 'Nacional',
        marca: 'Frutamina',
        img: 'https://frutamina.com.br/assets/svg/produtos/cantfirma.webp',
        variedade: 'Melão Cantaloupe Frutamina com polpa alaranjada intensa, aroma marcante e excelente padronizacao para exposicao premium.',
        attrs: ['Marca Frutamina', 'Polpa Laranja', 'Aroma Intenso'],
        info: {
          Sazonalidade: 'Verão',
          Calibre: '2 a 5',
          Embalagem: 'Caixa 6kg',
          Origem: 'Brasil'
        }
      },
      {
        id: 'caqui',
        nome: 'Caqui',
        categoria: 'caqui',
        catLabel: 'Caqui',
        origem: 'nacional',
        badge: 'Nacional',
        marca: 'Frutamina',
        img: 'https://frutamina.com.br/assets/svg/produtos/caqui.webp',
        variedade: 'Caqui com casca lisa e coloracao vibrante, com polpa macia quando no ponto ideal.',
        attrs: ['Marca Frutamina', 'Casca Lisa', 'Polpa Macia'],
        info: {
          Sazonalidade: 'Verão',
          Calibre: '2 a 5',
          Embalagem: 'Caixa 6kg com 6 bandejas',
          Origem: 'Brasil'
        }
      },
      {
        id: 'mamão-clam-shell Nortefrut',
        nome: 'Mamão Clam Shell',
        categoria: 'mamão',
        catLabel: 'Mamão',
        origem: 'nacional',
        badge: 'Nacional',
        marca: 'Nortefrut',
        img: 'https://frutamina.com.br/assets/svg/produtos/clam.webp',
        variedade: 'Mamão Clam Shell com linha selecionada para bandejas, com acabamento uniforme e otima apresentacao.',
        attrs: ['Marca Nortefrut', 'Linha Selecionada', 'Acabamento Uniforme'],
        info: {
          Sazonalidade: 'Verão',
          Calibre: '2 a 5',
          Embalagem: 'Caixa 13Kg',
          Origem: 'Brasil'
        }
      },
      {
        id: 'tomate-cocktail',
        nome: 'Tomate Cocktail',
        categoria: 'tomate',
        catLabel: 'Tomate',
        origem: 'nacional',
        badge: 'Nacional',
        marca: 'Frutamina',
        img: 'https://frutamina.com.br/assets/svg/produtos/cocktail.webp',
        variedade: 'Tomate Cocktail com fruto pequeno e uniforme, ideal para bandejas e mix gourmet.',
        attrs: ['Marca Frutamina', 'Calibre Pequeno', 'Linha Gourmet'],
        info: {
          Sazonalidade: 'Verão',
          Calibre: '2 a 5',
          Embalagem: 'Caixa 6kg com 6 bandejas',
          Origem: 'Brasil'
        }
      },
      {
        id: 'cupuacu',
        nome: 'Cupuaçu',
        categoria: 'cupuacu',
        catLabel: 'Cupuaçu',
        origem: 'nacional',
        badge: 'Nacional',
        marca: 'Frutamina',
        img: 'https://frutamina.com.br/assets/svg/produtos/cupuacu.webp',
        variedade: 'Cupuaçu com fruto aromatico de polpa acida e marcante para mercados especiais.',
        attrs: ['Marca Frutamina', 'Aroma Forte', 'Polpa Acida'],
        info: {
          Sazonalidade: 'Verão',
          Embalagem: 'Caixa 12Kg',
          Origem: 'Brasil'
        }
      },
      {
        id: 'manga-espada',
        nome: 'Manga Espada',
        categoria: 'manga',
        catLabel: 'Manga',
        origem: 'nacional',
        badge: 'Nacional',
        marca: 'Frutamina',
        img: 'https://frutamina.com.br/assets/svg/produtos/espada.webp',
        variedade: 'Manga Espada com aroma acentuado e sabor marcante, muito procurada em mercados tradicionais.',
        attrs: ['Marca Frutamina', 'Aroma Marcante', 'Sabor Intenso'],
        info: {
          Sazonalidade: 'Verão',
          Calibre: '2 a 5',
          Embalagem: 'Caixa 6kg com 6 bandejas',
          Origem: 'Brasil'
        }
      },
      {
        id: 'figo-roxo',
        nome: 'Figo Roxo',
        categoria: 'figo',
        catLabel: 'Figo',
        origem: 'nacional',
        badge: 'Nacional',
        marca: 'Frutamina',
        img: 'https://frutamina.com.br/assets/svg/produtos/figo.webp',
        variedade: 'Figo Roxo com fruto de casca fina e polpa adocicada, com alta atratividade de bancada.',
        attrs: ['Marca Frutamina', 'Casca Fina', 'Polpa Doce'],
        info: {
          Sazonalidade: 'Verão',
          Calibre: '2 a 5',
          Embalagem: 'Caixa 6kg com 6 bandejas',
          Origem: 'Brasil'
        }
      },
      {
        id: 'mamao-formosa-pomaris',
        nome: 'Mamão Formosa Pomaris',
        categoria: 'mamão',
        catLabel: 'Mamão',
        origem: 'nacional',
        badge: 'Nacional',
        marca: 'Pomaris',
        img: 'https://frutamina.com.br/assets/svg/produtos/formosa.webp',
        variedade: 'Mamão Formosa Pomaris com fruto de calibre maior, polpa alaranjada e excelente rendimento por peca.',
        attrs: ['Marca Pomaris', 'Calibre Maior', 'Polpa Alaranjada'],
        info: {
          Sazonalidade: 'Verão',
          Calibre: '2 a 5',
          Embalagem: 'Caixa 6kg com 6 bandejas',
          Origem: 'Brasil'
        }
      },
      {
        id: 'framboesa',
        nome: 'Framboesa',
        categoria: 'framboesa',
        catLabel: 'Framboesa',
        origem: 'nacional',
        badge: 'Nacional',
        marca: 'Frutamina',
        img: 'https://frutamina.com.br/assets/svg/produtos/framboesa.webp',
        variedade: 'Framboesa com fruta delicada, aroma fresco e otima composicao para linha premium.',
        attrs: ['Marca Frutamina', 'Fruta Delicada', 'Linha Premium'],
        info: {
          Sazonalidade: 'Verão',
          Embalagem: '10 Bandejas de 100g',
          Origem: 'Brasil'
        }
      },
      {
        id: 'melao-galia-frutamina',
        nome: 'Melão Galia Frutamina',
        categoria: 'melao',
        catLabel: 'Melão',
        origem: 'nacional',
        badge: 'Nacional',
        marca: 'Frutamina',
        img: 'https://frutamina.com.br/assets/svg/produtos/gafirma.webp',
        variedade: 'Melão Galia Frutamina com casca rendilhada e polpa aromatica, com equilibrio entre docura e frescor de loja.',
        attrs: ['Marca Frutamina', 'Casca Rendilhada', 'Docura Equilibrada'],
        info: {
          Sazonalidade: 'Verão',
          Calibre: '2 a 5',
          Embalagem: 'Caixa 6kg com 6 bandejas',
          Origem: 'Brasil'
        }
      },
      {
        id: 'melao-galia-cepi',
        nome: 'Melão Galia Cepi',
        categoria: 'melao',
        catLabel: 'Melão',
        origem: 'nacional',
        badge: 'Nacional',
        marca: 'Cepi',
        img: 'https://frutamina.com.br/assets/svg/produtos/galia-cepi.webp',
        variedade: 'Melão Galia Cepi com casca rendilhada e polpa aromatica, com equilibrio entre docura e frescor de loja.',
        attrs: ['Marca Cepi', 'Casca Rendilhada', 'Docura Equilibrada'],
        info: {
          Sazonalidade: 'Verão',
          Calibre: '2 a 5',
          Embalagem: 'Caixa 6kg com 6 bandejas',
          Origem: 'Brasil'
        }
      },
      {
        id: 'melao-galia-rei',
        nome: 'Melão Galia Rei',
        categoria: 'melao',
        catLabel: 'Melão',
        origem: 'nacional',
        badge: 'Nacional',
        marca: 'Rei',
        img: 'https://frutamina.com.br/assets/svg/produtos/galia-rei.webp',
        variedade: 'Melão Galia Rei com casca rendilhada e polpa aromatica, com equilibrio entre docura e frescor de loja.',
        attrs: ['Marca Rei', 'Casca Rendilhada', 'Docura Equilibrada'],
        info: {
          Sazonalidade: 'Verão',
          Calibre: '2 a 5',
          Embalagem: 'Caixa 6kg com 6 bandejas',
          Origem: 'Brasil'
        }
      },
      {
        id: 'melao-amarelo-gaia',
        nome: 'Melão Amarelo Gaia',
        categoria: 'melao',
        catLabel: 'Melão',
        origem: 'nacional',
        badge: 'Nacional',
        marca: 'Gaia',
        img: 'https://frutamina.com.br/assets/svg/produtos/gaia.webp',
        variedade: 'Melão Amarelo Gaia com casca amarelo-ouro, polpa clara firme e docura consistente para giro rapido de bancada.',
        attrs: ['Marca Gaia', 'Brix Alto', 'Polpa Firme'],
        info: {
          Sazonalidade: 'Verão',
          Calibre: '2 a 5',
          Embalagem: 'Caixa 6kg com 6 bandejas',
          Origem: 'Brasil'
        }
      },
      {
        id: 'melao-galia-mossoro',
        nome: 'Melão Galia Mossoró',
        categoria: 'melao',
        catLabel: 'Melão',
        origem: 'nacional',
        badge: 'Nacional',
        marca: 'Mossoró',
        img: 'https://frutamina.com.br/assets/svg/produtos/gamoss.webp',
        variedade: 'Melão Galia Mossoró com casca rendilhada e polpa aromatica, com equilibrio entre docura e frescor de loja.',
        attrs: ['Marca Mossoró', 'Casca Rendilhada', 'Docura Equilibrada'],
        info: {
          Sazonalidade: 'Verão',
          Calibre: '2 a 5',
          Embalagem: 'Caixa 6kg com 6 bandejas',
          Origem: 'Brasil'
        }
      },
      {
        id: 'melao-galia-samba',
        nome: 'Melão Galia Samba',
        categoria: 'melao',
        catLabel: 'Melão',
        origem: 'nacional',
        badge: 'Nacional',
        marca: 'Samba',
        img: 'https://frutamina.com.br/assets/svg/produtos/gasamba.webp',
        variedade: 'Melão Galia Samba com casca rendilhada e polpa aromatica, com equilibrio entre docura e frescor de loja.',
        attrs: ['Marca Samba', 'Casca Rendilhada', 'Docura Equilibrada'],
        info: {
          Sazonalidade: 'Verão',
          Calibre: '2 a 5',
          Embalagem: 'Caixa 6kg com 6 bandejas',
          Origem: 'Brasil'
        }
      },
      {
        id: 'goiaba',
        nome: 'Goiaba',
        categoria: 'goiaba',
        catLabel: 'Goiaba',
        origem: 'nacional',
        badge: 'Nacional',
        marca: 'Frutamina',
        img: 'https://frutamina.com.br/assets/svg/produtos/goiaba.webp',
        variedade: 'Goiaba com fruto de polpa aromatica e boa textura, com otima saida no varejo.',
        attrs: ['Marca Frutamina', 'Polpa Aromatica', 'Boa Textura'],
        info: {
          Sazonalidade: 'Verão',
          Embalagem: 'Caixa 6kg',
          Origem: 'Brasil'
        }
      },
      {
        id: 'granadilha',
        nome: 'Granadilha',
        categoria: 'granadilha',
        catLabel: 'Granadilha',
        origem: 'nacional',
        badge: 'Nacional',
        marca: 'Frutamina',
        img: 'https://frutamina.com.br/assets/svg/produtos/granadilha.webp',
        variedade: 'Granadilha com fruta exotica de casca firme e polpa perfumada para mix premium.',
        attrs: ['Marca Frutamina', 'Fruta Exotica', 'Casca Firme'],
        info: {
          Sazonalidade: 'Verão',
          Embalagem: 'Caixa 2Kg',
          Origem: 'Brasil'
        }
      },
      {
        id: 'graviola',
        nome: 'Graviola',
        categoria: 'graviola',
        catLabel: 'Graviola',
        origem: 'nacional',
        badge: 'Nacional',
        marca: 'Frutamina',
        img: 'https://frutamina.com.br/assets/svg/produtos/graviola.webp',
        variedade: 'Graviola com fruto de polpa branca e sabor marcante, ideal para consumo in natura e sucos.',
        attrs: ['Marca Frutamina', 'Polpa Branca', 'Sabor Marcante'],
        info: {
          Sazonalidade: 'Verão',
          Calibre: '2 a 5',
          Embalagem: 'Caixa 7Kg',
          Origem: 'Brasil'
        }
      },
      {
        id: 'jaca',
        nome: 'Jaca',
        categoria: 'jaca',
        catLabel: 'Jaca',
        origem: 'nacional',
        badge: 'Nacional',
        marca: 'Frutamina',
        img: 'https://frutamina.com.br/assets/svg/produtos/jaca.webp',
        variedade: 'Jaca com fruto de grande porte com gomos doces e aroma caracteristico.',
        attrs: ['Marca Frutamina', 'Grande Porte', 'Gomos Doces'],
        info: {
          Sazonalidade: 'Verão',
          Embalagem: 'Caixa 12kg',
          Origem: 'Brasil'
        }
      },
      {
        id: 'manga-keitt',
        nome: 'Manga Keitt',
        categoria: 'manga',
        catLabel: 'Manga',
        origem: 'nacional',
        badge: 'Nacional',
        marca: 'Frutamina',
        img: 'https://frutamina.com.br/assets/svg/produtos/keitt.webp',
        variedade: 'Manga Keitt com fruto de bom calibre, polpa suculenta e maturacao uniforme no ponto de venda.',
        attrs: ['Marca Frutamina', 'Calibre Uniforme', 'Polpa Suculenta'],
        info: {
          Sazonalidade: 'Verão',
          Calibre: '2 a 5',
          Embalagem: 'Caixa 6kg com 6 bandejas',
          Origem: 'Brasil'
        }
      },
      {
        id: 'laranja-kinkan',
        nome: 'Laranja Kinkan',
        categoria: 'laranja',
        catLabel: 'Laranja',
        origem: 'nacional',
        badge: 'Nacional',
        marca: 'Frutamina',
        img: 'https://frutamina.com.br/assets/svg/produtos/kinkan.webp',
        variedade: 'Laranja Kinkan com fruto de pequeno porte, casca fina comestivel e sabor citrico adocicado.',
        attrs: ['Marca Frutamina', 'Pequeno Porte', 'Casca Fina'],
        info: {
          Sazonalidade: 'Verão',
          Embalagem: '4 Bandejas de 500g',
          Origem: 'Brasil'
        }
      },
      {
        id: 'laranja-cutrale',
        nome: 'Laranja Cutrale',
        categoria: 'laranja',
        catLabel: 'Laranja',
        origem: 'nacional',
        badge: 'Nacional',
        marca: 'Cutrale',
        img: 'https://frutamina.com.br/assets/svg/produtos/laranja-cutrale.webp',
        variedade: 'Laranja Cutrale com laranja de boa suculencia e casca uniforme para consumo in natura e suco.',
        attrs: ['Marca Cutrale', 'Alta Suculencia', 'Casca Uniforme'],
        info: {
          Sazonalidade: 'Verão',
          Calibre: '2 a 5',
          Embalagem: 'Caixa 6kg com 6 bandejas',
          Origem: 'Brasil'
        }
      },
      {
        id: 'limao-taiti',
        nome: 'Limão Taiti',
        categoria: 'limao',
        catLabel: 'Limão',
        origem: 'nacional',
        badge: 'Nacional',
        marca: 'Frutamina',
        img: 'https://frutamina.com.br/assets/svg/produtos/limao.webp',
        variedade: 'Limão Taiti com fruto de casca verde brilhante, alto rendimento de suco e boa conservacao.',
        attrs: ['Marca Frutamina', 'Alto Rendimento', 'Casca Brilhante'],
        info: {
          Sazonalidade: 'Verão',
          Calibre: '2 a 5',
          Embalagem: 'Caixa 6kg com 6 bandejas',
          Origem: 'Brasil'
        }
      },
      {
        id: 'abacate-margarida',
        nome: 'Abacate Margarida',
        categoria: 'abacate',
        catLabel: 'Abacate',
        origem: 'nacional',
        badge: 'Nacional',
        marca: 'Frutamina',
        img: 'https://frutamina.com.br/assets/svg/produtos/margarida.webp',
        variedade: 'Abacate Margarida com fruto de bom rendimento, textura firme e maturacao previsivel na loja.',
        attrs: ['Marca Frutamina', 'Bom Rendimento', 'Textura Firme'],
        info: {
          Sazonalidade: 'Verão',
          Calibre: '2 a 5',
          Embalagem: 'Caixa 6kg com 6 bandejas',
          Origem: 'Brasil'
        }
      },
      {
        id: 'matisse-frutamina',
        nome: 'Melão Matisse Frutamina',
        categoria: 'melao',
        catLabel: 'Melão',
        origem: 'nacional',
        badge: 'Nacional',
        marca: 'Frutamina',
        img: 'https://frutamina.com.br/assets/svg/produtos/matfirma.webp',
        variedade: 'Melão Matisse Frutamina com mini melao de alta concentracao de acucar, visual diferenciado e otima aceitacao no varejo.',
        attrs: ['Marca Frutamina', 'Mini Melao', 'Docura Concentrada'],
        info: {
          Sazonalidade: 'Verão',
          Calibre: '2 a 5',
          Embalagem: 'Caixa 6kg com 6 bandejas',
          Origem: 'Brasil'
        }
      },
      {
        id: 'matisse-cepi',
        nome: 'Melão Matisse Cepi',
        categoria: 'melao',
        catLabel: 'Melão',
        origem: 'nacional',
        badge: 'Nacional',
        marca: 'Cepi',
        img: 'https://frutamina.com.br/assets/svg/produtos/matisse-cepi.webp',
        variedade: 'Melão Matisse Cepi com mini melao de alta concentracao de acucar, visual diferenciado e otima aceitacao no varejo.',
        attrs: ['Marca Cepi', 'Mini Melao', 'Docura Concentrada'],
        info: {
          Sazonalidade: 'Verão',
          Calibre: '2 a 5',
          Embalagem: 'Caixa 6kg com 6 bandejas',
          Origem: 'Brasil'
        }
      },
      {
        id: 'matisse-rei',
        nome: 'Melão Matisse Rei',
        categoria: 'melao',
        catLabel: 'Melão',
        origem: 'nacional',
        badge: 'Nacional',
        marca: 'Rei',
        img: 'https://frutamina.com.br/assets/svg/produtos/matisse-rei.webp',
        variedade: 'Melão Matisse Rei com mini melao de alta concentracao de acucar, visual diferenciado e otima aceitacao no varejo.',
        attrs: ['Marca Rei', 'Mini Melao', 'Docura Concentrada'],
        info: {
          Sazonalidade: 'Verão',
          Calibre: '2 a 5',
          Embalagem: 'Caixa 6kg com 6 bandejas',
          Origem: 'Brasil'
        }
      },
      {
        id: 'melao-matisse-bambino',
        nome: 'Melão Matisse Bambino',
        categoria: 'melao',
        catLabel: 'Melão',
        origem: 'nacional',
        badge: 'Nacional',
        marca: 'Bambino',
        img: 'https://frutamina.com.br/assets/svg/produtos/matisse.webp',
        variedade: 'Melão Matisse Bambino com mini melao de alta concentracao de acucar, visual diferenciado e otima aceitacao no varejo.',
        attrs: ['Marca Bambino', 'Mini Melao', 'Docura Concentrada'],
        info: {
          Sazonalidade: 'Verão',
          Calibre: '2 a 5',
          Embalagem: 'Caixa 6kg com 6 bandejas',
          Origem: 'Brasil'
        }
      },
      {
        id: 'mel',
        nome: 'Mel Rei',
        categoria: 'mel',
        catLabel: 'Mel',
        origem: 'nacional',
        badge: 'Nacional',
        marca: 'Rei',
        img: 'https://frutamina.com.br/assets/svg/produtos/mel.webp',
        variedade: 'Mel Rei com linha diferenciada com padrao visual forte para composicao de mix especial.',
        attrs: ['Marca Rei', 'Padrao Visual', 'Mix Especial'],
        info: {
          Sazonalidade: 'Verão',
          Calibre: '2 a 5',
          Embalagem: 'Caixa 6kg com 6 bandejas',
          Origem: 'Brasil'
        }
      },
      {
        id: 'melancia-cepi',
        nome: 'Melancia Cepi',
        categoria: 'melancia',
        catLabel: 'Melancia',
        origem: 'nacional',
        badge: 'Nacional',
        marca: 'Cepi',
        img: 'https://frutamina.com.br/assets/svg/produtos/melancia-cepi.webp',
        variedade: 'Melancia Cepi com casca resistente, polpa vermelha suculenta e docura regular para alto volume de venda.',
        attrs: ['Marca Cepi', 'Polpa Vermelha', 'Casca Resistente'],
        info: {
          Sazonalidade: 'Verão',
          Calibre: '2 a 5',
          Embalagem: 'Caixa 6kg com 6 bandejas',
          Origem: 'Brasil'
        }
      },
      {
        id: 'melancia-potiguar',
        nome: 'Melancia Potiguar',
        categoria: 'melancia',
        catLabel: 'Melancia',
        origem: 'nacional',
        badge: 'Nacional',
        marca: 'Potiguar',
        img: 'https://frutamina.com.br/assets/svg/produtos/melancia.webp',
        variedade: 'Melancia Potiguar com casca resistente, polpa vermelha suculenta e docura regular para alto volume de venda.',
        attrs: ['Marca Potiguar', 'Polpa Vermelha', 'Casca Resistente'],
        info: {
          Sazonalidade: 'Verão',
          Calibre: '2 a 5',
          Embalagem: 'Caixa 6kg com 6 bandejas',
          Origem: 'Brasil'
        }
      },
      {
        id: 'melancia-samba',
        nome: 'Melancia Samba',
        categoria: 'melancia',
        catLabel: 'Melancia',
        origem: 'nacional',
        badge: 'Nacional',
        marca: 'Samba',
        img: 'https://frutamina.com.br/assets/svg/produtos/melanciasb.webp',
        variedade: 'Melancia Samba com casca resistente, polpa vermelha suculenta e docura regular para alto volume de venda.',
        attrs: ['Marca Samba', 'Polpa Vermelha', 'Casca Resistente'],
        info: {
          Sazonalidade: 'Verão',
          Calibre: '2 a 5',
          Embalagem: 'Caixa 6kg com 6 bandejas',
          Origem: 'Brasil'
        }
      },
      {
        id: 'melancia-frutamina',
        nome: 'Melancia Frutamina',
        categoria: 'melancia',
        catLabel: 'Melancia',
        origem: 'nacional',
        badge: 'Nacional',
        marca: 'Frutamina',
        img: 'https://frutamina.com.br/assets/svg/produtos/melfirma.webp',
        variedade: 'Melancia Frutamina com casca resistente, polpa vermelha suculenta e docura regular para alto volume de venda.',
        attrs: ['Marca Frutamina', 'Polpa Vermelha', 'Casca Resistente'],
        info: {
          Sazonalidade: 'Verão',
          Calibre: '2 a 5',
          Embalagem: 'Caixa 6kg com 6 bandejas',
          Origem: 'Brasil'
        }
      },
      {
        id: 'melancia-mossoro',
        nome: 'Melancia Mossoró',
        categoria: 'melancia',
        catLabel: 'Melancia',
        origem: 'nacional',
        badge: 'Nacional',
        marca: 'Mossoró',
        img: 'https://frutamina.com.br/assets/svg/produtos/melmoss.webp',
        variedade: 'Melancia Mossoró com casca resistente, polpa vermelha suculenta e docura regular para alto volume de venda.',
        attrs: ['Marca Mossoró', 'Polpa Vermelha', 'Casca Resistente'],
        info: {
          Sazonalidade: 'Verão',
          Calibre: '2 a 5',
          Embalagem: 'Caixa 6kg com 6 bandejas',
          Origem: 'Brasil'
        }
      },
      {
        id: 'melancia-usoprades',
        nome: 'Melancia Usoprades',
        categoria: 'melancia',
        catLabel: 'Melancia',
        origem: 'nacional',
        badge: 'Nacional',
        marca: 'Usoprades',
        img: 'https://frutamina.com.br/assets/svg/produtos/meluso.webp',
        variedade: 'Melancia Usoprades com casca resistente, polpa vermelha suculenta e docura regular para alto volume de venda.',
        attrs: ['Marca Usoprades', 'Polpa Vermelha', 'Casca Resistente'],
        info: {
          Sazonalidade: 'Verão',
          Calibre: '2 a 5',
          Embalagem: 'Caixa 6kg com 6 bandejas',
          Origem: 'Brasil'
        }
      },
      {
        id: 'mirtilo',
        nome: 'Mirtilo',
        categoria: 'mirtilo',
        catLabel: 'Mirtilo',
        origem: 'nacional',
        badge: 'Nacional',
        marca: 'Frutamina',
        img: 'https://frutamina.com.br/assets/svg/produtos/mirtilo.webp',
        variedade: 'Mirtilo com fruto firme de sabor levemente adocicado e otima vida de prateleira.',
        attrs: ['Marca Frutamina', 'Fruto Firme', 'Vida de Prateleira'],
        info: {
          Sazonalidade: 'Verão',
          Calibre: '2 a 5',
          Embalagem: 'Caixa 6kg com 6 bandejas',
          Origem: 'Brasil'
        }
      },
      {
        id: 'morango',
        nome: 'Morango',
        categoria: 'morango',
        catLabel: 'Morango',
        origem: 'nacional',
        badge: 'Nacional',
        marca: 'Frutamina',
        img: 'https://frutamina.com.br/assets/svg/produtos/morango.webp',
        variedade: 'Morango com fruto vermelho intenso, aroma marcante e excelente aceitacao no varejo.',
        attrs: ['Marca Frutamina', 'Vermelho Intenso', 'Aroma Marcante'],
        info: {
          Sazonalidade: 'Verão',
          Calibre: '2 a 5',
          Embalagem: 'Caixa 6kg com 6 bandejas',
          Origem: 'Brasil'
        }
      },
      {
        id: 'morango-sul',
        nome: 'Morango Sul',
        categoria: 'morango',
        catLabel: 'Morango',
        origem: 'nacional',
        badge: 'Nacional',
        marca: 'Frutamina',
        img: 'https://frutamina.com.br/assets/svg/produtos/morango-sul.webp',
        variedade: 'Morango Sul com fruto vermelho intenso, aroma marcante e excelente aceitacao no varejo.',
        attrs: ['Marca Frutamina', 'Vermelho Intenso', 'Aroma Marcante'],
        info: {
          Sazonalidade: 'Verão',
          Calibre: '2 a 5',
          Embalagem: 'Caixa 6kg com 6 bandejas',
          Origem: 'Brasil'
        }
      },
      {
        id: 'nespera',
        nome: 'Nespera',
        categoria: 'nespera',
        catLabel: 'Nespera',
        origem: 'nacional',
        badge: 'Nacional',
        marca: 'Frutamina',
        img: 'https://frutamina.com.br/assets/svg/produtos/nespera.webp',
        variedade: 'Nespera com fruto de sabor suave e boa suculencia, muito aceito em nichos sazonais.',
        attrs: ['Marca Frutamina', 'Sabor Suave', 'Perfil Sazonal'],
        info: {
          Sazonalidade: 'Verão',
          Calibre: '2 a 5',
          Embalagem: 'Caixa 6kg com 6 bandejas',
          Origem: 'Brasil'
        }
      },
      {
        id: 'melao-orange-mossoro',
        nome: 'Melão Orange Mossoró',
        categoria: 'melao',
        catLabel: 'Melão',
        origem: 'nacional',
        badge: 'Nacional',
        marca: 'Mossoró',
        img: 'https://frutamina.com.br/assets/svg/produtos/orange.webp',
        variedade: 'Melão Orange Mossoró com polpa alaranjada, alta suculencia e perfil premium para mix de frutas especiais.',
        attrs: ['Marca Mossoró', 'Alta Suculencia', 'Exposicao Premium'],
        info: {
          Sazonalidade: 'Verão',
          Calibre: '2 a 5',
          Embalagem: 'Caixa 6kg com 6 bandejas',
          Origem: 'Brasil'
        }
      },
      {
        id: 'melao-orange',
        nome: 'Melão Orange',
        categoria: 'melao',
        catLabel: 'Melão',
        origem: 'nacional',
        badge: 'Nacional',
        marca: 'Frutamina',
        img: 'https://frutamina.com.br/assets/svg/produtos/orgfirma.webp',
        variedade: 'Melão Orange com polpa alaranjada, alta suculencia e perfil premium para mix de frutas especiais.',
        attrs: ['Marca Frutamina', 'Alta Suculencia', 'Exposicao Premium'],
        info: {
          Sazonalidade: 'Verão',
          Calibre: '2 a 5',
          Embalagem: 'Caixa 6kg com 6 bandejas',
          Origem: 'Brasil'
        }
      },
      {
        id: 'melao-orange-redinha-frutamina',
        nome: 'Melão Orange Rede Frutamina',
        categoria: 'melao',
        catLabel: 'Melão',
        origem: 'nacional',
        badge: 'Nacional',
        marca: 'Frutamina',
        img: 'https://frutamina.com.br/assets/svg/produtos/orgfruta-rede.webp',
        variedade: 'Melão Orange Rede Frutamina com polpa alaranjada, alta suculencia e perfil premium para mix de frutas especiais.',
        attrs: ['Marca Frutamina', 'Alta Suculencia', 'Exposicao Premium'],
        info: {
          Sazonalidade: 'Verão',
          Calibre: '2 a 5',
          Embalagem: 'Caixa 6kg com 6 bandejas',
          Origem: 'Brasil'
        }
      },
      {
        id: 'melao-orange-redinha-mossoró',
        nome: 'Melão Orange Rede Mossoró',
        categoria: 'melao',
        catLabel: 'Melão',
        origem: 'nacional',
        badge: 'Nacional',
        marca: 'Mossoró',
        img: 'https://frutamina.com.br/assets/svg/produtos/orgmoss-rede.webp',
        variedade: 'Melão Orange Rede Mossoró com polpa alaranjada, alta suculencia e perfil premium para mix de frutas especiais.',
        attrs: ['Marca Mossoró', 'Alta Suculencia', 'Exposicao Premium'],
        info: {
          Sazonalidade: 'Verão',
          Calibre: '2 a 5',
          Embalagem: 'Caixa 6kg com 6 bandejas',
          Origem: 'Brasil'
        }
      },
      {
        id: 'manga-palmer',
        nome: 'Manga Palmer',
        categoria: 'manga',
        catLabel: 'Manga',
        origem: 'nacional',
        badge: 'Nacional',
        marca: 'Frutamina',
        img: 'https://frutamina.com.br/assets/svg/produtos/palmer.webp',
        variedade: 'Manga Palmer com baixa fibra, polpa macia e docura elevada para publico premium.',
        attrs: ['Marca Frutamina', 'Baixa Fibra', 'Polpa Macia'],
        info: {
          Sazonalidade: 'Verão',
          Calibre: '2 a 5',
          Embalagem: 'Caixa 6kg com 6 bandejas',
          Origem: 'Brasil'
        }
      },
      {
        id: 'pimentao-amarelo',
        nome: 'Pimentão Amarelo Rei',
        categoria: 'pimentao',
        catLabel: 'Pimentão',
        origem: 'nacional',
        badge: 'Nacional',
        marca: 'Rei',
        img: 'https://frutamina.com.br/assets/svg/produtos/pama.webp',
        variedade: 'Pimentão Amarelo Rei com pimentao amarelo de cor intensa, parede firme e alto destaque visual.',
        attrs: ['Marca Rei', 'Cor Intensa', 'Parede Firme'],
        info: {
          Sazonalidade: 'Verão',
          Calibre: '2 a 5',
          Embalagem: 'Caixa 6kg com 6 bandejas',
          Origem: 'Brasil'
        }
      },
      {
        id: 'mamao-papaya',
        nome: 'Mamão Papaya',
        categoria: 'mamao',
        catLabel: 'Mamão',
        origem: 'nacional',
        badge: 'Nacional',
        marca: 'Frutamina',
        img: 'https://frutamina.com.br/assets/svg/produtos/papaya.webp',
        variedade: 'Mamão Papaya com calibre menor, docura equilibrada e excelente saida para consumo diario.',
        attrs: ['Marca Frutamina', 'Calibre Menor', 'Consumo Diario'],
        info: {
          Sazonalidade: 'Verão',
          Calibre: '2 a 5',
          Embalagem: 'Caixa 6kg com 6 bandejas',
          Origem: 'Brasil'
        }
      },
      {
        id: 'pera',
        nome: 'Pera',
        categoria: 'pera',
        catLabel: 'Pera',
        origem: 'nacional',
        badge: 'Nacional',
        marca: 'Frutamina',
        img: 'https://frutamina.com.br/assets/svg/produtos/pera.webp',
        variedade: 'Pera com casca fina, polpa firme e dulcor equilibrado para exposicao premium.',
        attrs: ['Marca Frutamina', 'Casca Fina', 'Polpa Firme'],
        info: {
          Sazonalidade: 'Verão',
          Calibre: '2 a 5',
          Embalagem: 'Caixa 6kg com 6 bandejas',
          Origem: 'Brasil'
        }
      },
      {
        id: 'physales',
        nome: 'Physales',
        categoria: 'physales',
        catLabel: 'Physales',
        origem: 'nacional',
        badge: 'Nacional',
        marca: 'Frutamina',
        img: 'https://frutamina.com.br/assets/svg/produtos/physales.webp',
        variedade: 'Physales com fruta pequena com perfil agridoce e alto valor agregado em bandeja.',
        attrs: ['Marca Frutamina', 'Perfil Agridoce', 'Alto Valor Agregado'],
        info: {
          Sazonalidade: 'Verão',
          Embalagem: '8 Bandejas de 100g',
          Origem: 'Brasil'
        }
      },
      {
        id: 'pitaya-amarela',
        nome: 'Pitaya Amarela',
        categoria: 'pitaya',
        catLabel: 'Pitaya',
        origem: 'nacional',
        badge: 'Nacional',
        marca: 'Frutamina',
        img: 'https://frutamina.com.br/assets/svg/produtos/pitaya-amarela.webp',
        variedade: 'Pitaya Amarela com casca amarela vibrante, polpa delicada e sabor adocicado suave.',
        attrs: ['Marca Frutamina', 'Casca Amarela', 'Polpa Delicada'],
        info: {
          Sazonalidade: 'Verão',
          Calibre: '2 a 5',
          Embalagem: 'Caixa 4Kg',
          Origem: 'Brasil'
        }
      },
      {
        id: 'pitaya-rosa',
        nome: 'Pitaya',
        categoria: 'pitaya',
        catLabel: 'Pitaya',
        origem: 'nacional',
        badge: 'Nacional',
        marca: 'Frutamina',
        img: 'https://frutamina.com.br/assets/svg/produtos/pitaya.webp',
        variedade: 'Pitaya com casca rosada de alto apelo visual, com polpa fresca e textura agradavel.',
        attrs: ['Marca Frutamina', 'Apelo Visual', 'Polpa Fresca'],
        info: {
          Sazonalidade: 'Verão',
          Calibre: '2 a 5',
          Embalagem: 'Caixa 6kg com 6 bandejas',
          Origem: 'Brasil'
        }
      },
      {
        id: 'pimentao-laranja',
        nome: 'Pimentão Laranja Rei',
        categoria: 'pimentao',
        catLabel: 'Pimentão',
        origem: 'nacional',
        badge: 'Nacional',
        marca: 'Rei',
        img: 'https://frutamina.com.br/assets/svg/produtos/plar.webp',
        variedade: 'Pimentão Laranja Rei com pimentao laranja com brilho uniforme e otima apresentacao em gondola.',
        attrs: ['Marca Rei', 'Brilho Uniforme', 'Boa Crocancia'],
        info: {
          Sazonalidade: 'Verão',
          Calibre: '2 a 5',
          Embalagem: 'Caixa 6kg com 6 bandejas',
          Origem: 'Brasil'
        }
      },
      {
        id: 'pimentao-vermelho',
        nome: 'Pimentão Vermelho Rei',
        categoria: 'pimentao',
        catLabel: 'Pimentão',
        origem: 'nacional',
        badge: 'Nacional',
        marca: 'Rei',
        img: 'https://frutamina.com.br/assets/svg/produtos/pvermelho.webp',
        variedade: 'Pimentão Vermelho Rei com pimentao vermelho de maturacao plena, sabor adocicado e excelente acabamento.',
        attrs: ['Marca Rei', 'Maturacao Plena', 'Sabor Adocicado'],
        info: {
          Sazonalidade: 'Verão',
          Calibre: '2 a 5',
          Embalagem: 'Caixa 6kg com 6 bandejas',
          Origem: 'Brasil'
        }
      },
      {
        id: 'tomate-rama',
        nome: 'Tomate Rama',
        categoria: 'tomate',
        catLabel: 'Tomate',
        origem: 'nacional',
        badge: 'Nacional',
        marca: 'Frutamina',
        img: 'https://frutamina.com.br/assets/svg/produtos/rama.webp',
        variedade: 'Tomate Rama com tomate em cacho com visual premium e boa conservacao pos-colheita.',
        attrs: ['Marca Frutamina', 'Tomate em Cacho', 'Visual Premium'],
        info: {
          Sazonalidade: 'Verão',
          Calibre: '2 a 5',
          Embalagem: 'Caixa 6kg com 6 bandejas',
          Origem: 'Brasil'
        }
      },
      {
        id: 'roma',
        nome: 'Romã',
        categoria: 'roma',
        catLabel: 'Romã',
        origem: 'nacional',
        badge: 'Nacional',
        marca: 'Frutamina',
        img: 'https://frutamina.com.br/assets/svg/produtos/roma.webp',
        variedade: 'Romã com fruto de casca firme e sementes suculentas, otimo para linha premium.',
        attrs: ['Marca Frutamina', 'Casca Firme', 'Sementes Suculentas'],
        info: {
          Sazonalidade: 'Verão',
          Calibre: '10',
          Embalagem: 'Caixa 4Kg',
          Origem: 'Brasil'
        }
      },
      {
        id: 'tomate-romanita',
        nome: 'Tomate Romanita',
        categoria: 'tomate',
        catLabel: 'Tomate',
        origem: 'nacional',
        badge: 'Nacional',
        marca: 'Frutamina',
        img: 'https://frutamina.com.br/assets/svg/produtos/romanita.webp',
        variedade: 'Tomate Romanita com formato alongado, firmeza elevada e otima performance para culinaria.',
        attrs: ['Marca Frutamina', 'Formato Alongado', 'Firmeza Alta'],
        info: {
          Sazonalidade: 'Verão',
          Calibre: '2 a 5',
          Embalagem: 'Caixa 6kg com 6 bandejas',
          Origem: 'Brasil'
        }
      },
      {
        id: 'melao-pele-de-sapo-rei',
        nome: 'Melão Pele de Sapo Rei',
        categoria: 'melao',
        catLabel: 'Melão',
        origem: 'nacional',
        badge: 'Nacional',
        marca: 'Rei',
        img: 'https://frutamina.com.br/assets/svg/produtos/sapo-rei.webp',
        variedade: 'Melão Pele de Sapo Rei com casca rajada, polpa firme e longa vida pos-colheita para operacao logistica segura.',
        attrs: ['Marca Rei', 'Casca Rajada', 'Vida de Prateleira'],
        info: {
          Sazonalidade: 'Verão',
          Calibre: '2 a 5',
          Embalagem: 'Caixa 6kg com 6 bandejas',
          Origem: 'Brasil'
        }
      },
      {
        id: 'melancia-magali',
        nome: 'Melancia Magali',
        categoria: 'melancia',
        catLabel: 'Melancia',
        origem: 'nacional',
        badge: 'Nacional',
        marca: 'Rei',
        img: 'https://frutamina.com.br/assets/svg/produtos/sem-semente.webp',
        variedade: 'Melancia Magali com calibre compacto, excelente rendimento por unidade e otima saida no varejo.',
        attrs: ['Marca Rei', 'Calibre Compacto', 'Alto Giro'],
        info: {
          Sazonalidade: 'Verão',
          Calibre: '2 a 5',
          Embalagem: 'Caixa 6kg com 6 bandejas',
          Origem: 'Brasil'
        }
      },
      {
        id: 'manga-shelly',
        nome: 'Manga Shelly',
        categoria: 'manga',
        catLabel: 'Manga',
        origem: 'nacional',
        badge: 'Nacional',
        marca: 'Frutamina',
        img: 'https://frutamina.com.br/assets/svg/produtos/shelly.webp',
        variedade: 'Manga Shelly com textura fina e docura equilibrada, com excelente apresentacao na gondola.',
        attrs: ['Marca Frutamina', 'Textura Fina', 'Apelo Visual'],
        info: {
          Sazonalidade: 'Verão',
          Calibre: '2 a 5',
          Embalagem: 'Caixa 6kg com 6 bandejas',
          Origem: 'Brasil'
        }
      },
      {
        id: 'melao-pele-de-sapo-cepi',
        nome: 'Melão Pele de Sapo Cepi',
        categoria: 'melao',
        catLabel: 'Melão',
        origem: 'nacional',
        badge: 'Nacional',
        marca: 'Cepi',
        img: 'https://frutamina.com.br/assets/svg/produtos/spcepi.webp',
        variedade: 'Melão Pele de Sapo Cepi com casca rajada, polpa firme e longa vida pos-colheita para operacao logistica segura.',
        attrs: ['Marca Cepi', 'Casca Rajada', 'Vida de Prateleira'],
        info: {
          Sazonalidade: 'Verão',
          Calibre: '2 a 5',
          Embalagem: 'Caixa 6kg com 6 bandejas',
          Origem: 'Brasil'
        }
      },
      {
        id: 'melao-pele-de-sapo-frutamina',
        nome: 'Melão Pele de Sapo Frutamina',
        categoria: 'melao',
        catLabel: 'Melão',
        origem: 'nacional',
        badge: 'Nacional',
        marca: 'Frutamina',
        img: 'https://frutamina.com.br/assets/svg/produtos/spfirma.webp',
        variedade: 'Melão Pele de Sapo Frutamina com casca rajada, polpa firme e longa vida pos-colheita para operacao logistica segura.',
        attrs: ['Marca Frutamina', 'Casca Rajada', 'Vida de Prateleira'],
        info: {
          Sazonalidade: 'Verão',
          Calibre: '2 a 5',
          Embalagem: 'Caixa 6kg com 6 bandejas',
          Origem: 'Brasil'
        }
      },
      {
        id: 'melao-pele-de-sapo-lola',
        nome: 'Melão Pele de Sapo Lola',
        categoria: 'melao',
        catLabel: 'Melão',
        origem: 'nacional',
        badge: 'Nacional',
        marca: 'Lola',
        img: 'https://frutamina.com.br/assets/svg/produtos/splola.webp',
        variedade: 'Melão Pele de Sapo Lola com casca rajada, polpa firme e longa vida pos-colheita para operacao logistica segura.',
        attrs: ['Marca Lola', 'Casca Rajada', 'Vida de Prateleira'],
        info: {
          Sazonalidade: 'Verão',
          Calibre: '2 a 5',
          Embalagem: 'Caixa 6kg com 6 bandejas',
          Origem: 'Brasil'
        }
      },
      {
        id: 'melao-pele-de-sapo-melicia',
        nome: 'Melão Pele de Sapo Melicia',
        categoria: 'melao',
        catLabel: 'Melão',
        origem: 'nacional',
        badge: 'Nacional',
        marca: 'Melicia',
        img: 'https://frutamina.com.br/assets/svg/produtos/spmelicia.webp',
        variedade: 'Melão Pele de Sapo Melicia com casca rajada, polpa firme e longa vida pos-colheita para operacao logistica segura.',
        attrs: ['Marca Melicia', 'Casca Rajada', 'Vida de Prateleira'],
        info: {
          Sazonalidade: 'Verão',
          Calibre: '2 a 5',
          Embalagem: 'Caixa 6kg com 6 bandejas',
          Origem: 'Brasil'
        }
      },
      {
        id: 'melao-pele-de-sapo-samba',
        nome: 'Melão Pele de Sapo Samba',
        categoria: 'melao',
        catLabel: 'Melão',
        origem: 'nacional',
        badge: 'Nacional',
        marca: 'Samba',
        img: 'https://frutamina.com.br/assets/svg/produtos/spsamba.webp',
        variedade: 'Melão Pele de Sapo Samba com casca rajada, polpa firme e longa vida pos-colheita para operacao logistica segura.',
        attrs: ['Marca Samba', 'Casca Rajada', 'Vida de Prateleira'],
        info: {
          Sazonalidade: 'Verão',
          Calibre: '2 a 5',
          Embalagem: 'Caixa 6kg com 6 bandejas',
          Origem: 'Brasil'
        }
      },
      {
        id: 'manga-tommy',
        nome: 'Manga Tommy',
        categoria: 'manga',
        catLabel: 'Manga',
        origem: 'nacional',
        badge: 'Nacional',
        marca: 'Frutamina',
        img: 'https://frutamina.com.br/assets/svg/produtos/tommy.webp',
        variedade: 'Manga Tommy com casca firme, alta resistencia logistica e bom tempo de prateleira.',
        attrs: ['Marca Frutamina', 'Casca Resistente', 'Boa Logistica'],
        info: {
          Sazonalidade: 'Verão',
          Calibre: '2 a 5',
          Embalagem: 'Caixa 6kg com 6 bandejas',
          Origem: 'Brasil'
        }
      },
      {
        id: 'umbu',
        nome: 'Umbu',
        categoria: 'umbu',
        catLabel: 'Umbu',
        origem: 'nacional',
        badge: 'Nacional',
        marca: 'Frutamina',
        img: 'https://frutamina.com.br/assets/svg/produtos/umbu.webp',
        variedade: 'Umbu com fruto regional de sabor acido refrescante, ideal para consumo sazonal.',
        attrs: ['Marca Frutamina', 'Fruto Regional', 'Sabor Refrescante'],
        info: {
          Sazonalidade: 'Verão',
          Embalagem: '4 Bandejas de 450g',
          Origem: 'Brasil'
        }
      },
      {
        id: 'uva-thompson',
        nome: 'Uva Thompson',
        categoria: 'uva',
        catLabel: 'Uva',
        origem: 'nacional',
        badge: 'Nacional',
        marca: 'Frutamina',
        img: 'https://frutamina.com.br/assets/svg/produtos/uvas.webp',
        variedade: 'Uva Thompson com bagos uniformes, boa crocancia e docura equilibrada para venda em bandeja.',
        attrs: ['Marca Frutamina', 'Bagos Uniformes', 'Boa Crocancia'],
        info: {
          Sazonalidade: 'Verão',
          Calibre: '2 a 5',
          Embalagem: 'Caixa 6kg com 6 bandejas',
          Origem: 'Brasil'
        }
      },
    ];

    let catAtiva = 'todos';
    let marcaAtiva = 'todas';
    let viewAtiva = 'grid';
    let busca = '';

    const inputBusca = document.getElementById('inputBusca');
    const filtroLista = document.getElementById('filtroLista');
    const filtroMarcaLista = document.getElementById('filtroMarcaLista');
    const filtroListaWrap = document.getElementById('filtroListaWrap');
    const filtroMarcaWrap = document.getElementById('filtroMarcaWrap');
    const toggleCategorias = document.getElementById('toggleCategorias');
    const toggleMarcas = document.getElementById('toggleMarcas');
    const sortSelect = document.getElementById('sortSelect');
    const grid = document.getElementById('produtosGrid');
    const qtdCount = document.getElementById('qtd-count');
    const btnGrid = document.getElementById('btn-grid');
    const btnLista = document.getElementById('btn-lista');
    const btnLimparFiltros = document.getElementById('btnLimparFiltros');
    const modalOverlay = document.getElementById('modalOverlay');
    const html = document.documentElement;
    const menuMobile = document.getElementById('menuMobile');
    const overlayMobile = document.getElementById('overlayMobile');
    const THEME_STORAGE_KEY = 'theme';
    const CATEGORIAS_ABERTAS_KEY = 'produtos_categorias_abertas';
    const MARCAS_ABERTAS_KEY = 'produtos_marcas_abertas';
    let categoriasAbertas = false;
    let marcasAbertas = false;

    function badgeClass(badge) {
      const b = badge.toLowerCase();
      if (b === 'importado') return 'importado';
      if (b === 'destaque') return 'destaque';
      return 'nacional';
    }

    function syncBodyOverflow() {
      const opened = menuMobile.classList.contains('active') || modalOverlay.classList.contains('active');
      document.body.style.overflow = opened ? 'hidden' : '';
    }

    function getSavedPanelState(key, defaultValue = false) {
      try {
        const value = localStorage.getItem(key);
        if (value === 'true') return true;
        if (value === 'false') return false;
      } catch (error) {
        // localStorage pode estar indisponível em alguns contextos
      }
      return defaultValue;
    }

    function setPanelState({ aberta, wrapEl, toggleEl, storageKey, closedLabel, openLabel, persistir = true }) {
      if (!wrapEl || !toggleEl) return;
      wrapEl.classList.toggle('collapsed', !aberta);
      toggleEl.setAttribute('aria-expanded', String(aberta));
      toggleEl.setAttribute('aria-label', aberta ? openLabel : closedLabel);

      if (!persistir) return;
      try {
        localStorage.setItem(storageKey, String(aberta));
      } catch (error) {
        // localStorage pode estar indisponível em alguns contextos
      }
    }

    function setCategoriasAbertas(abertas, persistir = true) {
      categoriasAbertas = abertas;
      setPanelState({
        aberta: abertas,
        wrapEl: filtroListaWrap,
        toggleEl: toggleCategorias,
        storageKey: CATEGORIAS_ABERTAS_KEY,
        closedLabel: 'Abrir categorias',
        openLabel: 'Fechar categorias',
        persistir
      });
    }

    function setMarcasAbertas(abertas, persistir = true) {
      marcasAbertas = abertas;
      setPanelState({
        aberta: abertas,
        wrapEl: filtroMarcaWrap,
        toggleEl: toggleMarcas,
        storageKey: MARCAS_ABERTAS_KEY,
        closedLabel: 'Abrir marcas',
        openLabel: 'Fechar marcas',
        persistir
      });
    }

    function slugify(texto) {
      const base = typeof texto === 'string' ? texto : '';
      const slug = base
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
      return slug;
    }

    function getMarcaProduto(produto) {
      const marcaInformada = typeof produto.marca === 'string' ? produto.marca.trim() : '';
      return marcaInformada;
    }

    const produtosNormalizados = produtos.map((produto) => {
      const marcaLabel = getMarcaProduto(produto);
      return {
        ...produto,
        marcaLabel,
        marcaSlug: slugify(marcaLabel)
      };
    });

    const categoriasDisponiveis = Array.from(
      produtosNormalizados.reduce((map, produto) => {
        if (!map.has(produto.categoria)) {
          map.set(produto.categoria, {
            slug: produto.categoria,
            label: produto.catLabel || produto.categoria
          });
        }
        return map;
      }, new Map()).values()
    );

    const marcasDisponiveis = Array.from(
      produtosNormalizados.reduce((map, produto) => {
        if (!produto.marcaSlug) return map;
        if (!map.has(produto.marcaSlug)) {
          map.set(produto.marcaSlug, {
            slug: produto.marcaSlug,
            label: produto.marcaLabel
          });
        }
        return map;
      }, new Map()).values()
    ).sort((a, b) => a.label.localeCompare(b.label, 'pt-BR'));

    function buildFiltroButton({ ativo, tipo, slug, label, quantidade }) {
      return `
        <button class="filtro-btn${ativo ? ' active' : ''}" data-${tipo}="${slug}" type="button">
          ${label} <span class="contagem">${quantidade}</span>
        </button>
      `;
    }

    function getContagemCategorias() {
      const contagem = {};

      produtosNormalizados.forEach((produto) => {
        if (marcaAtiva !== 'todas' && produto.marcaSlug !== marcaAtiva) return;

        const texto = `${produto.nome} ${produto.variedade} ${produto.catLabel} ${produto.marcaLabel}`.toLowerCase();
        const passouBusca = busca ? texto.includes(busca) : true;
        if (!passouBusca) return;

        contagem[produto.categoria] = (contagem[produto.categoria] || 0) + 1;
      });

      return contagem;
    }

    function renderFiltrosCategoria() {
      const contagem = getContagemCategorias();
      const total = Object.values(contagem).reduce((acc, valor) => acc + valor, 0);

      const htmlCategorias = categoriasDisponiveis.map((categoria) => {
        const qtd = contagem[categoria.slug] || 0;
        return buildFiltroButton({
          ativo: catAtiva === categoria.slug,
          tipo: 'cat',
          slug: categoria.slug,
          label: categoria.label,
          quantidade: qtd
        });
      }).join('');

      filtroLista.innerHTML = `
        ${buildFiltroButton({
          ativo: catAtiva === 'todos',
          tipo: 'cat',
          slug: 'todos',
          label: 'Todos',
          quantidade: total
        })}
        ${htmlCategorias}
      `;
    }

    function getContagemMarcas() {
      const contagem = {};

      produtosNormalizados.forEach((produto) => {
        if (catAtiva !== 'todos' && produto.categoria !== catAtiva) return;

        const texto = `${produto.nome} ${produto.variedade} ${produto.catLabel} ${produto.marcaLabel}`.toLowerCase();
        const passouBusca = busca ? texto.includes(busca) : true;
        if (!passouBusca) return;
        if (!produto.marcaSlug) return;

        contagem[produto.marcaSlug] = (contagem[produto.marcaSlug] || 0) + 1;
      });

      return contagem;
    }

    function renderFiltrosMarca() {
      const contagem = getContagemMarcas();
      const total = produtosNormalizados.filter((produto) => {
        if (catAtiva !== 'todos' && produto.categoria !== catAtiva) return false;
        const texto = `${produto.nome} ${produto.variedade} ${produto.catLabel} ${produto.marcaLabel}`.toLowerCase();
        return busca ? texto.includes(busca) : true;
      }).length;

      const htmlMarcas = marcasDisponiveis.map((marca) => {
        const qtd = contagem[marca.slug] || 0;
        return buildFiltroButton({
          ativo: marcaAtiva === marca.slug,
          tipo: 'marca',
          slug: marca.slug,
          label: marca.label,
          quantidade: qtd
        });
      }).join('');

      filtroMarcaLista.innerHTML = `
        ${buildFiltroButton({
          ativo: marcaAtiva === 'todas',
          tipo: 'marca',
          slug: 'todas',
          label: 'Todas',
          quantidade: total
        })}
        ${htmlMarcas}
      `;
    }

    function getProdutosFiltrados() {
      const resultado = produtosNormalizados.filter((p) => {
        const okCategoria = catAtiva === 'todos' ? true : p.categoria === catAtiva;
        const okMarca = marcaAtiva === 'todas' ? true : p.marcaSlug === marcaAtiva;
        const texto = `${p.nome} ${p.variedade} ${p.catLabel} ${p.marcaLabel}`.toLowerCase();
        const okBusca = busca ? texto.includes(busca) : true;
        return okCategoria && okMarca && okBusca;
      });

      const ordem = sortSelect.value;
      if (ordem === 'az') {
        resultado.sort((a, b) => a.nome.localeCompare(b.nome, 'pt-BR'));
      } else if (ordem === 'za') {
        resultado.sort((a, b) => b.nome.localeCompare(a.nome, 'pt-BR'));
      } else if (ordem === 'cat') {
        resultado.sort((a, b) => a.categoria.localeCompare(b.categoria, 'pt-BR'));
      }

      return resultado;
    }

    function renderGrid() {
      busca = inputBusca.value.trim().toLowerCase();
      renderFiltrosCategoria();
      renderFiltrosMarca();
      const lista = getProdutosFiltrados();
      qtdCount.textContent = String(lista.length);

      grid.classList.toggle('lista', viewAtiva === 'lista');

      if (!lista.length) {
        grid.innerHTML = `
          <div class="empty-state">
            <i class="bi bi-search"></i>
            <h3>Nenhum produto encontrado</h3>
            <p>Não localizamos itens com os filtros atuais. Tente ajustar busca, categoria ou origem.</p>
            <button class="btn-reset" type="button" data-action="reset-filtros">
              <i class="bi bi-arrow-counterclockwise"></i> Limpar filtros
            </button>
          </div>
        `;
        return;
      }

      grid.innerHTML = lista.map((p) => `
        <article class="produto-card" data-produto-id="${p.id}" tabindex="0" role="button" aria-label="Ver detalhes de ${p.nome}">
          <div class="card-img-wrap">
            <span class="card-badge ${badgeClass(p.badge)}">${p.badge}</span>
            <img src="${p.img}" alt="${p.nome}" loading="lazy">
          </div>
          <div class="card-body">
            <p class="card-categoria">${p.catLabel}</p>
            <h3 class="card-title">${p.nome}</h3>
            <p class="card-variedade">${p.variedade}</p>
            <div class="card-attrs">
              ${p.attrs.map((a) => `<span class="card-attr">${a}</span>`).join('')}
            </div>
            <div class="card-footer-row">
              <span class="card-origem"><i class="bi bi-geo-alt"></i>${p.origem === 'nacional' ? 'Nacional' : 'Importado'}</span>
              <span class="btn-detalhes">Ver detalhes <i class="bi bi-arrow-right"></i></span>
            </div>
          </div>
        </article>
      `).join('');
    }

    function filtrarCategoria(cat) {
      catAtiva = cat;
      renderGrid();
    }

    function filtrarMarca(marca) {
      marcaAtiva = marca;
      renderGrid();
    }

    function setView(v) {
      viewAtiva = v;
      btnGrid.classList.toggle('active', v === 'grid');
      btnLista.classList.toggle('active', v === 'lista');
      renderGrid();
    }

    function resetFiltros() {
      catAtiva = 'todos';
      marcaAtiva = 'todas';
      busca = '';
      inputBusca.value = '';
      renderGrid();
    }

    function abrirModal(id) {
      const p = produtos.find((item) => item.id === id);
      if (!p) return;

      document.getElementById('modalImg').src = p.img;
      document.getElementById('modalImg').alt = p.nome;

      const badge = document.getElementById('modalBadge');
      badge.textContent = p.badge;
      badge.className = `modal-badge ${badgeClass(p.badge)}`;

      document.getElementById('modalCat').textContent = p.catLabel;
      document.getElementById('modalNome').textContent = p.nome;
      document.getElementById('modalDesc').textContent = p.variedade;

      document.getElementById('modalAttrs').innerHTML = p.attrs
        .map((attr) => `<span class="modal-attr">${attr}</span>`)
        .join('');

      document.getElementById('modalInfo').innerHTML = Object.entries(p.info)
        .map(([k, v]) => `
          <div class="modal-info-item">
            <span>${k}</span>
            <strong>${v}</strong>
          </div>
        `).join('');

      const texto = encodeURIComponent(`Olá! Tenho interesse em ${p.nome}`);
      document.getElementById('modalWhatsapp').href = `https://wa.me/5511999589953?text=${texto}`;

      modalOverlay.classList.add('active');
      syncBodyOverflow();
    }

    function fecharModal(e) {
      if (!e) {
        modalOverlay.classList.remove('active');
        syncBodyOverflow();
        return;
      }

      const clicouOverlay = e.target === modalOverlay;
      const clicouClose = e.target.closest('.modal-close');
      if (clicouOverlay || clicouClose) {
        modalOverlay.classList.remove('active');
        syncBodyOverflow();
      }
    }

    function onHeaderScroll() {
      document.getElementById('header').classList.toggle('scrolled', window.scrollY > 60);
    }

    function abrirMenu() {
      menuMobile.classList.add('active');
      overlayMobile.classList.add('active');
      syncBodyOverflow();
    }

    function fecharMenu() {
      menuMobile.classList.remove('active');
      overlayMobile.classList.remove('active');
      syncBodyOverflow();
    }

    function updateThemeIcon() {
      const icon = document.querySelector('#toggleTheme i');
      const dark = html.getAttribute('data-theme') === 'dark';
      icon.classList.toggle('bi-sun', !dark);
      icon.classList.toggle('bi-moon', dark);
    }

    function getSavedTheme() {
      try {
        const theme = localStorage.getItem(THEME_STORAGE_KEY);
        return theme === 'dark' || theme === 'light' ? theme : null;
      } catch (error) {
        return null;
      }
    }

    function saveTheme(theme) {
      try {
        localStorage.setItem(THEME_STORAGE_KEY, theme);
      } catch (error) {
        // localStorage pode estar indisponível em alguns contextos
      }
    }

    document.getElementById('menuHamburger').addEventListener('click', abrirMenu);
    document.getElementById('btnFecharMobile').addEventListener('click', fecharMenu);
    overlayMobile.addEventListener('click', fecharMenu);
    document.querySelectorAll('#menuMobile .menu-link').forEach((link) => {
      link.addEventListener('click', fecharMenu);
    });

    window.addEventListener('scroll', onHeaderScroll);
    onHeaderScroll();

    const savedTheme = getSavedTheme();
    if (savedTheme) {
      html.setAttribute('data-theme', savedTheme);
    }

    document.getElementById('toggleTheme').addEventListener('click', () => {
      const atual = html.getAttribute('data-theme');
      const nextTheme = atual === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', nextTheme);
      saveTheme(nextTheme);
      updateThemeIcon();
    });
    updateThemeIcon();
    setCategoriasAbertas(getSavedPanelState(CATEGORIAS_ABERTAS_KEY, false), false);
    setMarcasAbertas(getSavedPanelState(MARCAS_ABERTAS_KEY, false), false);

    sortSelect.addEventListener('change', renderGrid);
    toggleCategorias.addEventListener('click', () => {
      setCategoriasAbertas(!categoriasAbertas);
    });
    toggleMarcas.addEventListener('click', () => {
      setMarcasAbertas(!marcasAbertas);
    });
    filtroLista.addEventListener('click', (event) => {
      const botao = event.target.closest('.filtro-btn');
      if (!botao) return;
      filtrarCategoria(botao.dataset.cat);
    });
    filtroMarcaLista.addEventListener('click', (event) => {
      const botao = event.target.closest('.filtro-btn');
      if (!botao) return;
      filtrarMarca(botao.dataset.marca);
    });
    btnGrid.addEventListener('click', () => setView('grid'));
    btnLista.addEventListener('click', () => setView('lista'));
    btnLimparFiltros?.addEventListener('click', resetFiltros);

    let debounceBusca;
    inputBusca.addEventListener('input', () => {
      clearTimeout(debounceBusca);
      debounceBusca = setTimeout(() => {
        renderGrid();
      }, 220);
    });

    grid.addEventListener('click', (event) => {
      const resetButton = event.target.closest('[data-action="reset-filtros"]');
      if (resetButton) {
        resetFiltros();
        return;
      }

      const card = event.target.closest('.produto-card[data-produto-id]');
      if (card) {
        abrirModal(card.dataset.produtoId);
      }
    });

    grid.addEventListener('keydown', (event) => {
      if (event.key !== 'Enter' && event.key !== ' ' && event.key !== 'Spacebar') return;
      const card = event.target.closest('.produto-card[data-produto-id]');
      if (!card) return;
      event.preventDefault();
      abrirModal(card.dataset.produtoId);
    });

    modalOverlay.addEventListener('click', fecharModal);
    document.querySelector('.modal-close')?.addEventListener('click', fecharModal);

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') fecharModal();
    });

    renderGrid();
  
