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
	descricaoPrato1.textContent = 'Uma tradicional pizza italiana';
	descricaoPrato2.textContent = 'Uma tradicional comida a base de massa';
	descricaoPrato3.textContent = 'Uma tradicional comida italiana a base de arroz';

	//imgs
	imgPrato1.src = "./assets/imgs/imgs-italia/napolitana.jpg";
	imgPrato2.src = "./assets/imgs/imgs-italia/lasanha.jpg";
	imgPrato3.src = "./assets/imgs/imgs-italia/risoto.jpg";
})

btnJapao.addEventListener("click", () => {
	//titulos
	nomePrato1.textContent = '';
	nomePrato2.textContent = '';
	nomePrato3.textContent = '';

	//descricao
	descricaoPrato1.textContent = '';
	descricaoPrato2.textContent = '';
	descricaoPrato3.textContent = '';

	//imgs
	imgPrato1.src = "./assets/imgs/";
	imgPrato2.src = "./assets/imgs/";
	imgPrato3.src = "./assets/imgs/";
})

btnMexico.addEventListener("click", () => {
	//titulos
	nomePrato1.textContent = '';
	nomePrato2.textContent = '';
	nomePrato3.textContent = '';

	//descricao
	descricaoPrato1.textContent = '';
	descricaoPrato2.textContent = '';
	descricaoPrato3.textContent = '';

	//imgs
	imgPrato1.src = "./assets/imgs/";
	imgPrato2.src = "./assets/imgs/";
	imgPrato3.src = "./assets/imgs/";
})
