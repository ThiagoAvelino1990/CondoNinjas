var mens = "[ERRO] - Verifique os dados e tente novamente!";

function submit(){
  let sNome = window.document.querySelector('.formularioNome');
  let nDoc = window.document.querySelector('.formularioDoc');
  let sEmail = window.document.querySelector('.formularioEmail');
  let nTel = window.document.querySelector('.formularioTel');
  let sEnd = window.document.querySelector('.formularioEnd');  

  if (sNome.value === '' ) {    
    window.alert(mens);

    limpaCampos(nDoc);
    limpaCampos(sEmail);
    limpaCampos(nTel);
    limpaCampos(sEnd);

  }else if (nDoc.value === '') {
    window.alert(mens);   

    limpaCampos(sNome);
    limpaCampos(sEmail);
    limpaCampos(nTel);
    limpaCampos(sEnd);   

  }else if (sEmail.value === '') {
    window.alert(mens);  

    limpaCampos(sNome);
    limpaCampos(nDoc);
    limpaCampos(nTel);
    limpaCampos(sEnd); 

  }else if (nTel.value === '') {
    window.alert(mens);  

    limpaCampos(sNome);
    limpaCampos(nDoc);
    limpaCampos(sEmail);    
    limpaCampos(sEnd);

  }else if (sEnd.value === '') {
    window.alert(mens); 
    
    limpaCampos(sNome);
    limpaCampos(nDoc);
    limpaCampos(sEmail);    
    limpaCampos(nTel);

  }else{
    mens = "[OK] - Os dados foram cadastros com sucesso";
    window.alert(mens); 
    
    limpaCampos(sNome);
    limpaCampos(nDoc);
    limpaCampos(sEmail);
    limpaCampos(nTel);
    limpaCampos(sEnd);
    
  }  
  
}

function limpaCampos(campo){
  campo.value = '';
  return campo;
}