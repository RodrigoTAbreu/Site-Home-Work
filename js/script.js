/*document.getElementById('confirm').onreset = function envia(){
  return confirm("Gostaria de resetar todos os campos?");  
};*/


function envia(){
  let nome = document.getElementById('nome')
  let name = Text(nome.value);
  

  let msg = document.getElementById('msg')


  msg.innerHTML = ` Obrigado ${name} , confira agora sua caixa de email em , confirme seu cadastro e entraremos em contato. `;


}


