function enviar() {
    var email = document.getElementById('email')
    var form = document.querySelector('form')
    
        if (email.value == '') {
            window.alert('[ERRO] Preencha um email.!')
            return;
        }
        
        if (! isEmail(email.value)) {
            window.alert('[ERRO] Email inválido!Preencha por exemplo:seunome@gmail.com');
            return;
        }

        alert(`Sucesso! O email enviado: ${email.value} é valido!`);

}

function isEmail(email){
    var er = new RegExp(/^[A-Za-z0-9_\-\.]+@[A-Za-z0-9_\-\.]{2,}\.[A-Za-z0-9]{2,}(\.[A-Za-z0-9])?/);

    return er.test(email); 
		
}
