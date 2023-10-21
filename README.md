# Formulário de validação de e-mail

### Utilizado função isEmail, que valida se o email é correto.

```
function isEmail(email){
    var er = new RegExp(/^[A-Za-z0-9_\-\.]+@[A-Za-z0-9_\-\.]{2,}\.[A-Za-z0-9]{2,}(\.[A-Za-z0-9])?/);

    return er.test(email); 
		
}
```
