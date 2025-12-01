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
	descricaoPrato1.textContent = 'Uma tradicional pizza italiana';
	descricaoPrato2.textContent = 'Uma tradicional comida a base de massa';
	descricaoPrato3.textContent = 'Uma tradicional comida italiana a base de arroz';

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
	descricaoPrato1.textContent = 'Bolinho de arroz temperado com vinagre, que pode ser enrolado.';
	descricaoPrato2.textContent = 'Bolinho de arroz temperado com vinagre, servido em cone';
	descricaoPrato3.textContent = 'Frutos do mar ou vegetais empanados em uma massa leve e fritos';

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
	descricaoPrato1.textContent = 'Tortilhas (milho ou trigo) recheadas com carne, frango, peixe ou vegetais';
	descricaoPrato2.textContent = 'Tortilhas de trigo grandes enrolada com proteinas e vegetais';
	descricaoPrato3.textContent = 'Tortilhas de milho ou trigo com queijo derretido, com carne ou vegetais';

	//imgs
	imgPrato1.src = "./assets/imgs/imgs-mexic/tacos.jpg";
	imgPrato2.src = "./assets/imgs/imgs-mexic/burrito.jpg";
	imgPrato3.src = "./assets/imgs/imgs-mexic/quesadilhas.jpg";

	//background das imgs dos cards
	back_fundo1.style.backgroundImage = './assets/imgs/imgs-mexic/back-mexic.jpg';
	back_fundo2.style.backgroundImage = './assets/imgs/imgs-mexic/back-mexic.jpg';
	back_fundo3.style.backgroundImage = './assets/imgs/imgs-mexic/back-mexic.jpg';
})

//trocar o tema
function toggleTheme() {
	body.classList.toggle("dark")
}

btnTema.addEventListener("click", toggleTheme)

//audio
const audio = document.getElementById("audio");

audio.volume = 0.2;
audio.loop = true;

window.addEventListener("load", () => {
    const playPromise = audio.play();
    if (playPromise !== undefined) {
        playPromise.catch((err) => {
            console.warn("Autoplay prevented:", err);
            const onFirstInteraction = () => {
                audio.play().catch(()=>{});
                window.removeEventListener("click", onFirstInteraction);
            };
            window.addEventListener("click", onFirstInteraction, { once: true });
        });
    }
});