//log-in
var provider = new firebase.auth.GoogleAuthProvider();

$('#login').click(function(){

    firebase.auth().signInWithPopup(provider).then(function(result) {

        console.log(result.user);
        guardaDatos(result.user);
        $('#login').hide();
        $('#root').append("<img width='100px' src='"+result.user.photoURL+"' /><br>");
        $('#root').append("<h3> Bienvenido <br>'"+result.user.displayName+"' </h3><br><br>");

        $('#root').append("<form> Sobre-escribir Contraseña:<br><input type='text' name='pass'><br>");
        $('#root').append("<p>Recomendamos sobre-escribir la contraseña para una mayor anonimidad</p>");
    });
});

//función guarda los datos automaticamente
function guardaDatos(user){

    var usuario = {
        uid:user.uid,
        nombre:user.displayName,
        email:user.email,
        foto:user.photoURL
    }

    firebase.database().ref("Base2P/" + user.uid)
    .set(usuario)
}


/*
//escribir en la base de datos
$('#guardar').click(function(){

    firebase.database().ref("Base1P").set({
        nombre:"Carlos",
        edad:"19",
        genero:"Masculino"

    })
});
*/

//leyendo la DB
firebase.database().ref("Base2P")
.on("child_added", function(s){

    var user = s.val();
    //$('#root').append("<img width='100px' src='"+user.foto+"' />");
    //$('#root').append("<h3> Bienvenido: "+user.nombre+" <h3><br>");
})



// Open and close sidebar
function w3_open() {
    document.getElementById("mySidebar").style.width = "100%";
    document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
}
