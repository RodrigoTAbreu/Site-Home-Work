/*document.getElementById('confirm').onreset = function envia(){
  return confirm("Gostaria de resetar todos os campos?");  
};*/


function envia(){
  let nome = document.getElementById('tnome').value
  let mail = document.getElementById('tmail').value
  let phone = document.getElementById('tphone').value


  let msg = document.getElementById('msg')


  msg.innerHTML = `Olá ${nome} , confira agora sua caixa de email em ${mail}, confirme seu cadastro, em breve entraremos em contato no telefone ${phone}. Obrigado !!`;

  document.getElementById('tnome').value = ''


}


