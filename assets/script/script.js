//titulos
const nomePrato1 = document.getElementById("titulo1");
const nomePrato2 = document.getElementById("titulo2");
const nomePrato3 = document.getElementById("titulo3");

//descricao
const descricaoPrato1 = document.getElementById("descricao1");
const descricaoPrato2 = document.getElementById("descricao2");
const descricaoPrato3 = document.getElementById("descricao3");

//imgs
const imgPrato1 = document.getElementById("imagem1");
const imgPrato2 = document.getElementById("imagem2");
const imgPrato3 = document.getElementById("imagem3");

//escolhas
const btnItalia = document.getElementById("btnItalia");
const btnJapao = document.getElementById("btnJapao");
const btnMexico = document.getElementById("btnMexico");

// fundo cartoes do dos pratos
const back_fundo1 = document.getElementById("image-back1")
const back_fundo2 = document.getElementById("image-back2")
const back_fundo3 = document.getElementById("image-back3")

//temas escuro - claro
const btnTema = document.getElementById("tema");

//body
const body = document.body;

//eventos
btnItalia.addEventListener("click", () => {
	//titulos
	nomePrato1.textContent = 'Prato Italiano';
	nomePrato2.textContent = 'Lasanha';
	nomePrato3.textContent = 'Risoto';

	//descricao
	descricaoPrato1.textContent = 'A clássica italiana que não precisa provar nada pra ninguém — mas mesmo assim prova, a cada mordida, por que é tão amada. Massa leve, borda fofinha e crocante ao mesmo tempo (um verdadeiro milagre da física), molho de tomate feito como manda a nonna e mussarela que derrete só de olhar.';
	descricaoPrato2.textContent = 'A rainha da cozinha italiana que abraça sua fome de forma majestosa. Camadas de massa macia, molho encorpado, carne ou legumes temperados com carinho e queijo derretido que faz qualquer garfada ser pura felicidade. Uma mistura de tradição e conforto que chega e diz: fica à vontade, hoje a refeição é sua.';
	descricaoPrato3.textContent = 'O prato que dança na panela e no seu paladar. Arroz cremoso, envolto em sabores ricos, seja de cogumelos, frutos do mar ou queijo, sempre com aquele toque que faz você suspirar a cada colherada. Elegante, delicado, mas sem frescura.';

	//imgs
	imgPrato1.src = "./assets/imgs/imgs-italia/napolitana.jpg";
	imgPrato2.src = "./assets/imgs/imgs-italia/lasanha.jpg";
	imgPrato3.src = "./assets/imgs/imgs-italia/risoto.jpg";

	//background das imgs dos cards
	back_fundo1.style.backgroundImage = './assets/imgs/imgs-italia/back.jpg';
	back_fundo2.style.backgroundImage = './assets/imgs/imgs-italia/back.jpg';
	back_fundo3.style.backgroundImage = './assets/imgs/imgs-italia/back.jpg';
})

btnJapao.addEventListener("click", () => {
	//titulos
	nomePrato1.textContent = 'sushi';
	nomePrato2.textContent = 'Sashimi';
	nomePrato3.textContent = 'Tempurá';

	//descricao
	descricaoPrato1.textContent = 'Delicadamente moldado à mão, este bolinho de arroz temperado com vinagre é a essência do sushi tradicional. Cada grão é preparado com equilíbrio perfeito entre leve acidez e suavidade, criando uma base macia e saborosa que pode ser enrolada com os mais diversos ingredientes.';
	descricaoPrato2.textContent = 'Fino, elegante e puro: o sashimi é a expressão mais direta do sabor do mar. Fatias precisas e fresquíssimas, servidas com arroz temperado em cone para completar a experiência com leveza e textura.';
	descricaoPrato3.textContent = 'A crocância que conquista antes mesmo da primeira mordida — e confirma tudo logo depois. Leve, dourado e incrivelmente delicado, o tempurá envolve cada ingrediente em uma camada quase etérea, crocante por fora e macia por dentro.';

	//imgs
	imgPrato1.src = "./assets/imgs/imgs-japan/sushi.jpg";
	imgPrato2.src = "./assets/imgs/imgs-japan/sashimi.jpg";
	imgPrato3.src = "./assets/imgs/imgs-japan/tempura.jpg";

	//background das imgs dos cards
	back_fundo1.style.backgroundImage = './assets/imgs/imgs-japan/back-japan.jpg';
	back_fundo2.style.backgroundImage = './assets/imgs/imgs-japan/back-japan.jpg';
	back_fundo3.style.backgroundImage = './assets/imgs/imgs-japan/back-japan.jpg';
})

btnMexico.addEventListener("click", () => {
	//titulos
	nomePrato1.textContent = 'Tacos';
	nomePrato2.textContent = 'Burrito';
	nomePrato3.textContent = 'Quesadilhas';

	//descricao
	descricaoPrato1.textContent = 'Uma explosão de sabor que chega antes mesmo de você dar a primeira mordida — e te conquista de vez logo depois. Tortilhas de milho ou trigo que abraçam com leveza carnes, frango, peixe ou vegetais, criando uma combinação vibrante e crocante na medida certa.';
	descricaoPrato2.textContent = 'Envolto em uma grande tortilla de trigo, o burrito é aquele abraço quente que você sente por dentro. Camadas generosas de proteínas e vegetais se encaixam em perfeita harmonia, criando um conjunto robusto, suculento e cheio de personalidade.';
	descricaoPrato3.textContent = 'Leve como um suspiro, mas intensa como um amor à primeira mordida. A tortilla tostadinha esconde no interior um queijo derretido que escorre quase em câmera lenta, às vezes acompanhado de carnes, vegetais ou temperos que elevam ainda mais o conjunto.';

	//imgs
	imgPrato1.src = "./assets/imgs/imgs-mexic/tacos.jpg";
	imgPrato2.src = "./assets/imgs/imgs-mexic/burrito.jpg";
	imgPrato3.src = "./assets/imgs/imgs-mexic/quesadilhas.jpg";

	//background das imgs dos cards
	back_fundo1.style.backgroundImage = './assets/imgs/imgs-mexic/back-mexic.jpg';
	back_fundo2.style.backgroundImage = './assets/imgs/imgs-mexic/back-mexic.jpg';
	back_fundo3.style.backgroundImage = './assets/imgs/imgs-mexic/back-mexic.jpg';
})

btnSoma.addEventListener("click", () => {
	//titulos
	nomePrato1.textContent = 'Canjeero';
	nomePrato2.textContent = 'Canbulo Iyo Bun';
	nomePrato3.textContent = 'Soor';

	//descricao
	descricaoPrato1.textContent = 'um alimento simples feito com dois ingredientes básicos: farinha (ou farinha de milho) e fermento.';
	descricaoPrato2.textContent = 'uma combinação de feijão e arroz, feijão e trigo, ou sorgo e trigo com grãos de café secos fritos no óleo.';
	descricaoPrato3.textContent = 'conhecido como ugali na África Oriental, é um alimento popular feito com milho moído.';
	
	//imgs
	imgPrato1.src = "./assets/imgs/imgs-soma/Canjeero.jpg";
	imgPrato2.src = "./assets/imgs/imgs-soma/Canbulo.jpg";
	imgPrato3.src = "./assets/imgs/imgs-soma/Soor.jpg";

	//background das imgs dos cards
	back_fundo1.style.backgroundImage = './assets/imgs/imgs-soma/back-soma.jpg';
	back_fundo2.style.backgroundImage = './assets/imgs/imgs-soma/back-soma.jpg';
	back_fundo3.style.backgroundImage = './assets/imgs/imgs-soma/back-soma.jpg';
})

//trocar o tema
function toggleTheme() {
	body.classList.toggle("dark")
}

btnTema.addEventListener("click", toggleTheme)
