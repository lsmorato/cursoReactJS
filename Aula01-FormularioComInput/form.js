function submitForm ()
{
    alert('Salvo com sucesso!');
    
    if(!validar)
        return;

    
}

function validar(){
    if(document.getElementById(comentario) == undefined){
        alert('Campo obrigatório!');
    }

    return false;
}