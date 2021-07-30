window.onload = function(){
  const cadastrar = document.querySelector("#cadastrar");
  const nome = document.querySelector("#nome");
  const curso = document.querySelector("#curso");
  const buscar = document.querySelector("#buscar");
  const id = document.querySelector("#id");
  const alterar = document.querySelector("#alterar");
  const deletar = document.querySelector("#deletar");

  //método que lista uma pessoa
  buscar.addEventListener("click", function(){
    fetch(`https://www.jussimarleal.com.br/exemplo_api/pessoa/${id.value}`,{
      body: formdata,
      method: "get",
      mode: 'cors',
      cache: 'default'
    }).then(response=>{
      response.json().then(data =>{
        nome.value = data['nome'];
        curso.value = data['curso'];
      })
    })
  })
  //método para limpar os campos
  function LimparCampos(){
    nome.value="";
    curso.value="";
  }

  //ação de cadastrar um registro
  cadastrar.addEventListener("click", function(){
    let formdata = new FormData();
    formdata.append('nome', `${nome.value}`);
    formdata.append('curso', `${curso.value}`);

    fetch("https://www.jussimarleal.com.br/exemplo_api/pessoa",{
      body: formdata,
      method: "post",
      mode: 'cors',
      cache: 'default'
    }).then(()=>{
      alert("Registro efetuado com sucesso.");
      LimparCampos();
    });
  });

  //método para alterar um dado
  alterar.addEventListener("click", function(){
    fetch(`https://www.jussimarleal.com.br/exemplo_api/pessoa/${id.value}`,{
      body: formdata,
      method: "putt",
      headers:{
        'Content-type' : 'application/json; charset = UTF-8'
      }
      mode: 'cors',
      cache: 'default',
      body:JSON.stringify({
        'nome' : `${nome.value}`,
        'curso' : `${curso.value}`
      })
    }).then(()=>{
      alert("Registro alterado com sucesso.")
      LimparCampos();
    });
  });

  //método para deletar dados do registro
  deletar.addEventListener("click", function(){
    fetch(`https://www.jussimarleal.com.br/exemplo_api/pessoa/${id.value}`,{
      body: formdata,
      method: "delete",
      mode: 'cors',
      cache: 'default'
    }).then(()=>{
      alert("Registro deletado com sucesso!");
      LimparCampos();
    });
  })
}