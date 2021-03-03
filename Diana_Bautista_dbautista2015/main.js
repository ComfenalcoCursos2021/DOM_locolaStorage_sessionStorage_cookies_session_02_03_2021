window.onload = function(){
    let object = new Object({
        name: "Diana",
        lastname:"Bautista",
        saludar: function(){
            return `Hola ${this.name} ${this.lastname} Te saluda la chaché`;

        }
    })
    // localStorage.setItem("response-data", JSON.stringify({mensaje:"sucess", data:object.saludar()}));

    let nombre = "data";
    //const frame = document.createDocumentFragment();
    caches.open(nombre).then
}