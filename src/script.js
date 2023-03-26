// MENU
let menu = document.querySelector(".menu");
let btnMenuBi = document.querySelector(".btnMenuBi");
let spanRotasMenu = document.querySelectorAll(".spanRotas");
let rotas = document.querySelector(".rotas");

let menuFuncao = ()=>{
    if(menu.classList == "menu menuActive"){
        menu.classList.remove("menuActive");
    }else{
        menu.classList.add("menuActive");
    }
};

btnMenuBi.addEventListener("click", menuFuncao);

// CONVENIOS

let conveniosDados = document.querySelector(".conveniosDados");

fetch("../components/convenios.json").then((response)=>{
    response.json().then((convenios)=>{

        for(let i = 0; i < convenios.length; i++){
            let div = document.createElement("div");
            div.classList.add("cardConvenio")

            div.innerHTML = `
                <a href="${convenios[i].link}" target="_blanck">
                    <img src="${convenios[i].img}">
                    <p>${convenios[i].nome}</p>
                </a>
            `;

            conveniosDados.appendChild(div);
        }
    })
})

// formaList
let gridForm = document.querySelector(".gridForm");
let listForm = document.querySelector(".listForm");
let convenio = document.querySelector(".conveniosDados");

gridForm.addEventListener("click", ()=>{
    convenio.classList.remove("conveniosDadosActive");
})

listForm.addEventListener("click", ()=>{
    convenio.classList.add("conveniosDadosActive");
})

// pesquisa

let pesquisaConvenios = document.querySelector("#pesquisaConvenios");
let pesquisaResult = document.querySelector(".pesquisaResult");
pesquisaResult.style.display = "none";

pesquisaConvenios.addEventListener("keyup", ()=>{

    fetch("../components/convenios.json").then((response)=>{
        response.json().then((convenios)=>{

            pesquisaResult.innerHTML = "";
    
            for(let i = 0; i < convenios.length; i++){

                if(pesquisaConvenios.value.length === 0){
                    pesquisaResult.innerHTML = "";

                    pesquisaResult.style.display = "none";

                }else if(convenios[i].nome.toLowerCase().includes(pesquisaConvenios.value.toLowerCase())){

                    pesquisaResult.style.display = "block";

                    let div = document.createElement("div");
                    div.classList.add("cardConvenioPesquisa")
        
                    div.innerHTML = `
                        <a href="${convenios[i].link}" target="_blanck">
                            <img src="${convenios[i].img}">
                            <p>${convenios[i].nome}</p>
                        </a>
                    `;
        
                    pesquisaResult.appendChild(div);

                }

                setTimeout(()=>{
                    if(pesquisaResult.innerHTML == "" || pesquisaResult.innerHTML == "Sem Resultados!"){
                        pesquisaResult.innerHTML = "Sem Resultados!"
                    }
                },1000)
            }
        })
    })
})

let closeInputPesquisa = document.querySelector(".closeInputPesquisa");

closeInputPesquisa.addEventListener("click", ()=>{
    pesquisaConvenios.value = "";
    pesquisaResult.innerHTML = "";
    pesquisaResult.style.display = "none";
})