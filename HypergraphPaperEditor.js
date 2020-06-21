xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
    alert(xhttp.status);
    if(xhttp.responseText===null){
        alert("YO");
    }
    else{
        if(xhttp.responseText===""){
            alert("YOOO")
        }
        else{
            alert("OY");
            alert(xhttp.responseText.toString())
        }
    }
}
xhttp.open("GET","http://localhost:8080",true);
xhttp.send();