window.onload = function(){
  const cadastrar = document.querySelector("#cadastrar");
  const nome = document.querySelector("#nome");
  const curso = document.querySelector("#curso");

  //método para limpar os campos
  function LimparCampos(){
    nome.value="";
    curso.value="";
  }

  //ação de cadastrar um registro
  cadastrar.addEventListener("click", function(){
    let formdata = new FormData();
    formdata.append('nome', '${nome.value}');
    formdata.append('curso', '${curso.value}');

    fetch("https://www.jussimarleal.com.br/exemplo_api/pessoa",{
      body: formdata,
      method: "post",
      mode: 'cors',
      cache: 'default'
    });.then(()=>{
      alert("Registro efetuado com sucesso.");
      LimparCampos();
    });
  });
}