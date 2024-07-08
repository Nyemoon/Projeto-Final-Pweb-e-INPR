let anosInformacoesDiv;

function submitForm() {
  var nome = document.getElementById("nome").value;
  var mensagem = "Olá " + nome + ", digite o ano em que deseja viajar no tempo:";

document.getElementById("mensagem").innerText = mensagem;
  document.getElementById("mensagemDiv").style.display = "block";
}
const anos= [
  {
    ano:1995,
imagem:"https://acervo.oglobo.globo.com/incoming/10673363-cf8-e26/imagemHorizontalFotogaleria/foto.jpg",
    imagem2:"https://cdn2.uvnimg.com/dims4/default/97767bf/2147483647/thumbnail/1240x698/quality/75/?url=https%3A%2F%2Fcdn1.uvnimg.com%2Fc8%2F1d%2Fbdf576a544af8193c25acf6f6fa3%2FGettyImages-52022792.jpg",

imagem3 :"https://media.idownloadblog.com/wp-content/uploads/2016/04/Windows-95-computer.jpg",

imagem4:"https://s3.amazonaws.com/s3.timetoast.com/public/uploads/photo/20468726/image/medium-36b96eeb35b49222011b2d2e3de07dde.png",

imagem5:"https://c.files.bbci.co.uk/6651/production/_116139162_e4798df5-2170-4477-b6ab-cae17e0cc8fc.jpg",

imagem6:"https://static.todamateria.com.br/upload/om/co/omc-organizacao-mundial-do-comercio-og.jpg",

imagem7:"https://miro.medium.com/v2/resize:fit:2560/1*b8mJ-9YJdXbxhrvBYuPr9w.jpeg",


    
    informacoes:["Em 4 de novembro, o primeiro-ministro israelense Yitzhak Rabin foi assassinado em Tel Aviv durante um comício pela paz. O assassinato foi realizado por um extremista judeu, que discordava dos esforços de Rabin para negociar a paz com os palestinos.","Em 19 de abril, um atentado terrorista devastador ocorreu em Oklahoma City, EUA, quando um caminhão-bomba explodiu perto do Edifício Federal Alfred P. Murrah. O ataque resultou na morte de 168 pessoas e mais de 600 feridos.","A Microsoft lançou o sistema operacional Windows 95 em 24 de agosto, revolucionando a computação pessoal com sua interface gráfica de usuário e funcionalidades aprimoradas.","A Conferência sobre Mudança Climática da ONU foi realizada em Berlim em 28 de março, reunindo líderes mundiais para discutir medidas para combater as mudanças climáticas e suas consequências globais.","Após anos de conflito, a Guerra na Bósnia chegou ao fim com a assinatura dos Acordos de Dayton em dezembro, trazendo uma trégua à região assolada pela guerra civil.","A Organização Mundial do Comércio (OMC) foi fundada em 1º de janeiro, com o objetivo de promover o comércio internacional e facilitar negociações comerciais entre os países membros.","Um grave incêndio ocorreu no metrô de Baku, Azerbaijão, em 28 de outubro, resultando na morte de 289 pessoas e deixando muitas outras feridas."]
  },
  {
    ano:1996,
    imagem:"https://s2-memoriaglobo.glbimg.com/H7jKcqD0wud42LD-ujEGwV5WWFc=/400x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_ee6202d7f3f346a7a5d7affb807d8893/internal_photos/bs/2021/A/u/oyfvzDTBe44DrmhJ6XVg/96-12773-01.jpg",
    imagem2:"https://cdn.britannica.com/06/198706-050-8F86AA6B/Boris-Yeltsin-1994.jpg",
    imagem3:"https://escolaeducacao.com.br/wp-content/uploads/2020/06/dolly-ian-wilmut-1024x663.jpg",
    imagem4:"https://www.hrw.org/sites/default/files/styles/image_gallery/public/media/images/photographs/1997_sierraleone_rufrebels.jpg?itok=05mHnNrK",
    imagem5:"https://ichef.bbci.co.uk/news/1024/branded_portuguese/ccb7/live/9df5c680-d77c-11ed-bfdd-6ddc779db06e.jpg",
    
    imagem6:"https://www.thescottishsun.co.uk/wp-content/uploads/sites/2/2021/03/NINTCHDBPICT000000017788-3.jpg?strip=all&quality=100&w=1200&h=800&crop=1",

    imagem7:"https://winworldpc.com/res/img/screenshots/f3fb26a792e17dd8ee69b5dccb2bb996ca41897556a9626579ed4d7be95c5ec8.png",
    
    informacoes:["Durante os Jogos Olímpicos de Verão de 1996, realizados em Atlanta, EUA, um atentado terrorista ocorreu em 27 de julho. Uma bomba explodiu no Parque Centennial, matando 2 pessoas e ferindo mais de 100.","Boris Yeltsin foi reeleito para um segundo mandato como presidente da Rússia em 3 de julho, em uma eleição marcada por agitação política e econômica no país.","Em fevereiro, cientistas escoceses anunciaram o nascimento de Dolly, a primeira ovelha clonada a partir de uma célula adulta. O evento gerou debates éticos e científicos sobre a clonagem.","O conflito em Serra Leoa escalou em 1996, com ataques brutais e massacres cometidos por várias facções rebeldes. O país enfrentou anos de guerra civil e instabilidade política.","Um marco histórico foi alcançado na Irlanda do Norte em 10 de abril, quando o Acordo de Paz em Belfast foi assinado, encerrando décadas de conflito sectário e violência na região.","Um trágico massacre ocorreu na escola primária de Dunblane, Escócia, em 13 de março, quando um atirador entrou na escola e abriu fogo, matando 16 crianças e um professor antes de cometer suicídio.","A Microsoft lançou o navegador de internet Internet Explorer 3.0 em 13 de agosto, introduzindo recursos avançados de navegação na internet e competindo com outros navegadores populares da época."]
  },
  {
    ano:1997,
    imagem:"https://acervo.oglobo.globo.com/incoming/16724605-aae-422/materia/20150710-113024.jpg",

    imagem2:"https://cdn2.uvnimg.com/29/8a/2552898843df89a7dcace11f5f6d/lead.jpg",
    imagem3:"https://legal.un.org/avl/images/ha/kpccc/02-l.jpg",
    imagem4:"https://www.hkwalkers.net/wp-content/uploads/2020/06/hong-kong.jpg",
    imagem5:"https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iTCEKyCwoxdc/v1/-1x-1.jpg",
    imagem6:"https://www.infoescola.com/wp-content/uploads/2007/07/protocolo-kyoto_46930291.jpg",
    imagem7:"https://cdn1.booknode.com/book_cover/5142/full/harry-potter-tome-1-harry-potter-a-lecole-des-sorciers-5141653.jpg",
    
    informacoes:["A Crise Financeira Asiática teve início em meados de 1997, quando vários países do Sudeste Asiático enfrentaram desvalorização cambial, falências bancárias e recessão econômica.","Em 31 de agosto, o mundo foi abalado pela trágica morte da Princesa Diana de Gales em um acidente de carro em Paris. Sua morte gerou um enorme luto global e levantou questões sobre a segurança dos membros da realeza.","Líderes de todo o mundo se reuniram em Kyoto, Japão, em dezembro, para negociar o Protocolo de Kyoto, um tratado internacional destinado a reduzir as emissões de gases de efeito estufa e combater as mudanças climáticas.","Em 1º de julho, Hong Kong foi devolvido à China após mais de um século de domínio britânico. A transferência de soberania marcou o fim de uma era colonial e o início de uma nova era para Hong Kong.","Tony Blair, líder do Partido Trabalhista, tornou-se primeiro-ministro do Reino Unido em 2 de maio, encerrando 18 anos de governo conservador sob o comando de Margaret Thatcher e John Major.","O Protocolo de Quioto foi assinado em 11 de dezembro por muitos países industrializados, comprometendo-se a reduzir suas emissões de gases de efeito estufa e abordar as preocupações ambientais globais.","O mundo foi apresentado ao jovem bruxo Harry Potter em 26 de junho, quando o primeiro livro da série, 'Harry Potter e a Pedra Filosofal', foi lançado pela autora britânica J.K. Rowling."]
  },
  {
    ano:1998,
imagem:"https://p2.trrsf.com/image/fget/cf/1200/1200/middle/images.terra.com/2013/01/15/monicalewinsky1getty.jpg",

    imagem2:"https://static.themoscowtimes.com/image/1920/4d/075aa708613441c0b96d90922484dbfa.jpg",
    imagem3:"https://acervo.oglobo.globo.com/incoming/22954195-e5e-b34/imagemHorizontalFotogaleria/Atentado-terrorista.jpg",
    imagem4:"https://insider.dn.pt/files/2018/09/Google-funda%C3%A7%C3%A3o.jpg",
    imagem5:"https://i2-prod.mirror.co.uk/incoming/article7473893.ece/ALTERNATES/s615/Omagh-bombing-August-1998.jpg",
    imagem6:"https://www.lajornadanet.com/wp-content/uploads/2019/10/4-4-3.jpg",
    imagem7:"https://www.vaticannews.va/content/dam/vaticannews/agenzie/images/afp/2018/04/09/01/files-britain-nireland-history-1523235815462.jpg/_jcr_content/renditions/cq5dam.thumbnail.cropped.750.422.jpeg",
    
    informacoes:["O escândalo de Monica Lewinsky abalou a presidência de Bill Clinton em 1998, quando surgiram alegações de um caso extraconjugal entre o presidente dos EUA e a estagiária da Casa Branca, Monica Lewinsky.","A crise econômica atingiu a Rússia em agosto de 1998, levando o país à beira do colapso financeiro. A desvalorização do rublo e o default da dívida resultaram em instabilidade econômica e social.","Em 7 de agosto, ataques a bomba nas embaixadas dos EUA no Quênia e Tanzânia mataram mais de 200 pessoas e feriram milhares. Os ataques foram atribuídos à Al-Qaeda.","A gigante da tecnologia Google foi fundada em setembro de 1998 por Larry Page e Sergey Brin, inicialmente como um projeto de pesquisa na Universidade de Stanford. A empresa cresceu rapidamente para se tornar uma das maiores do mundo.","O massacre em Omagh, Irlanda do Norte, ocorreu em 15 de agosto, quando um carro-bomba explodiu no centro da cidade, matando 29 pessoas e ferindo mais de 200. O ataque foi realizado pelo Real Exército Irlandês.","O furacão Mitch atingiu a América Central em outubro, causando devastação generalizada e matando milhares de pessoas. O Honduras foi um dos países mais afetados pelo desastre natural.","Após décadas de conflito, um histórico tratado de paz foi assinado entre a Irlanda e o Reino Unido em 10 de abril, encerrando uma longa e sangrenta disputa política e religiosa."]
  },
  {
    ano:1999,
imagem:"https://media.gettyimages.com/id/3016165/pt/foto/littleton-co-columbine-high-school-shooters-eric-harris-and-dylan-klebold-appear-in-this-video.jpg?s=612x612&w=gi&k=20&c=FlSvOYaDZmWVJ9yGZ3eTjw4572bwdfJHQDhX_LbM5ds=",

    imagem2:"https://thumbs.dreamstime.com/b/uma-e-dois-moedas-do-euro-de-europa-36255354.jpg",
    imagem3:"https://cdn.britannica.com/52/153852-050-40CE7B67/Zubin-Potok-Kosovo-attempt-tear-gas-vehicle-Oct-20-2011.jpg",
    imagem4:"https://ichef.bbci.co.uk/news/640/cpsprodpb/A638/production/_128625524_gettyimages-543923974.jpg",
    imagem5:"https://www.globaltimes.cn/Portals/0/attachment/2019/2019-12-03/39f539a3-1f85-4f68-ad18-f9e3d0b7fdfc.jpg",
    imagem6:"https://www.researchgate.net/publication/360822638/figure/fig4/AS:11431281208075584@1701372444951/How-one-can-imagine-a-halo-of-the-complex-numbers-described-by-the-hypercomplex.jpg",
    
    imagem7:"https://www.recantododragao.com.br/wp-content/uploads/2014/04/examebug.jpg",
    
    informacoes:["O massacre na Escola Secundária de Columbine chocou os EUA em 20 de abril, quando dois estudantes armados abriram fogo na escola em Littleton, Colorado, matando 12 colegas e um professor, antes de cometerem suicídio.","O Euro foi lançado oficialmente em 1º de janeiro como a moeda única de 11 países europeus, marcando um marco importante na integração econômica e monetária da Europa.","A Guerra no Kosovo eclodiu em março, quando a OTAN lançou uma campanha militar contra as forças sérvias em resposta à repressão de minorias étnicas albanesas. O conflito terminou em junho com a retirada das forças sérvias e a ocupação da província pelo KFOR.","Dois devastadores terremotos atingiram a Turquia em agosto e novembro, causando extensa destruição e milhares de mortes. Os terremotos destacaram a necessidade de preparação e resposta a desastres naturais no país.","Macau foi devolvido à China em 20 de dezembro, encerrando quase 450 anos de domínio português sobre o território. A transferência de soberania marcou o fim de uma era colonial e o início de uma nova era para Macau.","Um eclipse solar total foi visível em partes da Europa em 11 de agosto, proporcionando um espetáculo astronômico raro para milhões de pessoas em toda a região.","A preocupação global com possíveis falhas de computador devido ao bug do milênio, conhecido como Y2K, aumentou à medida que o mundo se preparava para a virada do milênio em 31 de dezembro de 1999."]
  },
  {
    ano:2000,
    imagem:"https://investidorsardinha.r7.com/wp-content/uploads/2021/09/bolha-da-internet-quais-foram-as-causas-e-consequencias.jpeg",

    imagem2:"https://www.uspresidentialhistory.com/wp-content/uploads/2016/04/George-W.-Bush-4.11.16.jpg",
    imagem3:"https://www.naval.com.br/blog/wp-content/uploads/2021/03/Tonelero-sendo-reflutuado.jpg",
    imagem4:"https://www.lavanguardia.com/files/og_thumbnail/uploads/2019/09/12/5fa52e926c930.jpeg",
    imagem5:"https://imagens.mdig.com.br/espaco/15_anos_estacao_espacial_internacional_01.jpg",
    imagem6:"https://conteudo.imguol.com.br/c/noticias/2013/05/29/o-presidente-de-gana-discursa-nas-nacoes-unidas-em-setembro-de-2000-por-ocasiao-da-abertura-da-cupula-do-milenio-1369858112513_615x470.jpg",
    imagem7:"https://grist.org/wp-content/uploads/2016/02/shasta-dam-california-hydroelectricity.jpg?quality=75&strip=all",
    
    informacoes:["O estouro da bolha da internet ocorreu em março, quando as ações das empresas de tecnologia despencaram, marcando o fim de uma era de exuberância irracional nos mercados de ações.","As eleições presidenciais nos EUA de 2000 foram marcadas por controvérsias, culminando em uma disputa acirrada entre George W. Bush e Al Gore. A batalha legal prolongada foi decidida pela Suprema Corte dos EUA, que concedeu a vitória a Bush.","Em 12 de outubro, o navio de guerra USS Cole foi alvo de um atentado suicida enquanto estava ancorado no porto de Aden, no Iêmen. O ataque matou 17 marinheiros e feriu dezenas de outros.","Atentados bombistas em Moscou em setembro mataram 165 pessoas e feriram mais de 1.000. Os ataques foram atribuídos a rebeldes chechenos que buscavam independência da Rússia.","Em 2 de novembro, a Estação Espacial Internacional recebeu sua primeira tripulação permanente, marcando o início de uma presença humana contínua no espaço.","A Cúpula do Milênio das Nações Unidas foi realizada em setembro para abordar questões globais urgentes, incluindo pobreza, conflitos armados, direitos humanos e proteção ambiental.","A Califórnia enfrentou uma grave crise energética em 2000, marcada por apagões generalizados e aumento dos preços da eletricidade. O estado implementou medidas de racionamento de energia para lidar com a crise."]
  },
  {
    ano:2001,
    imagem:"https://conteudo.imguol.com.br/c/noticias/af/2016/10/04/11set2001---atentado-terrorista-de-11-de-setembro-de-2001-nos-eua-a-torre-sul-do-world-trade-center-e-atingida-por-aviao-enquando-a-torre-norte-exala-fumaca-negra-durante-ataque-terrorista-em-nova-york-1475595510753_900x506.jpg",

    imagem2:"https://static.mundoeducacao.uol.com.br/mundoeducacao/2021/10/guerra-afeganistao.jpg",
    imagem3:"https://blog.provident.com.mx/wp-content/uploads/2022/08/caso-enron-uno-de-los-peores-fraudes-de-la-historia-p-990x500.jpg",
    imagem4:"https://s3.amazonaws.com/s3.timetoast.com/public/uploads/photos/7363312/wikipedia-logo-en_riesig.png",
    imagem5:"https://cavokvideos.com/wp-content/uploads/2017/02/Airbus_A300B4-605R_American_Airlines_JP5950383.jpg",
    imagem6:"https://saude.abril.com.br/wp-content/uploads/2021/09/loan-O-oRPeEJ9IA-unsplash.jpg?quality=85&strip=info&w=1280&h=720&crop=1",
    imagem7:"https://segredosdomundo.r7.com/wp-content/uploads/2021/10/simbolo-do-euro-origem-e-significado-da-moeda-europeia-scaled.jpg",
    
    informacoes:["Os Ataques de 11 de setembro chocaram o mundo quando terroristas da Al-Qaeda sequestraram aviões comerciais e os lançaram contra o World Trade Center em Nova York e o Pentágono em Washington, DC. Os ataques mataram quase 3.000 pessoas e desencadearam a Guerra ao Terror liderada pelos EUA.","A Guerra no Afeganistão começou em outubro, quando os EUA e seus aliados invadiram o Afeganistão em resposta aos ataques de 11 de setembro. O objetivo era derrubar o regime talibã e desmantelar as bases da Al-Qaeda no país.","A empresa de energia Enron declarou falência em dezembro de 2001, marcando um dos maiores escândalos corporativos da história dos EUA. A empresa fraudou balanços financeiros e enganou investidores, resultando em perdas bilionárias.","A Wikipedia foi lançada em janeiro como uma enciclopédia online gratuita e de código aberto, permitindo que usuários de todo o mundo colaborassem para criar e editar artigos em uma ampla variedade de tópicos.","Em 12 de novembro, um avião da American Airlines caiu no Queens, Nova York, pouco depois de decolar do Aeroporto JFK. O acidente matou todos os 260 passageiros e tripulantes a bordo, além de 5 pessoas em solo.","A Europa foi atingida por um surto da doença da vaca louca em 2001, levando à destruição em massa de rebanhos e preocupações sobre a segurança alimentar em toda a região.","O euro foi adotado como moeda oficial em muitos países europeus em 1º de janeiro, marcando um marco significativo na integração econômica da Europa."]
  },
  {
    ano:2002,
    imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsS3d2mZUyK3Uiw8YlGZIzxuz_xfIEQ7esXTU6Ir6ZqQ&s",
    imagem2:"https://wallpaperaccess.com/full/1104529.jpg",
    imagem3:"https://marcha.org.ar/wp-content/uploads/2019/06/golpe-de-estado-venezuela-630x403.jpg",
    
    imagem4:"https://i0.wp.com/www.eurodicas.com.br/wp-content/uploads/2017/11/uniao-europeia-1.jpg?fit=1360%2C907&ssl=1",
    imagem5:"https://culturainglesamg.com.br/wp-content/uploads/2020/05/6-750x460.png",
imagem6:"https://static.mundoeducacao.uol.com.br/mundoeducacao/2021/09/osama-bin-laden.jpg",
    imagem7:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8EWGaSMDaPRBcjliu-XMG5dtUpFSZJiKxPg&s",
    
      informacoes:["Em 12 de outubro, um atentado terrorista em Bali, Indonésia, matou 202 pessoas e feriu mais de 200. O ataque foi perpetrado por militantes islâmicos e visou principalmente turistas estrangeiros.","A Enron Corporation, uma das maiores empresas de energia dos EUA, entrou com pedido de falência em janeiro, marcando o início de um escândalo financeiro e corporativo que abalou Wall Street e os mercados financeiros globais.","A Venezuela enfrentou uma tentativa de golpe de estado em abril, quando o presidente Hugo Chávez foi temporariamente deposto por militares e líderes da oposição. Chávez retornou ao poder dois dias depois, com o apoio popular.","O Tratado de Nice foi assinado em fevereiro pelos países membros da União Europeia, reformando as instituições da UE para preparar o bloco para a adesão de novos membros e fortalecer a cooperação entre os estados membros existentes.","A Eurotúnel, que conecta o Reino Unido à França por meio de um túnel submarino, foi fechada temporariamente em setembro devido a um incêndio a bordo de um trem de carga. O incidente destacou preocupações sobre a segurança do túnel.","A Arábia Saudita foi abalada por uma série de atentados terroristas em 12 de maio, quando militantes islâmicos atacaram várias instalações ocidentais no país, incluindo complexos residenciais e empresas de petróleo.","Em 11 de março, uma série de ataques a bomba em trens em Madri, Espanha, matou 191 pessoas e feriu mais de 2.000. Os ataques foram atribuídos a militantes islâmicos."]
  },
  {
    ano:2003,
    imagem:"https://vermelho.org.br/wp-content/uploads/2019/10/the_war_in_iraq_baghdad39647.jpg",
    imagem2:"https://s2-oglobo.glbimg.com/LEnbPbawfcslETc3H4xc6YbVcJ4=/0x0:1086x652/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2023/3/D/49gAqZQwOt2aT7AFBRrQ/2016-883722218-nasa1.jpg-20160127.jpg",
imagem3:"https://s3.static.brasilescola.uol.com.br/be/2021/02/sars-1.jpg",
    imagem4:"https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2022/02/GettyImages-1238813360.jpg?w=1220&h=674&crop=1",
    imagem5:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW_0SNjqhnI4AnbYgGL2LzVp878OxBDQEkpA&s",
  imagem6:"https://segredosdomundo.r7.com/wp-content/uploads/2020/06/myspace-historia-e-evolucao-da-rede-social-sucesso-dos-anos-2000.jpg",
imagem7:"https://services.meteored.com/img/article/ciclone-devastador-esta-prestes-a-atingir-mianmar-e-bangladesh-1683929544642_512.jpg",
    
    informacoes:["Os EUA e seus aliados invadiram o Iraque em março, lançando a Guerra do Iraque para derrubar o regime de Saddam Hussein e eliminar supostas armas de destruição em massa. A guerra desencadeou uma ocupação prolongada e instabilidade no país.","O Ônibus Espacial Columbia se desintegrou durante a reentrada na atmosfera em 1º de fevereiro, matando todos os sete astronautas a bordo. A tragédia foi atribuída a danos na proteção térmica do ônibus espacial.","A SARS (Síndrome Respiratória Aguda Grave) emergiu em 2003, desencadeando uma pandemia global que matou centenas de pessoas e infectou milhares em todo o mundo. O surto foi contido com medidas de saúde pública e pesquisa médica.","A Rússia enfrentou uma crise de reféns em setembro, quando rebeldes chechenos tomaram uma escola em Beslan, Ossétia do Norte. O cerco resultou na morte de mais de 330 pessoas, a maioria delas crianças.","Em maio, a ONU aprovou a Resolução 1483, endossando a ocupação liderada pelos EUA no Iraque e estabelecendo uma estrutura legal para a administração pós-Saddam do país.","A rede social MySpace foi lançada em 2003, permitindo que os usuários se conectassem, compartilhassem conteúdo e construíssem perfis personalizados. A plataforma se tornou uma das redes sociais mais populares da década de 2000.","O ciclone tropical devastador que atingiu Bangladesh em novembro matou mais de 10.000 pessoas e deixou milhões desabrigadas. O país enfrentou enormes desafios de reconstrução e ajuda humanitária."]
  },
  {
    ano:2004,
    imagem:"https://s2-oglobo.glbimg.com/0D53cWpQpzM8c0Gt3LH4UmA1AmM=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2024/n/1/BNyEaVQCOPVGaaBO1JBA/aceh2.png",
imagem2:"https://static.mundoeducacao.uol.com.br/mundoeducacao/2022/03/bandeiras-paises-ue.jpg",
    imagem3:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdMyb5Kl2bC8YsAVhb0Oxde_pdHHXQLx0fAQ&s",
imagem4:"https://s3.static.brasilescola.uol.com.br/be/2021/06/ex-presidente-dos-eua-george-w-bush-falando-a-microfones-no-pulpito-presidencial.jpg",
imagem5:"https://ogimg.infoglobo.com.br/in/16591244-738-595/FT1086A/760/LGBT.jpg",
imagem6:"https://static.nationalgeographicbrasil.com/files/styles/image_3200/public/01_insight_landing_mars_lander_digital.jpg?w=1600&h=900",
imagem7:"https://www1.folha.uol.com.br/folha/mundo/images/20060215-abuso.jpg",
    
    informacoes:["Em 26 de dezembro, um tsunami catastrófico atingiu o Oceano Índico, resultando em uma das piores tragédias naturais da história. O tsunami foi desencadeado por um terremoto submarino de magnitude 9,1 e matou mais de 230.000 pessoas em 14 países.","A União Europeia expandiu-se em maio para incluir 10 novos países membros, a maioria dos quais eram nações do antigo bloco soviético. A expansão fortaleceu a integração europeia e promoveu a estabilidade política e econômica na região.","O ataque terrorista em Madri em 11 de março, quando bombas explodiram em quatro trens de passageiros, matou 191 pessoas e feriu mais de 2.000. Os ataques foram atribuídos a militantes islâmicos vinculados à Al-Qaeda.","George W. Bush foi reeleito presidente dos EUA em novembro, derrotando o candidato democrata John Kerry em uma eleição acirrada e contenciosa.","Em 26 de fevereiro, o Parlamento espanhol aprovou uma lei que legalizou o casamento entre pessoas do mesmo sexo na Espanha, tornando o país o terceiro do mundo a permitir o casamento igualitário em nível nacional.","A sonda espacial Spirit pousou em Marte em janeiro, marcando o início da missão da NASA para explorar a superfície do Planeta Vermelho e buscar evidências de vida passada em Marte.","O Escândalo de Abu Ghraib veio à tona em abril, quando fotos de abusos e torturas de prisioneiros iraquianos pelos militares dos EUA foram divulgadas. O escândalo provocou indignação global e levantou questões sobre a conduta das forças armadas dos EUA no Iraque."]
  },
  {
    ano:2005,
    imagem:"https://imagenes.elpais.com/resizer/1nqDhoHl_AgosPsUkGY6ZqpUV60=/414x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/JQLVRTBTLMVLVRAGCXXTBD6K2Y.jpg",

    imagem2:"https://www.denverpost.com/wp-content/uploads/2017/08/082515_hurricane_katrina_11.jpg?w=1280",
    imagem3:"https://aventurasnahistoria.uol.com.br/media/_versions/papajoaopauloii_widelg.png",
    imagem4:"https://images2.fanpop.com/image/photos/11300000/Trial-Photos-June-2005-June-1-2005-michael-jackson-11318692-809-819.jpg",
    imagem5:"https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2022/07/GettyImages-1241793846.jpg",
    imagem6:"https://segredosdomundo.r7.com/wp-content/uploads/2020/06/youtube-origem-evolucao-ascensao-e-sucesso-da-plataforma-de-video.jpg",
    imagem7:"https://static.timesofisrael.com/www/uploads/2019/01/AP_19010305965972-e1548841509938.jpg",
      informacoes:["Em 7 de julho, uma série de ataques terroristas em Londres, conhecidos como 7/7, chocou o mundo quando bombas explodiram em três trens do metrô e em um ônibus. Os ataques mataram 52 pessoas e feriram centenas.","O furacão Katrina atingiu a costa do Golfo dos EUA em agosto, causando devastação generalizada em Nova Orleans e outras áreas. As inundações resultantes e a resposta inadequada do governo federal levaram a uma crise humanitária e política.","O Papa João Paulo II morreu em abril, após 26 anos de papado. Seu pontificado foi marcado por viagens históricas, escritos influentes e um papel crucial no colapso do comunismo na Europa Oriental.","O Caso Michael Jackson atraiu atenção mundial em junho, quando o cantor foi absolvido das acusações de abuso sexual de menores. O julgamento foi um dos mais notórios da história recente.","O acordo de cessar-fogo entre o governo do Sri Lanka e os rebeldes separatistas tâmeis foi rompido em 2 de janeiro, reiniciando os combates em uma guerra civil que havia durado décadas.","O lançamento do YouTube em fevereiro marcou o início de uma nova era na internet, permitindo que os usuários compartilhassem vídeos de forma fácil e rápida. A plataforma se tornou uma das mais populares do mundo.","Em junho de 2013, o Irã realizou eleições presidenciais que atraíram atenção internacional. Hassan Rouhani foi eleito como o sétimo presidente do país. Sua vitória foi vista como um sinal de mudança e esperança para reformas políticas e sociais, especialmente após o controverso governo de seu antecessor, Mahmoud Ahmadinejad."]
  },
  {
    ano:2006,
    imagem2:"https://img.odcdn.com.br/wp-content/uploads/2021/07/O-onibus-espacial-Discovery-preparado-para-o-seu-lancamento-na-missao-STS-114.jpg",

    imagem:"https://cached.imagescaler.hbpl.co.uk/resize/scaleWidth/888/cached.offlinehbpl.hbpl.co.uk/news/ORP/twitterhq.RF.prw.main.R9-17-2020.jpg",
    imagem3:"https://imgcp.aacdn.jp/img-a/600/auto/global-aaj-front/article/2016/02/56b8298ddcb7b_56b8292b26f5a_2133172095.jpg",
    imagem4:"https://www.thoughtco.com/thmb/-tzEqkMJkLr5vtogG1LRJJScRTY=/3000x2681/filters:fill(auto,1)/PresSaddam2002Getty-56a043293df78cafdaa0b9a5.jpg",
    imagem5:"https://s2.glbimg.com/yypInfrtrTvaZo2tbbmXixq2UFs=/1200x630/s.glbimg.com/jo/g1/f/original/2014/07/10/000_ts-nic6347467.jpg",
    imagem6:"https://saudeonline.pt/wp-content/uploads/2022/10/gripe-aviaria.jpg",
    imagem7:"https://7alyon.com/wp-content/uploads/2020/11/Borat.jpg",
    
    informacoes:["O lançamento do Twitter em março marcou o início de uma revolução nas mídias sociais, permitindo que os usuários compartilhassem pensamentos e atualizações em tempo real em mensagens de 280 caracteres ou menos.","A explosão do ônibus espacial Discovery em julho, durante o lançamento da missão STS-121, levantou preocupações sobre a segurança dos voos espaciais e interrompeu temporariamente o programa do ônibus espacial.","O mundo foi apresentado ao Facebook em fevereiro, quando a plataforma de rede social foi lançada para estudantes universitários. O Facebook rapidamente se tornou uma das maiores redes sociais do mundo, conectando bilhões de pessoas em todo o mundo.","O líder iraquiano Saddam Hussein foi executado em dezembro, após ser condenado por crimes contra a humanidade. Sua execução marcou o fim de um capítulo sombrio na história do Iraque, mas também levantou questões sobre justiça e reconciliação no país.","Aprovada pela ONU em março, a Resolução 1674 destacou a responsabilidade de proteger os civis em conflitos armados e estabeleceu diretrizes para a prevenção de genocídio, crimes de guerra, limpeza étnica e crimes contra a humanidade.","A Organização Mundial da Saúde declarou uma pandemia de gripe aviária em outubro, em meio a preocupações sobre a disseminação do vírus H5N1 de aves para humanos. Embora o vírus tenha sido mortal para as aves, sua transmissão eficiente entre humanos permaneceu limitada.","O controverso filme 'Borat', estrelado por Sacha Baron Cohen, foi lançado em novembro, gerando controvérsia e elogios por sua sátira social e política. O filme acompanha as aventuras de um repórter cazaque fictício enquanto viaja pelos EUA."]
  },
  {
    ano:2007,
    imagem:"https://qph.cf2.quoracdn.net/main-qimg-fe176afd5c2b8e46020a4913bc8d6fac-lq",
    imagem2:"https://ichef.bbci.co.uk/news/1024/branded_portuguese/CB22/production/_103320025_006205601-1.jpg",
    imagem3:"https://blog.portalpos.com.br/app/uploads/2021/08/ataques-ciberneticos.jpg",
    imagem4:"https://lh4.ggpht.com/_8Ol7lf_QQnc/RwxobAvDypI/AAAAAAAABL8/rdvZEl7kOY8/0000290457-016.jpg",
    imagem5:"https://g1.globo.com/Noticias/Mundo/foto/0,,12053378,00.jpg",
    imagem6:"https://edgesd43.org/wp-content/uploads/2019/11/chinese-rocket.jpg",
    imagem7:"https://www.normasabnt.org/wp-content/uploads/2023/04/Benazir-Bhutto.jpg",
    
    informacoes:["A Apple lançou o iPhone em junho, revolucionando a indústria de smartphones com seu design inovador e tela sensível ao toque. O iPhone rapidamente se tornou um ícone cultural e um dos produtos mais vendidos da história.","A Crise Financeira Global começou em agosto, quando o mercado de crédito dos EUA entrou em colapso devido a empréstimos hipotecários de alto risco. O colapso teve ramificações globais e desencadeou uma recessão global.","Em abril, a Estônia enfrentou um dos maiores ataques cibernéticos da história, quando seus sistemas de TI foram sobrecarregados por ataques coordenados. O incidente ressaltou a vulnerabilidade dos sistemas de infraestrutura digital.","A Rússia provocou alarme internacional em agosto, quando implantou tropas na Geórgia em apoio às regiões separatistas da Ossétia do Sul e da Abkházia. O conflito resultou em tensões crescentes entre a Rússia e o Ocidente.","O Nobel da Paz foi concedido ao Painel Intergovernamental sobre Mudanças Climáticas (IPCC) e a Al Gore em dezembro, em reconhecimento aos seus esforços para aumentar a conscientização sobre as mudanças climáticas e promover a ação global.","A China lançou com sucesso sua primeira missão espacial tripulada em outubro, enviando Yang Liwei ao espaço a bordo da espaçonave Shenzhou 5. A China se tornou o terceiro país a enviar um humano ao espaço de forma independente.","O assassinato da ex-primeira-ministra paquistanesa Benazir Bhutto em dezembro gerou tumulto político e instabilidade no Paquistão, enquanto o país se preparava para eleições e enfrentava ameaças de extremistas islâmicos."]
  },
  {
    ano:2008,
    imagem:"https://conteudo.imguol.com.br/c/noticias/de/2018/09/12/2592008---manifestantes-protestam-contra-o-pacote-de-ajuda-de-700-bilhoes-do-governo-norte-americano-ao-sistema-financeiro-diante-da-bolsa-de-valores-de-nova-york-1536766535765_v2_450x337.jpg",
imagem2:"https://c.files.bbci.co.uk/13621/production/_116839397_gettyimages-467354336.jpg",
imagem3:"https://static.poder360.com.br/2022/02/bandeira-da-georgia-11set-2008-848x477.jpg",
imagem4:"https://diariodonordeste.verdesmares.com.br/image/contentid/policy:1.3306121:1669659280/000_32VF4P3.jpg?f=16x9&h=574&w=1020&$p$f$h$w=fc49e87",
imagem5:"https://g1.globo.com/Noticias/Mundo/foto/0,,14617819,00.jpg",
imagem6:"https://img.olympics.com/images/image/private/t_social_share_thumb/f_auto/primary/vpqy5tbgntaq9ssah52j",
imagem7:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Tratado_de_Lisboa_13_12_2007_%28081%29.jpg/400px-Tratado_de_Lisboa_13_12_2007_%28081%29.jpg",
    
    informacoes:["A crise financeira global atingiu seu auge em setembro, quando o banco de investimento Lehman Brothers declarou falência, desencadeando uma onda de pânico nos mercados financeiros globais e uma recessão mundial.","Barack Obama foi eleito presidente dos EUA em novembro, tornando-se o primeiro presidente afro-americano na história do país. Sua vitória foi vista como um marco na luta pelos direitos civis e na promoção da diversidade e inclusão.","A Rússia entrou em guerra com a Geórgia em agosto, em resposta à tentativa da Geórgia de retomar o controle sobre a região separatista da Ossétia do Sul. O conflito resultou em tensões crescentes entre a Rússia e o Ocidente.","Em março, o mundo foi testemunha dos maiores protestos contra o governo chinês em décadas, quando manifestantes tibetanos e seus apoiadores em todo o mundo se levantaram contra a repressão chinesa no Tibete.","O ciclone Nargis atingiu Mianmar em maio, causando uma das piores catástrofes naturais da história do país. Milhares de pessoas foram mortas e milhões ficaram desabrigadas devido aos ventos devastadores e às inundações.","Os Jogos Olímpicos de Verão de 2008 foram realizados em Pequim, China, em agosto. Os Jogos foram marcados por cerimônias grandiosas, recordes mundiais e controvérsias sobre direitos humanos e poluição.","O tratado de Lisboa foi assinado em dezembro pelos líderes da União Europeia, reformando as instituições da UE para torná-las mais eficientes e democráticas. O tratado substituiu a Constituição Europeia, que fora rejeitada anteriormente."]
  },
  {
    ano:2009,
    imagem:"https://www.bbc.com/staticarchive/db80df25784228f0811170b86c6b20d9f36e1bf3.jpg",
imagem2:"https://ichef.bbci.co.uk/news/1024/branded_portuguese/E642/production/_111464985_gettyimages-905567680.jpg",
    imagem3:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_G-AQb7WNen_DpT7vEP5TH9vTJLzc7Ct_mA&s",
    imagem4:"https://s2-oglobo.glbimg.com/pqZ-DjREdKGV8Vx3l2cC53rUnyY=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2022/9/L/cOeVzlQVa8g8DfDjfgCw/voo-447.jpg",
    imagem5:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6X1RSf9EvZf5B0dzq8XbSqlUplf7Zbw9TmQ&s",
    imagem6:"https://files.tecnoblog.net/wp-content/uploads/2018/10/daniel-ek-martin-lorentzon-1060x717.jpg",
    imagem7:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTfImFQ-1Qf1R9BWBVcYswiou4o1JvNVrA8g&s",
    
      informacoes:["A posse de Barack Obama como o 44º presidente dos EUA em janeiro foi marcada por uma grande expectativa e esperança por mudanças, especialmente após a crise financeira global e os anos de governo Bush.","A pandemia de gripe suína, causada pelo vírus H1N1, foi declarada em abril pela Organização Mundial da Saúde. A propagação do vírus levou a preocupações globais com saúde pública e ações coordenadas para conter a disseminação.","Em junho, o Irã enfrentou uma onda de protestos generalizados após as eleições presidenciais, com manifestantes denunciando fraude eleitoral e exigindo reformas políticas. Os protestos foram brutalmente reprimidos pelo governo iraniano.", "O voo 447 da Air France caiu no Oceano Atlântico em junho, matando todas as 228 pessoas a bordo. A queda do avião levantou questões sobre segurança aérea e a confiabilidade dos sistemas automáticos de aviação.","O terramoto de magnitude 7,9 na província de Sichuan, China, em maio, causou devastação generalizada e matou quase 90.000 pessoas. O desastre desencadeou uma onda de solidariedade nacional e um esforço de reconstrução em larga escala.","O lançamento do Spotify em outubro marcou o início de uma nova era na indústria da música, oferecendo aos usuários acesso a milhões de faixas por meio de streaming online. O Spotify se tornou rapidamente uma das plataformas de música mais populares do mundo.","O surgimento do Bitcoin, uma criptomoeda descentralizada, em janeiro, marcou o início de uma revolução financeira e tecnológica. O Bitcoin e outras criptomoedas se tornaram cada vez mais populares como formas alternativas de investimento e pagamento."]
  },
  {
    ano:2010,
    imagem:"https://s1.static.brasilescola.uol.com.br/be/e/o%20terremoto%20no%20chile.jpg",
    imagem2:"https://veja.abril.com.br/wp-content/uploads/2016/05/bp-20121128-original.jpeg?quality=90&strip=info",
imagem3:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/12th_row_floor_for_the_Vancouver_Olympics_Opening_Ceremonies._Worth_every_penny.jpg/300px-12th_row_floor_for_the_Vancouver_Olympics_Opening_Ceremonies._Worth_every_penny.jpg",
    imagem4:"https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/Reuters_Direct_Media/BrazilOnlineReportWorldNews/tagreuters.com2024binary_LYNXNPEK2O0OA-FILEDIMAGE.jpg?w=1220&h=674&crop=1",
imagem5:"https://f.i.uol.com.br/fotografia/2013/02/06/239221-970x600-1.jpeg",
imagem6:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh8ijcXEBuMJFF0RznL_RUy8gH1q5ItFU9MHtgwFgYcHQTCyWCiUejwIT1MCVAT1MAOjwqpKBrosls1JJu-_bQVGVdQyoOd3cKl92qTdTFX4DflxX0jKVrk7q-y_pV5hmnuNqUMQKxXHijA/s1600/C+012+F002.jpg",
    imagem7:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmgzH-k-1YbGEw2pdRYk-CTxph7j3_3Pl9Hw&s",
    
    informacoes:["Um terremoto de magnitude 7,0 atingiu o Haiti em janeiro, causando uma das piores catástrofes naturais da história do país. O terremoto matou centenas de milhares de pessoas, deixou milhões desabrigadas e desencadeou uma crise humanitária.","O vazamento de petróleo da BP no Golfo do México em abril foi um dos maiores desastres ambientais da história dos EUA. O vazamento contaminou ecossistemas marinhos, prejudicou a economia local e levantou questões sobre a segurança da perfuração de petróleo em águas profundas.","Os Jogos Olímpicos de Inverno de 2010 foram realizados em Vancouver, Canadá, em fevereiro. Os Jogos foram marcados por performances esportivas notáveis, cerimônias impressionantes e controvérsias sobre o legado ambiental.","Em outubro, o WikiLeaks começou a divulgar uma série de vazamentos de documentos confidenciais do governo dos EUA, revelando segredos diplomáticos e operações militares sensíveis. Os vazamentos geraram debates sobre transparência governamental e segurança nacional.","A Primavera Árabe teve início em dezembro, quando um vendedor ambulante tunisiano, Mohamed Bouazizi, ateou fogo ao próprio corpo em protesto contra a corrupção e a repressão policial. Os protestos se espalharam pelo mundo árabe, desafiando regimes autoritários e exigindo reformas políticas e sociais.","A Deepwater Horizon, uma plataforma de perfuração de petróleo operada pela BP, explodiu no Golfo do México em abril, resultando em um dos piores desastres ambientais da história dos EUA. O vazamento de petróleo prejudicou ecossistemas marinhos e comunidades costeiras.","A Cúpula do G20 em Seul, Coreia do Sul, em novembro, reuniu líderes das maiores economias do mundo para discutir questões econômicas globais, incluindo recuperação pós-crise, reforma financeira e comércio internacional."]
  },
  {
    ano:2011,
    imagem:"https://s5.static.brasilescola.uol.com.br/be/2023/01/primavera-arabe-iemen.jpg",
imagem2:"https://c.files.bbci.co.uk/9A12/production/_116824493_tsujapangetty.jpg",
    imagem3:"https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2021/06/4103_8B3EE58880DA4944-2.jpg?w=1024",
imagem4:"https://ichef.bbci.co.uk/news/1024/branded_portuguese/403A/production/_106324461_libia1.jpg",
imagem5:"https://static.politize.com.br/2022/03/800px-Day_60_Occupy_Wall_Street_November_15_2011_Shankbone_18-1.jpeg",
imagem6:"https://s2.glbimg.com/ZYxDAD7MmRFHXtwAb4DhGSf61MA=/s.glbimg.com/jo/g1/f/original/2015/06/26/gay-rights.jpg",
imagem7:"https://ogimg.infoglobo.com.br/in/25121790-179-18c/FT1086A/noruega.jpg",
    
    informacoes:["Os protestos da Primavera Árabe varreram o Oriente Médio e o Norte da África em 2011, desafiando regimes autoritários e exigindo reformas políticas e sociais. Os protestos levaram à queda de líderes em vários países e mudanças sísmicas na região.","O terremoto e tsunami no Japão em março desencadearam uma das piores catástrofes naturais da história do país. O terremoto de magnitude 9,0 e o subsequente tsunami mataram milhares de pessoas, desencadearam uma crise nuclear em Fukushima e causaram danos generalizados.","Os EUA lançaram uma operação militar em maio que resultou na morte de Osama bin Laden, líder da Al-Qaeda, no Paquistão. A morte de bin Laden foi um golpe significativo para a Al-Qaeda, mas levantou questões sobre a política externa e a guerra ao terror dos EUA.","A Guerra Civil na Líbia eclodiu em fevereiro, quando manifestações anti-governo foram brutalmente reprimidas pelo regime de Muammar Gaddafi. A violência escalou para um conflito armado em larga escala, que culminou na derrubada de Gaddafi em outubro.","Os protestos do Movimento Occupy surgiram em setembro, quando manifestantes ocuparam o Zuccotti Park em Nova York para protestar contra a desigualdade econômica, a corrupção corporativa e a influência do dinheiro na política. O movimento se espalhou para outras cidades dos EUA e do mundo.","O casamento entre pessoas do mesmo sexo foi legalizado em Nova York em junho, marcando um marco significativo na luta pelos direitos LGBT nos EUA. Nova York se tornou o sexto estado dos EUA a permitir o casamento igualitário.","O atentado terrorista em Oslo, Noruega, em julho, chocou o mundo quando um extremista de direita detonou uma bomba perto de prédios do governo, matando oito pessoas. Ele então realizou um tiroteio em massa em um acampamento de verão, matando 69 pessoas, a maioria adolescentes."]
  },
  {
    ano:2012,
    imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy732K_lqLpmd7spGjGZBo2ZUnjGjEMAEYgQ&s",
imagem2:"https://s2.glbimg.com/czVIrFAMAlD8l4QZ7ybKUO2obA10ANubN9q5bXzZHa5Ioz-HdGixxa_8qOZvMp3w/s.glbimg.com/jo/g1/f/original/2012/10/30/nj_620.jpg",
imagem3:"https://upload.wikimedia.org/wikipedia/commons/4/46/Police_at_Sandy_Hook.PNG",
    imagem4:"https://img.odcdn.com.br/wp-content/uploads/2020/12/PIA23764-MarsPerseveranceRover-ArtistConcept-20200305.jpg",
imagem5:"https://ogimg.infoglobo.com.br/in/6992851-f43-aea/FT1086A/Norway-Nobel-Peace-Prize-Ceremony.jpg",
    imagem6:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSx-UU07gSXrW27a9uCZiGmgVWgtTqgEcqAg&s",
imagem7:"https://conteudo.imguol.com.br/2013/03/27/27mar2013---vista-aerea-mostra-devastacao-que-a-passagem-do-furacao-sandy-causou-em-uma-area-residencial-do-queens-bairro-de-nova-york-na-costa-leste-dos-estados-unidos-em-outubro-de-2012-nove-dos-1364392713221_300x200.jpg.webp",
    
    informacoes:["Os Jogos Olímpicos de Verão de 2012 foram realizados em Londres, Reino Unido, em julho e agosto. Os Jogos foram marcados por performances esportivas notáveis, cerimônias impressionantes e legado cultural e econômico duradouro.","A Superstorm Sandy atingiu o nordeste dos EUA em outubro, causando devastação em Nova York e outras áreas. A tempestade resultou em inundações generalizadas, cortes de energia e danos significativos à infraestrutura.","O tiroteio em massa na escola primária Sandy Hook em dezembro chocou os EUA e o mundo, quando um atirador matou 26 pessoas, incluindo 20 crianças, antes de cometer suicídio. O tiroteio reacendeu o debate sobre controle de armas nos EUA.","O pouso do rover Curiosity em Marte em agosto marcou um marco na exploração espacial, com o rover realizando experimentos e coletando dados sobre o Planeta Vermelho. A missão ajudou a aumentar nossa compreensão sobre a possibilidade de vida em Marte.","A União Europeia recebeu o Prêmio Nobel da Paz em dezembro, em reconhecimento aos seus esforços para promover a paz, a reconciliação e a cooperação na Europa após décadas de conflito.","O massacre em um cinema de Aurora, Colorado, em julho, chocou os EUA, quando um atirador abriu fogo durante uma sessão de estreia de um filme, matando 12 pessoas e ferindo dezenas de outras. O incidente levantou questões sobre controle de armas e segurança pública.","O furacão Sandy atingiu a costa leste dos EUA em outubro, causando devastação em Nova York e outras áreas. A tempestade resultou em inundações generalizadas, cortes de energia e danos significativos à infraestrutura."]
  },
  {
    ano:2013,
    imagem:"https://static.dw.com/image/16595775_605.jpg",
    imagem2:"https://s2.glbimg.com/wTa-GeVHQgdeowk2ROE0_OcQh14=/620x465/s.glbimg.com/jo/g1/f/original/2013/04/18/bomba1-940.jpg",
    imagem3:"https://veja.abril.com.br/wp-content/uploads/2016/05/gay-marriage-01-original.jpeg?quality=90&strip=info&w=720&h=440&crop=1",
imagem4:"https://ogimg.infoglobo.com.br/in/10741479-276-b16/FT1086A/2013-662442645-20131110030203175rts.jpg_20131110.jpg",
  imagem5:"https://arquidiocesebh.org.br/wp-content/uploads/2018/03/vaticannn.jpg",
imagem6:"https://ogimg.infoglobo.com.br/in/12502362-2de-d20/FT1086A/BlackBlocks01.jpg",
    imagem7:"https://img.rtve.es/imagenes/diez-anos-muerte-hugo-chavez/1678006729688.jpg",
    
    
    informacoes:["O Papa Bento XVI renunciou em fevereiro, tornando-se o primeiro papa a renunciar ao cargo em quase 600 anos. Sua renúncia abriu caminho para a eleição do Papa Francisco, que se tornou o primeiro papa latino-americano na história da Igreja Católica.","O atentado terrorista na Maratona de Boston em abril chocou os EUA quando duas bombas explodiram perto da linha de chegada, matando três pessoas e ferindo mais de 260. Os suspeitos foram identificados como dois irmãos de origem chechena.","O casamento entre pessoas do mesmo sexo foi legalizado no Reino Unido em julho, após a promulgação do Marriage (Same Sex Couples) Act. O Reino Unido se tornou o décimo quinto país do mundo a permitir o casamento igualitário.","O ciclone Haiyan, uma das tempestades mais fortes já registradas, atingiu as Filipinas em novembro, causando devastação generalizada e matando milhares de pessoas. A tempestade destacou a vulnerabilidade das comunidades costeiras aos impactos das mudanças climáticas.","O Papa Francisco foi eleito em março, tornando-se o primeiro papa latino-americano e o primeiro jesuíta a liderar a Igreja Católica. Sua eleição foi saudada como um sinal de mudança e renovação na Igreja.","O Escândalo de Vigilância Global veio à tona em junho, quando Edward Snowden, um ex-contratado da NSA, vazou detalhes sobre os programas de vigilância em massa do governo dos EUA. Os vazamentos provocaram debates sobre privacidade, segurança nacional e vigilância governamental.","Em 5 de março, o então vice-presidente da Venezuela, Nicolás Maduro, anunciou em cadeia nacional a notícia do falecimento de Hugo Chávez.Durante seu governo, ele buscou reduzir as desigualdades no país, mas sua morte deixou um vácuo de liderança."]
  },
  {
    ano:2014,
    imagem:"https://blog.stoodi.com.br/wp-content/uploads/2020/03/estado-islamico-3.jpeg",
    imagem2:"https://infoflash.com.br/wp-content/uploads/2024/03/malaysia.webp",
    imagem3:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKQUnw-MZkCCPOWJsQbcVgWbxmq29afLKQGg&s",
imagem4:"https://c.files.bbci.co.uk/F6B3/production/_101255136_gettyimages-454374054.jpg",
imagem5:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Joseph_Blatter_-_World_Cup_2014.jpg/1200px-Joseph_Blatter_-_World_Cup_2014.jpg",
imagem6:"https://jpimg.com.br/uploads/2022/11/indenpendencia-da-escocia-750x450.jpg",
imagem7:"https://conteudo.imguol.com.br/c/noticias/68/2020/08/20/foto-de-arquivo-guarda-nacional-de-michigan-distribui-agua-mineral-apos-escandalo-de-contaminacao-por-chumbo-em-flint-em-2016-1597955340089_v2_450x337.jpg",
    
    informacoes:["O Estado Islâmico (EI) emergiu como uma força poderosa no Oriente Médio em 2014, capturando vastas áreas da Síria e do Iraque e declarando um califado. O grupo cometeu atrocidades generalizadas, incluindo execuções em massa, sequestros e escravidão sexual.","O voo MH370 da Malaysia Airlines desapareceu em março, levando 239 pessoas a bordo. O desaparecimento do avião provocou uma das maiores operações de busca e resgate da história, mas até hoje os destroços não foram encontrados.","A Rússia anexou a Crimeia em março, desencadeando uma crise diplomática entre a Rússia e o Ocidente. A anexação foi condenada pela comunidade internacional e levou à imposição de sanções contra a Rússia.","O Ebola se espalhou rapidamente na África Ocidental em 2014, desencadeando uma das piores epidemias da história. O surto matou milhares de pessoas e causou medo e preocupação global sobre a disseminação do vírus.","O Brasil sediou a Copa do Mundo da FIFA em 2014, atraindo atenção global para o país e seus desafios sociais, econômicos e ambientais. O torneio foi marcado por protestos, controvérsias e uma derrota humilhante para o Brasil na semifinal.","O referendo sobre a independência da Escócia em setembro resultou na decisão de permanecer no Reino Unido, com 55% dos eleitores votando contra a independência. O referendo gerou debates acalorados sobre a autonomia escocesa e a unidade britânica.","O Escândalo da Água de Flint veio à tona em 2014, quando altos níveis de chumbo foram descobertos no abastecimento de água da cidade de Flint, Michigan. O escândalo provocou indignação nacional e levou a acusações de má gestão e negligência."]
  },
  {
    ano:2015,
    imagem:"https://s.glbimg.com/jo/g1/f/original/2015/01/16/2015-01-16t134642z_10129598.jpg",
imagem2:"https://static.preparaenem.com/conteudo_legenda/2a21a91a0fde99adf2e7135c74732e73.jpg",
    imagem3:"https://www.istoedinheiro.com.br/wp-content/uploads/sites/17/Reuters_Direct_Media/BrazilOnlineReportWorldNews/tagreuters.com2021binary_LYNXMPEHB610A-BASEIMAGE.jpg?x46096",
imagem4:"https://static.todamateria.com.br/upload/ac/or/acordodeparis-0.jpg",
imagem5:"https://s2.glbimg.com/aFt5LlLD0GJYbNZxCBXKFY5lmZY=/620x400/e.glbimg.com/og/ed/f/original/2015/04/26/aptopix_nepal_earthqu_r_1.jpg",
    imagem6:"https://s2-g1.glbimg.com/cRBjFp5xabjswxM2G21ACx9jYYk=/0x0:1089x720/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/m/1/BiUPB2RQigQ8rlA6InAw/fiocruz-raul-santana-00333-1-.jpg",
    imagem7:"https://s2-g1.glbimg.com/IYPGM1oJ3H77PHjayQDdbaIwoLk=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2018/9/K/dvXHVrQ8umMsMMeVYQVA/venezuela-bbc.jpg",
    
  informacoes:["O atentado ao jornal satírico Charlie Hebdo em janeiro chocou o mundo quando militantes islâmicos atacaram a sede do jornal em Paris, matando 12 pessoas e ferindo várias outras. O ataque foi condenado globalmente e levou a debates sobre liberdade de expressão e segurança.","A Crise Migratória na Europa atingiu o auge em 2015, quando centenas de milhares de refugiados e migrantes chegaram à Europa em busca de segurança e oportunidades. A crise desencadeou debates acalorados sobre política de imigração e solidariedade internacional.","O Casamento entre pessoas do mesmo sexo foi legalizado em todo os EUA em junho, quando a Suprema Corte decidiu em Obergefell v. Hodges que os estados não poderiam proibir o casamento entre pessoas do mesmo sexo. A decisão foi comemorada como uma vitória para a igualdade e os direitos civis.","O Acordo de Paris sobre Mudança Climática foi adotado em dezembro por 195 países, estabelecendo metas para reduzir as emissões de gases de efeito estufa e limitar o aumento da temperatura global. O acordo foi saudado como um marco na luta contra as mudanças climáticas.","O terremoto no Nepal em abril matou milhares de pessoas e causou devastação generalizada, desencadeando uma crise humanitária no país. O terremoto destacou a vulnerabilidade do Nepal a desastres naturais e a necessidade de preparação e resposta adequadas.","O surgimento do Zika Vírus nas Américas em 2015 levou a preocupações globais com saúde pública devido à associação do vírus com microcefalia em bebês. O surto desencadeou esforços coordenados de saúde pública para conter a propagação do vírus e desenvolver uma vacina.","A Crise Econômica na Venezuela se agravou em 2015, com a inflação disparando, a escassez de alimentos e remédios piorando e os protestos contra o governo aumentando. A crise levou a um êxodo em massa de venezuelanos em busca de melhores condições de vida."]
  },
  {
    ano:2016,
    imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj5GS-YZNvqI4W5Gul1VzE8rvKyZ2INwJvgQ&s",
    imagem2:"https://s2.glbimg.com/WG3rzCaQC-jtg9LIEKezMAQeAm4=/620x465/s.glbimg.com/jo/g1/f/original/2016/11/09/2016-11-09t075525z_184720730_ht1ecb90lztxp_rtrmadp_3_usa-election-trump.jpg",
imagem3:"https://s2.glbimg.com/WucRUywlDB2lits1TfcrmfrXnpI=/620x465/s2.glbimg.com/PO59W2_1cJgrvZMACEvVyDzx5YA=/620x465/s.glbimg.com/jo/g1/f/original/2016/07/14/caminhao2_3VWfpNr.jpg",
imagem4:"https://s1.static.brasilescola.uol.com.br/be/conteudo/images/dilma-rousseff-em-primeiro-plano-no-julgamento-impeachment-57c973ef78620.jpg",
    imagem5:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzdZUvZB7Hjz2AuvsOYbIK1UuZ8HXwy80pGA&s",
    imagem6:"https://veja.abril.com.br/wp-content/uploads/2018/01/brasil-rj-imunizacao-febre-amarela-20180127-003.jpg?quality=90&strip=info&w=720&h=440&crop=1",
imagem7:"https://www.correiodopovo.com.br/image/contentid/policy:1.1213052:1678465534/395170.JPG?f=2x1&$p$f=fbb677d&w=720&$w=3b33d2d",
    
    informacoes:["O Brexit chocou o mundo em junho, quando os eleitores do Reino Unido votaram por uma estreita margem para deixar a União Europeia. A decisão desencadeou uma crise política e econômica no Reino Unido e levou a debates sobre o futuro da integração europeia.","O Candidato Republicano Donald Trump foi eleito presidente dos EUA em novembro, derrotando a candidata democrata Hillary Clinton em uma eleição surpreendente e contenciosa. A vitória de Trump foi vista como um desafio ao establishment político e uma expressão de descontentamento popular.","O Ataque Terrorista em Nice, França, em julho, chocou o mundo quando um caminhão avançou sobre uma multidão durante as celebrações do Dia da Bastilha, matando 86 pessoas e ferindo centenas. O ataque foi reivindicado pelo Estado Islâmico.","O Impeachment de Dilma Rousseff como presidente do Brasil em agosto marcou o fim de um longo processo político que dividiu o país. Rousseff foi acusada de irregularidades fiscais, mas seus partidários denunciaram o impeachment como um golpe político.","A Crise de Refugiados Sírios atingiu seu auge em 2016, quando milhões de sírios fugiram da guerra civil em busca de segurança na Europa e em outros lugares. A crise desencadeou um debate global sobre imigração, segurança e solidariedade internacional.","O surto de febre amarela no Brasil em 2016 levou a uma grande campanha de vacinação para conter a propagação da doença. O surto destacou a importância da vigilância epidemiológica e da vacinação em massa para prevenir epidemias.","O Atentado ao Aeroporto de Istambul, na Turquia, em junho, chocou o mundo quando militantes do Estado Islâmico lançaram um ataque suicida no aeroporto internacional, matando 45 pessoas e ferindo mais de 230. O ataque ressaltou a ameaça contínua do terrorismo global."]
  },
  {
    ano:2017,
    imagem:"https://ogimg.infoglobo.com.br/in/20803907-e2c-8a0/FT1086A/Trump-Inauguration-GA8333GC9.1.jpg",
    imagem2:"https://s2-g1.glbimg.com/N8WFkHY7LzKA2583oA_BvlXHdEk=/0x0:2694x2016/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2017/T/5/qJ1SJARPAU94jrzKIdTg/feridos-manchester.jpg",
imagem3:"https://ogimg.infoglobo.com.br/in/21760360-33f-84d/FT1086A/furacao-harvey-prejuizos.jpg",
    imagem4:"https://s2.glbimg.com/5qVNt-XGmHriaVjU0Z9JZC42c18=/560x350/e.glbimg.com/og/ed/f/original/2017/09/29/manifestacao_independencia_catalunha.jpg",
    imagem5:"https://www.bandab.com.br/wp-content/uploads/2023/10/eclipse-anular-960x640.jpg",
    imagem6:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS4FNRokPBlvCSRCmS8argwO3cQs0kYxjduQ&s",
    imagem7:"https://images.squarespace-cdn.com/content/v1/59a8480fccc5c52fff14d38a/1530811194275-3GH0PBGMT2UUCDVOVCB2/febre+amarela+2.jpg",
    
    informacoes:["A posse de Donald Trump como presidente dos EUA em janeiro marcou o início de uma nova era na política americana. Trump adotou uma abordagem populista e nacionalista, prometendo reformas radicais e uma agenda 'America First'.","O Atentado ao Manchester Arena em maio chocou o Reino Unido quando um terrorista suicida detonou uma bomba durante um show da cantora Ariana Grande, matando 22 pessoas e ferindo mais de 500. O ataque foi reivindicado pelo Estado Islâmico.","O furacão Harvey atingiu o Texas em agosto, causando devastação generalizada e inundações catastróficas em Houston e outras áreas. O furacão foi um dos desastres naturais mais caros da história dos EUA.","O Referendo sobre a Independência da Catalunha em outubro levou a uma crise política na Espanha, com a região buscando se separar do país. O referendo foi marcado por violência policial e tensões entre o governo central espanhol e os líderes catalães.","O Eclipse Solar Total em agosto cruzou os EUA de costa a costa, atraindo milhões de espectadores para observar o fenômeno celestial. O eclipse foi um dos eventos astronômicos mais esperados do século e inspirou celebrações e pesquisas científicas.","O ataque com gás sarin em Khan Shaykhun, na Síria, em abril, chocou o mundo quando imagens de vítimas, incluindo crianças, foram amplamente divulgadas. O ataque foi atribuído ao governo sírio, levantando questões sobre o uso de armas químicas e o conflito na Síria.","O surto de febre amarela no Brasil em 2017 levou a uma grande campanha de vacinação para conter a propagação da doença. O surto destacou a importância da vigilância epidemiológica e da vacinação em massa para prevenir epidemias."]
  },
  {
    ano:2018,
    imagem:"https://imagenes.elpais.com/resizer/v2/5LG6X7EKE2SHPCSTSQYFNM6FS4.jpg?auth=9e8276a0dde718b783bfa74b717aeb1fd960f08adc2198b2a6dbf06352861ea0&width=414",
    imagem2:"https://veja.abril.com.br/wp-content/uploads/2018/05/mundo-casamento-real-harry-meghan-markle-20180519-0043-copy.jpg?quality=90&strip=info&w=720&h=440&crop=1",
imagem3:"https://imagens.ebc.com.br/HT4ttgKxww7-lS3WsDMbO40UatY=/754x0/smart/https://agenciabrasil.ebc.com.br/sites/default/files/thumbnails/image/2018-10-09t115901z_1056110056_rc137a857be0_rtrmadp_3_saudi-politics-dissident.jpg?itok=UqSza-I_",
imagem4:"https://f.i.uol.com.br/fotografia/2017/03/22/676635-970x600-1.jpeg",
    imagem5:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCtAdRwGhYEhBMCbVzdXZ7wM7a6v18BsdA8Q&s",
imagem6:"https://f.i.uol.com.br/fotografia/2018/07/10/15312360835b44cef30a6cf_1531236083_3x2_md.jpg",
imagem7:"https://cdn.brasildefato.com.br/media/37c1c669439d8745883689c3b69a775b.jpg",
    
    informacoes:["O massacre na Escola Secundária de Parkland, na Flórida, em fevereiro, chocou os EUA quando um atirador abriu fogo contra estudantes e professores, matando 17 pessoas e ferindo várias outras. O massacre reacendeu o debate sobre controle de armas nos EUA.","O Casamento Real entre o Príncipe Harry e Meghan Markle em maio capturou a atenção global, com milhões de espectadores assistindo ao casamento e acompanhando a cobertura midiática. O casamento foi visto como um marco na modernização da família real britânica.","O desaparecimento do jornalista Jamal Khashoggi em outubro provocou indignação global e uma crise diplomática entre a Arábia Saudita e outros países. Khashoggi foi morto no consulado saudita em Istambul, levantando questões sobre liberdade de imprensa e direitos humanos.","O Atentado na Ponte de Londres em junho chocou o Reino Unido quando um terrorista esfaqueou e matou pedestres antes de ser abatido pela polícia. O ataque foi reivindicado pelo Estado Islâmico.","O Julgamento de Bill Cosby em abril marcou um ponto de virada no movimento #MeToo, com o famoso comediante sendo condenado por agressão sexual. O julgamento foi visto como um momento crucial na luta contra o assédio e abuso sexual.","O resgate dos meninos presos em uma caverna na Tailândia em julho foi uma operação de resgate internacional que mobilizou especialistas e voluntários de todo o mundo. Os meninos e seu treinador foram resgatados com segurança após mais de duas semanas presos na caverna inundada.","O referendo sobre a legalização do aborto na Irlanda em maio resultou na decisão de legalizar o aborto até 12 semanas de gravidez. O referendo foi visto como uma vitória para os direitos reprodutivos das mulheres e um sinal de mudança na sociedade irlandesa."]
  },
  {
    ano:2019,
    imagem:"https://s1.static.brasilescola.uol.com.br/be/2020/09/1-queimada-na-floresta-amazonica.jpg",
    imagem2:"https://istoe.com.br/wp-content/uploads/2019/04/69-4.jpg",
    imagem3:"https://s2-g1.glbimg.com/xvLouTy5xXUEdaVsjMCkL7oEJ-k=/0x0:3100x1945/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/3/l/b6UG14QAChMLC5yqhcig/2019-06-09t073222z-1688086574-rc12bf083720-rtrmadp-3-hongkong-extradition.jpg",
    imagem4:"https://cfbio.gov.br/wp-content/uploads/2020/05/07_fevereiro-Covid-19-novo-coronav%C3%ADrus-o-que-%C3%A9-como-%C3%A9-transmitido-e-formas-de-preven%C3%A7%C3%A3o.jpg",
    imagem5:"https://s2-g1.glbimg.com/Rby2gNjMbYM5-AgM0Wqe4MSeEEQ=/0x0:5472x3648/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/U/8/VjPmATRA2Qf8jkLCMIeg/2020-06-06t154117z-1235119663-rc2r3h9412da-rtrmadp-3-minneapolis-police-protests-britain.jpg",
    imagem6:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAcxC-xVlfjUDwSMuDXIpoo2qzKfQv9YtE9Q&s",
    imagem7:"https://istoedinheiro.com.br/wp-content/uploads/sites/17/2019/03/8914481a777e19dffd0efa41925fae76783363c4.jpg",
    
    informacoes:["Os incêndios florestais na Amazônia em agosto provocaram uma crise ambiental e política no Brasil, com líderes mundiais expressando preocupação com a destruição da floresta tropical. O presidente brasileiro, Jair Bolsonaro, foi criticado por suas políticas ambientais.","O incêndio na Catedral de Notre-Dame em abril chocou o mundo quando um incêndio destruiu grande parte do telhado e da torre da catedral histórica em Paris. O incêndio gerou uma onda de solidariedade internacional e esforços de restauração.","Os Protestos em Hong Kong em 2019 foram uma resposta à proposta de lei de extradição que permitiria que suspeitos fossem enviados para a China continental para julgamento. Os protestos se transformaram em um movimento mais amplo em favor da democracia e da autonomia de Hong Kong.","O surto de COVID-19, causado pelo coronavírus SARS-CoV-2, foi declarado uma pandemia pela Organização Mundial da Saúde em março. O surto levou a bloqueios globais, devastou economias e sobrecarregou sistemas de saúde em todo o mundo.","Os Protestos do Movimento Black Lives Matter varreram os EUA em resposta à morte de George Floyd, um homem negro desarmado, sob custódia policial em Minneapolis. Os protestos desencadearam um debate nacional sobre racismo sistêmico e brutalidade policial.","O impeachment de Donald Trump pela Câmara dos Deputados dos EUA em dezembro marcou o culminar de uma investigação que o acusou de abuso de poder e obstrução do Congresso. O julgamento no Senado resultou na absolvição de Trump em fevereiro de 2020.","O Atentado em Christchurch, Nova Zelândia, em março, chocou o mundo quando um atirador abriu fogo em duas mesquitas, matando 51 pessoas e ferindo dezenas de outras. O ataque levantou questões sobre extremismo e intolerância religiosa."]
  },
  {
    ano:2020,
    imagem:"https://ogimg.infoglobo.com.br/in/25442912-9c5-f19/FT1086A/98088659_This-photo-taken-on-March-14-2022-shows-a-resident-underging-a-nucleic-acid-test-for-the-Co.jpg",
    imagem2:"https://s2-g1.glbimg.com/I0SN_TFI8P4HtVghtfUS3v9XR44=/0x0:4737x3148/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/x/y/jKe8MtQr6utHXyrr6YSA/000-1m72hm.jpg",
    imagem3:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCfzQIaKHZzllcIuXA1l1VZyNFR0buTyM7OA&s",
    imagem4:"https://s2-g1.glbimg.com/hypiFlmDCee5R_FwKJSVMJSi-j8=/0x0:1700x1065/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/7/T/q0eAh7Q0GeyK6fiA0s5Q/beirute.jpg",
imagem5:"https://conteudo.imguol.com.br/c/noticias/5e/2020/09/10/incendio-na-california-em-6-de-setembro-1599777915058_v2_900x506.jpg",
    imagem6:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCxyBj4PC5fhDMERNbnGvd0Udu1Owyv_1XyS0GyK3HETwteyZcwjpssnctI1yBo3-3gR0&usqp=CAU",
    imagem7:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXzaks2ZACA0HftWOcbyqwrdl6TfhqZVUkJw&s",
    
    informacoes:["O surto de COVID-19 se intensificou em 2020, com milhões de casos confirmados em todo o mundo e dezenas de milhares de mortes. O vírus causou estragos nas economias globais, sobrecarregou sistemas de saúde e alterou drasticamente a vida cotidiana das pessoas.","Os incêndios florestais na Austrália em 2019-2020 foram alguns dos piores da história do país, causando devastação ambiental, perda de vidas e danos à propriedade. Os incêndios foram atribuídos às condições climáticas extremas e às mudanças climáticas.","O assassinato de George Floyd pela polícia em maio desencadeou uma onda global de protestos contra o racismo e a brutalidade policial. Os protestos levaram a debates sobre reforma policial e justiça racial em todo o mundo.","A explosão em Beirute, Líbano, em agosto, chocou o mundo quando uma grande quantidade de nitrato de amônio armazenado inadequadamente explodiu no porto da cidade, matando centenas de pessoas, ferindo milhares e causando danos generalizados.","Os incêndios florestais na Califórnia em 2020 foram alguns dos piores da história do estado, causando devastação ambiental, perda de vidas e danos à propriedade. Os incêndios foram atribuídos às condições climáticas extremas e ao aumento das temperaturas.","A pandemia de COVID-19 forçou o adiamento e cancelamento de eventos esportivos em todo o mundo, incluindo os Jogos Olímpicos de Verão de Tóquio e a Eurocopa. O impacto da pandemia nos esportes levantou questões sobre saúde pública e segurança dos atletas.","O assassinato de Qasem Soleimani, comandante militar iraniano, em um ataque aéreo dos EUA em janeiro, aumentou as tensões entre os EUA e o Irã, aumentando o medo de um conflito militar na região."]
  },
  {
    ano:2021,
    imagem:"https://nexo-uploads-beta.s3.amazonaws.com/wp-content/uploads/images/2023/11/29213116/China_vacina_binary_241288-scaled.jpeg",
    imagem2:"https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/Reuters_Direct_Media/BrazilOnlineReportWorldNews/tagreuters.com2023binary_LYNXMPEJBC0R6-FILEDIMAGE.jpg?w=1200&h=900&crop=1",
  imagem3:"https://projetocolabora.com.br/wp-content/uploads/2022/12/20220815afeganistaotaliba-aa-02022022-afpsayed-khodaiberdi-sadat.jpg",
    imagem4:"https://s2-g1.glbimg.com/c3sWPaWZ2CTrkw_3Ty5Zd201788=/0x0:1024x681/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/6/q/RxBHyuRXGfbyJQvQgAew/incdios-california.jpg",
imagem5:"https://midias.correiobraziliense.com.br/_midias/jpg/2021/01/08/675x450/1_toquio-6474376.jpg",
    imagem6:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcuOXxGUum5lq_T8zOApgRH887XtnQ6RNDTg&s",
imagem7:"https://global.unitednations.entermediadb.net/assets/mediadb/services/module/asset/downloads/preset/Libraries/Production+Library/14-04-2021-La-Soufriere-eruption-13April.jpg/image770x420cropped.jpg",
    
    informacoes:[  "A vacinação em massa contra o COVID-19 começou em muitos países em 2021, oferecendo esperança de controle sobre a pandemia. As vacinas foram desenvolvidas e distribuídas em tempo recorde, marcando um feito notável da ciência e da cooperação internacional.","A invasão do Capitólio dos EUA em janeiro chocou o país e o mundo quando apoiadores do então presidente Donald Trump invadiram o prédio do Congresso durante a certificação dos votos do Colégio Eleitoral. O incidente levantou questões sobre segurança nacional e a saúde da democracia americana.","A crise humanitária no Afeganistão se intensificou em 2021, com o Talibã retomando o controle do país após a retirada das tropas americanas e aliadas. A situação levantou preocupações sobre direitos humanos, segurança e estabilidade na região.","Os incêndios florestais na Califórnia em 2021 foram alguns dos piores da história do estado, causando devastação ambiental, perda de vidas e danos à propriedade. Os incêndios foram atribuídos às condições climáticas extremas e ao aumento das temperaturas.","Os Jogos Olímpicos de Verão de Tóquio foram realizados em julho, depois de um adiamento de um ano devido à pandemia de COVID-19. Os Jogos foram marcados por cerimônias grandiosas, performances esportivas notáveis e debates sobre os desafios de realizar um evento global durante uma pandemia.","O relatório do IPCC de 2021 destacou a urgência de ação climática para evitar os piores impactos das mudanças climáticas. O relatório alertou sobre o aumento das temperaturas, o derretimento do gelo polar e os eventos climáticos extremos.","A erupção do vulcão La Soufrière em São Vicente e Granadinas em abril desencadeou uma crise humanitária na ilha caribenha. A erupção forçou milhares de pessoas a deixarem suas casas e levantou preocupações sobre saúde, segurança e resiliência."]
  },
  {
    ano:2022,
    imagem:"https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2022/02/Explosao-Kiev.jpg",

    imagem2:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi8rmNUKW8TcSUGwqWmcRlKuJAOxrXfFl7Fw&s",
    imagem3:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjyw_2ymPkAS98nPjG3hnS31vA5fLs8PNmgg&s",
imagem4:"https://www.wribrasil.org.br/sites/default/files/uploads/ipcc-emergencia-climatica.png",
imagem5:"https://www.paho.org/sites/default/files/styles/max_1500x1500/public/2022-10/coronavirus.jpg?itok=BkE49C9t",
    imagem6:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA3z0Nj5p5cadW-qqYObVpfwk-8KwL1_4_5Q&s",
imagem7:"https://static.poder360.com.br/2021/10/encontro-g20-31-out-2021-848x477.jpg",
    
    informacoes:["A invasão russa da Ucrânia em fevereiro de 2022 desencadeou um conflito armado de grande escala na região, com consequências humanitárias e geopolíticas significativas. A comunidade internacional condenou fortemente a ação da Rússia e impôs sanções em resposta.","A crise de refugiados afegãos se agravou em 2022, com milhões de afegãos fugindo do Talibã e da instabilidade política e econômica. A situação levou a pedidos de assistência humanitária e a debates sobre políticas de imigração em todo o mundo.","Os incêndios florestais na Amazônia em 2022 provocaram preocupações renovadas sobre a destruição da floresta tropical e seus impactos no clima global. A perda contínua de habitat ameaça a biodiversidade da região e contribui para as mudanças climáticas.","O relatório do IPCC de 2022 destacou a urgência de ação climática para evitar os piores impactos das mudanças climáticas. O relatório alertou sobre o aumento das temperaturas, o derretimento do gelo polar e os eventos climáticos extremos.","A pandemia de COVID-19 continuou a evoluir em 2022, com surtos e variantes emergentes em várias partes do mundo. Os esforços de vacinação continuaram, mas o vírus ainda representava desafios para a saúde pública e a recuperação econômica.","Os Jogos Olímpicos de Inverno de Pequim foram realizados em fevereiro de 2022, apesar de preocupações com os direitos humanos e a segurança dos atletas. Os Jogos foram marcados por cerimônias grandiosas e competições emocionantes, mas também por controvérsias políticas.","A Cúpula do G20 em 2022 reuniu líderes das maiores economias do mundo para discutir questões econômicas globais, incluindo recuperação pós-pandemia, mudança climática e cooperação internacional. Os líderes concordaram em tomar medidas para enfrentar desafios urgentes."]
  },
  {
    ano:2023,
    imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbA70Qz6CNaa7uXVH47hmzjxEiyvQaA_CVQ3AYC3sfPA&s",

    imagem2:"https://img.blogs.es/anexom/wp-content/uploads/2019/06/inteligenciaartificial.jpg",
    imagem3:"https://jpimg.com.br/uploads/2021/08/28580f12ac0348509196e418bdfa01a1e9847932w.jpg",
    imagem4:"https://mineramarineresources.com/wp-content/uploads/2021/08/genomica-fidel-sanchez.png",
    imagem5:"https://www.solargenenergy.co.uk/wp-content/uploads/2018/03/renewable-energy.jpg",
    imagem6:"https://i0.wp.com/www.monitordooriente.com/wp-content/uploads/2021/08/20210810_2_49554098_67803737.jpg?resize=1200%2C675&quality=75&strip=all&ssl=1",
    imagem7:"https://i.otto.de/i/otto/466b30cf-3ec2-58b0-b764-156c7efe62ab/wandbilderxxl-fototapete-colorful-map-glatt-politische-weltkarte-vliestapete-hochwertiger-digitaldruck-in-verschiedenen-groessen.jpg?$formatz$",
    
    informacoes:["A crise climática continuou a se agravar em 2023, com eventos climáticos extremos, como incêndios florestais, secas e inundações, ocorrendo em todo o mundo. Os cientistas alertaram sobre a necessidade de ação urgente para reduzir as emissões de gases de efeito estufa e limitar o aquecimento global.","Os avanços na tecnologia de inteligência artificial e automação tiveram um impacto significativo na economia global em 2023, com debates sobre o futuro do trabalho, a desigualdade econômica e a ética da IA. As empresas exploraram novas aplicações da IA em uma variedade de setores.","A crise de refugiados em todo o mundo se intensificou em 2023, com conflitos armados, desastres naturais e instabilidade política impulsionando milhões de pessoas a deixarem suas casas em busca de segurança e oportunidades. A crise destacou a necessidade de uma resposta coordenada e humanitária.","Os esforços para conter a pandemia de COVID-19 continuaram em 2023, com campanhas de vacinação em andamento e medidas de saúde pública em vigor em muitos países. No entanto, o surgimento de novas variantes do vírus apresentou desafios adicionais para a resposta global.","A transição para energias renováveis acelerou em 2023, com investimentos significativos em energia solar, eólica e outras fontes limpas. Os governos e as empresas buscaram reduzir a dependência de combustíveis fósseis e mitigar os impactos das mudanças climáticas.","A crise humanitária no Afeganistão continuou a piorar em 2023, com o colapso econômico e a escalada da violência exacerbando o sofrimento da população. A ajuda humanitária enfrentou desafios significativos devido à insegurança e à instabilidade no país.","As tensões geopolíticas entre as potências mundiais aumentaram em 2023, com disputas territoriais, rivalidades estratégicas e competição por recursos naturais alimentando o conflito. A diplomacia internacional buscou mitigar o risco de confronto e promover a cooperação em questões globais."]
  },
];

function gerarTimeline() {
    const anoInput = document.getElementById("ano").value;
    const acontecimentosDiv = document.getElementById("acontecimentos");

    const anoEncontrado = anos.find(item => item.ano == anoInput);

    if (anoEncontrado) {
        acontecimentosDiv.innerHTML = '';

        const anoDiv = document.createElement('div');
        anoDiv.classList.add('card');

        const imagemColuna = document.createElement('div');
        imagemColuna.className = 'imagem-coluna';

        const img = document.createElement('img');
        img.src = anoEncontrado.imagem;
        img.alt = `Imagem do ano ${anoEncontrado.ano}`;

        const img2 = document.createElement('img');
        img2.src = anoEncontrado.imagem2;
        img2.alt = `Imagem do ano ${anoEncontrado.ano}`;

        const img3 = document.createElement('img');
        img3.src = anoEncontrado.imagem3;
        img3.alt = `Imagem do ano ${anoEncontrado.ano}`;

        const img4 = document.createElement('img');
        img4.src = anoEncontrado.imagem4;
        img4.alt = `Imagem do ano ${anoEncontrado.ano}`;

        const img5 = document.createElement('img');
        img5.src = anoEncontrado.imagem5;
        img5.alt = `Imagem do ano ${anoEncontrado.ano}`;

        const img6 = document.createElement('img');
        img6.src = anoEncontrado.imagem6;
        img6.alt = `Imagem do ano ${anoEncontrado.ano}`;

        const img7 = document.createElement('img');
        img7.src = anoEncontrado.imagem7;
        img7.alt = `Imagem do ano ${anoEncontrado.ano}`;
       
      

        const informacoesColuna = document.createElement('div');
        informacoesColuna.className = 'informacoes-coluna';

        anoEncontrado.informacoes.forEach(acontecimento => {
            const p = document.createElement('h5');
            p.textContent = acontecimento;
            informacoesColuna.appendChild(p);

            p.style.marginBottom= "80px";
            p.style.marginTop= "80px";
          
            const br = document.createElement('br');
            informacoesColuna.appendChild(br);
          
        });

        imagemColuna.appendChild(img);
        imagemColuna.appendChild(img2);
        imagemColuna.appendChild(img3);
        imagemColuna.appendChild(img4);
        imagemColuna.appendChild(img5);
        imagemColuna.appendChild(img6);
        imagemColuna.appendChild(img7);
        anoDiv.appendChild(imagemColuna);
        anoDiv.appendChild(informacoesColuna);

      

        acontecimentosDiv.appendChild(anoDiv);
    } else {
        acontecimentosDiv.textContent = "Nenhum acontecimento encontrado para o ano digitado.";
    }
}
