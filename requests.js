const xhr = new XMLHttpRequest();

function sendRequestOnEnter(email, password){
    if(event.key === 'Enter') {
        sendRequest(email, password);
    }
}

function sendRequest(mail, password){
    var data = new FormData();
    data.append('usuario', mail);
    data.append('password', password);
    const url = " https://benefique-moliere-12319.herokuapp.com/http://ipmpadres.com.ar/intranet/aspsql/verifusuario_1.asp"+"?usuario="+mail+"&password="+password;
    xhr.open("POST", url);
    xhr.send(data);
}


xhr.onreadystatechange=(e)=>{
    console.log(xhr.responseText);

    let validCredential = xhr.responseText.includes('form.action = "pad000pre.asp"');

    if(validCredential){

    }
}